class IndexController < ApplicationController
  before_filter :authenticate_user!, except: :show

  def index
    @photos = Photo.all(:order => 'RANDOM()', :limit => 6)
  end

  def show
    #PK renders a different layout so that there is no header showing.
    render layout: "homepage_layout"
  end

end