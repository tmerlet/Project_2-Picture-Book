class ApplicationController < ActionController::Base
  protect_from_forgery

  #PK this before filter is necessary so that the search bar is loaded and can be run in the nav bar
  before_filter :set_ransack_form_variables

end
