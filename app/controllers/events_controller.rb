class EventsController < ApplicationController
  def index
    start = params[:start_date].to_date.beginning_of_month
    @events = Event.where('start_date > ? AND start_date < ?', start, start.end_of_month)
  end
end
