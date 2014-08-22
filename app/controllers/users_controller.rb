class UsersController < ApplicationController
  before_filter :authenticate_user!
  
  def index
    @users = User.order(:name).page(params[:page])
  end

  def show
    @user = User.find(params[:id])
    @album = Album.all
    #PK changed @comment & @photo to '.all' rather than '.find(params[:id])' so that when user clicks on my profile it will display their profile only.
    @comment = Comment.all
    @photo = Photo.all
  end

  def update
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_attributes(params[:user])
        format.html { redirect_to users_path, notice: 'User was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @user = User.find(params[:id])
    authorize! :destroy, @user
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { head :no_content }
    end
  end

end