class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :nickname, default: "匿名"
      t.text :text
      t.integer :room_id
      t.timestamps
    end
  end
end
