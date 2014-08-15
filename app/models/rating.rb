class Rating < ActiveRecord::Base

  belongs_to :user
  belongs_to :photo

  attr_accessible :photo_id, :status, :user_id
end
