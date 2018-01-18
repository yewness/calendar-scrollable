json.array! @holidays do |holiday|
  json.id holiday.id
  json.title holiday.name
  json.start holiday.start_date.strftime('%Y-%m-%d')
  json.end holiday.end_date.strftime('%Y-%m-%d')
  json.color '#004D40'
end
