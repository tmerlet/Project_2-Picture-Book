class IndexController < ApplicationController
  before_filter :authenticate_user!, except: :show

  def index
    @photos = Photo.all(:order => 'RANDOM()', :limit => 6)
    
  end

  def show
    render layout: "homepage_layout"
  end

end