class Room < ActiveRecord::Base
  belongs_to :professor
  has_many :likes
  has_many :comments

  validates :title, uniqueness: true # 値がユニークであれば検証成功
end
