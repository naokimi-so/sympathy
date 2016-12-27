Rails.application.routes.draw do
  devise_for :professors
  root 'rooms#index'

  resources :rooms, only: [:index, :show, :new, :create] do
    resources :comments, only: :create
    resources :likes, only: :create
    collection do
      get 'search'
    end
  end

  resources :professors, only: :show

end
