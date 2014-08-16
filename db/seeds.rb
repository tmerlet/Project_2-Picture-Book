# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


photo1 = Photo.create(description: "description 1", location: "location 1 ", image: "image 1")
photo2 = Photo.create(description: "description 2", location: "location 2 ", image: "image 2")
photo3 = Photo.create(description: "description 3", location: "location 3 ", image: "image 3")
photo4 = Photo.create(description: "description 3", location: "location 3 ", image: "image 3")

User1 = User.create(name: "Piers", email: "piers@ga.com", password: "password", password_confirmation: "password", dob: "12/04/2012", profile_image: File.open(File.join(Rails.root.join('public'), 'piersprofilepic.jpg')))

User2 = User.create(name: "Alex", email: "alex@ga.com", password: "password", password_confirmation: "password", dob: "12/04/2012", profile_image: File.open(File.join(Rails.root.join('public'), 'alexprofilepic.jpg')))

User3 = User.create(name: "Toby", email: "alex@ga.com", password: "password", password_confirmation: "password", dob: "12/04/2012", profile_image: File.open(File.join(Rails.root.join('public'), 'tobyprofilepic.jpg'))) 
