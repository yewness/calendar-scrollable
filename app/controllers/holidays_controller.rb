class HolidaysController < ApplicationController
  def index
    start = params[:start_date].to_date.beginning_of_month
    @holidays = Holiday.where('start_date > ? AND start_date < ?', start, start.end_of_month)
  end
end
