class RoomsController < ApplicationController

  def show
    @room = Room.find(params[:id])
    @room_name = @room.title
  end

  def new
  end

  def create
    Room.create(room_params)
  end

  def room_params
    params.require(:title).permit(:title).merge(user_id: current_user.id)
  end
end
