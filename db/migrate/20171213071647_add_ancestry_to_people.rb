class AddAncestryToPeople < ActiveRecord::Migration[5.1]
  def change
    add_column :people, :ancestry, :string
    add_index :people, :ancestry
  end
end
