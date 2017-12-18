Rails.application.routes.draw do
  resources :addresses
  resources :people


  put '/people/:id/spouse', controller: :people, action: :add_spouse
  put '/people/:id/child', controller: :people, action: :add_child
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
