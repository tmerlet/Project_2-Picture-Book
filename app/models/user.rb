class User < ActiveRecord::Base

  has_many :comments
  has_many :ratings
  has_many :albums

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :profile_image, :name, :dob
  # attr_accessible :title, :body

  mount_uploader :profile_image
  ProfileImageUploader
end
