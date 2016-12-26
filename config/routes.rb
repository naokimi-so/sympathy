Rails.application.routes.draw do
  root 'rooms#welcome'
  devise_for :professors
end
