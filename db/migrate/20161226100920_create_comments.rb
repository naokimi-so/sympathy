class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :nickname
      t.text :text
      t.integer :room_id
      t.timestamps
    end
  end
end
