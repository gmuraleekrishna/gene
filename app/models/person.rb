class Person < ApplicationRecord
    has_ancestry orphan_strategy: :restrict
    has_one :partner, class_name: 'Person', foreign_key: 'partner_id', dependent: :destroy
    has_one :address
end
