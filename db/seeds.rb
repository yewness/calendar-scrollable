# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
date = Time.zone.now
Event.find_or_create_by(name: Faker::Name.title, start_date: date - 3.month)
Event.find_or_create_by(name: Faker::Name.title, start_date: date - 3.month)
Event.find_or_create_by(name: Faker::Name.title, start_date: date - 2.month)
Event.find_or_create_by(name: Faker::Name.title, start_date: date - 1.month)
Event.find_or_create_by(name: "Event 1", start_date: date, end_date: date + 1.hour)
Event.find_or_create_by(name: "Event 2", start_date: date + 1.day, end_date: date + 1.day + 1.hour)
Event.find_or_create_by(name: "Event 3", start_date: date + 2.day, end_date: date + 2.day + 1.hour)
Event.find_or_create_by(name: "Event 4", start_date: date + 3.day, end_date: date + 3.day + 1.hour)
Event.find_or_create_by(name: "Event 5", start_date: date, end_date: date + 1.hour)
Event.find_or_create_by(name: "Event 6", start_date: date + 1.month + 1.day, end_date: date + 1.month + 1.day + 1.hour)
Event.find_or_create_by(name: "Event 7", start_date: date + 1.month + 2.day, end_date: date + 1.month + 2.day + 1.hour)
Event.find_or_create_by(name: "Event 8", start_date: date + 1.month + 3.day, end_date: date + 1.month + 3.day + 1.hour)
date = Time.zone.now + 6.day
Holiday.find_or_create_by(name: "Holiday 1", start_date: date, end_date: date + 1.hour)
Holiday.find_or_create_by(name: "Holiday 2", start_date: date + 1.day, end_date: date + 1.day + 1.hour)
Holiday.find_or_create_by(name: "Holiday 3", start_date: date + 2.day, end_date: date + 2.day + 1.hour)
Holiday.find_or_create_by(name: "Holiday 4", start_date: date + 3.day, end_date: date + 3.day + 1.hour)
