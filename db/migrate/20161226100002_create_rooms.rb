class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.string :title
      t.references :professor, index: true
      t.timestamps
    end
  end
end
