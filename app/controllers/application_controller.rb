class ApplicationController < ActionController::Base
  protect_from_forgery

  #PK this before filter and method sets up the ransack search so that it can run successfully irrespective of what page on the website you are on
  before_filter :set_ransack_form_variables

  def set_ransack_form_variables
    @q = Album.search(params[:q])
    @albums = @q.result(distinct: true).order(:created_at).page(params[:page])
  end

  def after_sign_in_path_for(resource)
      request.env['omniauth.origin'] || stored_location_for(resource) || '/index'
  end

  def after_sign_up_path_for(resource)
    request.env['omniauth.origin'] || stored_location_for(resource) || '/index'
  end

end
