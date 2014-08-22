class User < ActiveRecord::Base

  has_many :comments
  has_many :ratings
  has_many :albums

  #PK :set_default_role sets the default role of as user to "user". If a user is not an admin they will automatically be a "user".
  before_create :set_default_role

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :role, :email, :password, :password_confirmation, :remember_me, :profile_image, :name, :dob
  # attr_accessible :title, :body


  mount_uploader :profile_image, ProfileImageUploader

  def role?(role)
    self.role.to_s == role.to_s
  end

  private
  def set_default_role
    self.role = 'user'  
  end

end
