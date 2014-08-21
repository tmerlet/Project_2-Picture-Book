class UsersController < ApplicationController
  before_filter :authenticate_user!
  
  def index
    @users = User.order(:created_at).page(params[:page])
  end

  def show
    @user = User.find(params[:id])
    @albums = Album.all
    #changed @comment & @photo to '.all' rather than '.find(params[:id])' so that when user clicks on my profile it will display their profile only.
    @comment = Comment.all
    @photo = Photo.all
    
  end


end