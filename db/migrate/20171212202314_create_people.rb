class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :firstname
      t.string :lastname
      t.string :gender
      t.date :dob
      t.date :dod
      t.string :mobile
      t.string :landline
      t.string :email

      t.timestamps
    end
  end
end
