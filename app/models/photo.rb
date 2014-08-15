class Photo < ActiveRecord::Base

  has_and_belongs_to_many :tags
  has_many :ratings
  has_many :comments


  attr_accessible :description, :location
end
