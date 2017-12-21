json.(person, :first_name, :last_name, :id, :gender, :birth, :death, :email, :father, :mother, :mobile, :landline, :spouse, :primary)
json.children person.primary? ? (person.children.present? ? : person.children :  []) : (person.spouse.present? && person.spouse.children.present? ?  person.spouse.children || [])
