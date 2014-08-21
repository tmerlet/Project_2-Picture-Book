class UsersController < ApplicationController

  def index
    @users = User.order(:name).page(params[:page])
  end

  def show
    @user = User.find(params[:id])
    @albums = Album.all
    @comment = Comment.find(params[:id])
    @photo = Photo.find(params[:id])
    
  end


end