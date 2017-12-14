class AddPartnerIdToPeople < ActiveRecord::Migration[5.1]
  def change
    add_column :people, :partner_id, :integer
    add_index :people, :partner_id
  end

end
