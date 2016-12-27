class ProfessorsController < ApplicationController
  before_action :authenticate_professor!

  def show
    @professors = Professor.find(params[:id])
    @rooms = @professors.rooms.includes(:professor).order('created_at DESC')
  end

end
