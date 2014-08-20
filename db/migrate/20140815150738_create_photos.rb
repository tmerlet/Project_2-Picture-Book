class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :description
      t.string :location
      t.text :image
      t.integer :album_id
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
