json.(person, :first_name, :last_name, :id, :gender, :birth, :death, :email, :father, :mother, :mobile, :landline, :spouse, :primary)
json.children person.primary? ? person.children : person.spouse.children
