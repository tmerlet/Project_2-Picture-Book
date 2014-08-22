class PhotosController < ApplicationController
  before_filter :authenticate_user!
  # GET /photos
  # GET /photos.json
  before_filter :the_album
  respond_to :json
  
  def index
    @photos = Photo.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @photos }
    end
  end

  # GET /photos/1
  # GET /photos/1.json
  def show
    @photo = Photo.find(params[:id])
    @comments = Comment.all
    @ratingpositive = []
    @ratingnegative = [] 

    if @photo.ratings.any? && current_user
        @ratingpositive =   @photo.ratings.where(status: "positive", user_id: current_user.id)
        @ratingnegative = @photo.ratings.where(status: "negative", user_id: current_user.id)
    end 

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @photo }
    end
  end

  # GET /photos/new
  # GET /photos/new.json
  def new
    @album = Album.find(params[:album_id])
    @photo = Photo.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @photo }
    end
  end

  # GET /photos/1/edit
  def edit
    @photo = Photo.find(params[:id])
    authorize! :edit, @photo
  end

  # POST /photos
  # POST /photos.json
  def create
    @album = Album.find(params[:album_id])
    @photo = @album.photos.new(params[:photo])
    
      if @photo.save 
        # had to override to use gem and multiphoto upload 
        # there is the manual input of json, found under views/photos/create.json.jbuilder
      else
        render :json => { "errors" => @photo.errors } 
      end
  end

  # PUT /photos/1
  # PUT /photos/1.json
  def update
    photo_params = params[:photo]
    tags = photo_params.delete("tags")
    
    @photo = Photo.find(params[:id])

    all_tags = tags.map do |tag|
          Tag.find_or_create_by_name(tag)
    end
      # if the tag already exists, asign that to the photo
      # if the tag does not already exist, create a new one
    
    @photo.tags = all_tags

    @photo.save
    respond_to do |format|
      if @photo.update_attributes(photo_params)
        format.html { redirect_to album_photo_path(@album, @photo), notice: 'Photo was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /photos/1
  # DELETE /photos/1.json
  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    authorize! :destroy, @photo
    
    respond_to do |format|
      format.html { redirect_to album_path(@album) }
      format.json { head :no_content }
    end
  end

  private
  
    def the_album
      @album = Album.find(params["album_id"])
    end
end