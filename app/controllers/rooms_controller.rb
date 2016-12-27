class RoomsController < ApplicationController

  def index
  end

  def show
    @room = Room.find(params[:id])
    @room_name = @room.title
    @comment = Comment.new
    @comments = Comment.all
    @speaker_deck_id = @room.speaker_deck
  end

  def search
    # 検索フォームのキーワードをあいまい検索して、roomsテーブルからroom情報を取得する
    @rooms = Room.where('title LIKE(?)', "%#{params[:keyword]}%")
  end

  def new
    @room = Room.new
  end

  def create
    @room = Room.new(room_params)
    @room.save
    redirect_to root_path
  end

  def room_params
    params.require(:room).permit(:title,:speaker_deck).merge(professor_id: current_professor.id)
  end
end
