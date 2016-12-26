Rails.application.routes.draw do
  devise_for :professors
  root 'rooms#welcome'
  resources :rooms do
    resources :comments, only: :create
    resources :likes, only: :create
  end
  resources :professors, only: :show
end
