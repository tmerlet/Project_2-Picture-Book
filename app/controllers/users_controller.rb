class UsersController < ApplicationController
  before_filter :authenticate_user!
  
  def index
    @users = User.order(:created_at).page(params[:page])
  end

  def show
    @user = User.find(params[:id])
    @albums = Album.all
    @comment = Comment.find(params[:id])
    @photo = Photo.find(params[:id])
    
  end


end