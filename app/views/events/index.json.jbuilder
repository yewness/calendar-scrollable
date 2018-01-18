json.array! @events do |event|
  json.id event.id
  json.title event.name
  json.start event.start_date.strftime('%Y-%m-%d')
  json.end event.end_date.strftime('%Y-%m-%d')
end
