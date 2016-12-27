class AddLikescountToRooms < ActiveRecord::Migration
  def change
    add_column :rooms, :likes_count, :integer, default: 0
  end
end
