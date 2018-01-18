Rails.application.routes.draw do
  resources :events
  resources :holidays
  root to: 'home#index'
  get :full_calendar, to: 'full_calendar#index', as: :full_calendar
  get :infinite_calendar, to: 'infinite_calendar#index', as: :infinite_calendar
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
