class UsersController < ApplicationController

  def index
    @users = User.order(:created_at).page(params[:page])
  end

  def show
    @user = User.find(params[:id])
    @albums = Album.all
    @comment = Comment.find(params[:id])
    @photo = Photo.find(params[:id])
    
  end

  def create
    @user = User.new(params[:user])

    respond_to do |format|
      if @user.save
        UserMailer.registration_confirmation(@user).deliver
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render json: @user, status: :created, location: @user }
      else
        format.html { render action: "new" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

end