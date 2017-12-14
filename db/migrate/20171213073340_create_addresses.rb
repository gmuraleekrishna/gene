class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :addressline1
      t.string :addressline2
      t.string :city
      t.string :state
      t.string :country
      t.string :pincode
      t.belongs_to :person, index: true
      t.timestamps
    end
  end
end
