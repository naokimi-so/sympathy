class CommentsController < ApplicationController
  before_action :set_room, only: :create

  def create
    @room.comments.create(comment_params)
    @comments = @room.comments
    redirect_to :back
  end

  private
  def set_room
    @room = Room.find(params[:room_id])
  end

  def comment_params
    params.require(:comment).permit(:id, :text, :nickname).merge(room_id: params[:room_id])
  end

end
