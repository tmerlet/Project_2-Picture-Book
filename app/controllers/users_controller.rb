class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @albums = Album.all
    
  end

end