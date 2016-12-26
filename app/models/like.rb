class Like < ActiveRecord::Base
  belongs_to :room, counter_cache: :likes_count
end
