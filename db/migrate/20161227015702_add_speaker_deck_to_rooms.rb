class AddSpeakerDeckToRooms < ActiveRecord::Migration
  def change
    add_column :rooms, :speaker_deck, :string
  end
end
