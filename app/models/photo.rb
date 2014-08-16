class Photo < ActiveRecord::Base

  has_and_belongs_to_many :tags
  has_many :ratings
  has_many :comments
  belongs_to :album


  attr_accessible :description, :location, :image
end
