class IndexController < ApplicationController
  def index
    @photos = Photo.all(:order => 'RANDOM()', :limit => 5)
  end

  def show
    render layout: "homepage_layout"
  end

end