Rails.application.routes.draw do
  devise_for :professors
  root 'rooms#welcome'
  get 'room' , to: 'rooms#show'
end
