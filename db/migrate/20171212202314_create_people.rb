class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.date :birth
      t.date :death
      t.string :mobile
      t.string :landline
      t.string :email
      t.integer :spouse_id
      t.boolean :primary
      t.timestamps
    end
  end
end
