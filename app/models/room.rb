class Room < ActiveRecord::Base
  belongs_to :professor
  has_many :likes
  has_many :comments
end
