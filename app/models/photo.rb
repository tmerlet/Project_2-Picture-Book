class Photo < ActiveRecord::Base

  has_and_belongs_to_many :tags
  has_many :ratings
  has_many :comments
  belongs_to :album

  attr_accessible :description, :location, :image, :tags
  mount_uploader :image, AlbumPhotoUploader
  geocoded_by :location
  after_validation :geocode
  # , if => :location_changed?

end
