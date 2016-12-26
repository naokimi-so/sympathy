class LikesController < ApplicationController
  before_action :set_room

  def create
    @room.likes.create(like_params)
  end

  private
  def set_room
    @room = Room.find(params[:room_id])
  end

  def like_params
    params.permit(room_id: params[:room_id])
  end

end
