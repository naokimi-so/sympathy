class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.references :room, index:true
      t.timestamps
    end
  end
end
