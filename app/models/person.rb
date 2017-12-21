class Person < ApplicationRecord
  has_ancestry orphan_strategy: :restrict
  has_one :spouse, foreign_key: 'spouse_id', class_name: 'Person'
  has_one :address
  validates_presence_of :first_name
  validates_presence_of :last_name
  validates_presence_of :gender
  validates_presence_of :birth
  validates :gender, presence: true, inclusion: { in: %w{M F} }
  validate :only_person_with_spouse_have_children, on: :add_child

  def add_spouse spouse
    spouse.spouse = self
    spouse.save!
    update_attribute(:spouse, spouse)
  end

  def add_child child
    @child = child
    @child.primary = true
    child_hash = @child.as_json.except('ancestry')
    if primary?
      self.children.create(child_hash)
    else
      self.spouse.create(child_hash)
    end
  end

  def male?
      gender === 'M'
  end

  def female?
    gender === 'F'
  end

  def father
    if parent.present?
      if parent.male?
        parent
      else
        parent.spouse
      end
    end
  end

  def mother
    if parent.present?
      if parent.female?
        parent
      else
        parent.spouse
      end
    end
  end

  def married?
    spouse.present?
  end

  private

  def only_person_with_spouse_have_children
    errors.add(:children, "cannot exist without spouse") unless married?
  end
end
