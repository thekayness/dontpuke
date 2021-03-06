Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  get '/namesearch', to: 'home#search_name'

  get '/addresssearch', to: 'home#search_address'

  get '/restaurants/:id', to: 'home#show'

  put '/inspections/:id', to: 'home#flag'
 
end
