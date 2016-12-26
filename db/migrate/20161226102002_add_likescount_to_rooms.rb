class AddLikescountToRooms < ActiveRecord::Migration
  def change
    add_column :likes, :likes_count, :integer, default: 0
  end
end
