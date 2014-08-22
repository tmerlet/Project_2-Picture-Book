class ApplicationController < ActionController::Base
  protect_from_forgery

  #PK this before filter and method sets up the ransack search so that it can run successfully in the nav bar.
  before_filter :set_ransack_form_variables

  # helper_method :current_user

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to "/index", alert: "You can't access this page"
  end

  #This method effectively replaces the index method in albums controller.
  def set_ransack_form_variables
    @q = Album.search(params[:q])
    @albums = @q.result(distinct: true).order(:created_at).page(params[:page])
  end

  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end

  # def authenticate_user!
  #   unless current_user 
  #     redirect_to new_session_path, alert: "You need to signup or login to access this page"
  #   end
  # end

  #PK: the below 2 methods override the default Devise redirect such that when a user signs-in or signs-up they are redirected to the index page.
  def after_sign_in_path_for(resource)
      request.env['omniauth.origin'] || stored_location_for(resource) || '/index'
  end

  def after_sign_up_path_for(resource)
    request.env['omniauth.origin'] || stored_location_for(resource) || '/index'
  end

end
