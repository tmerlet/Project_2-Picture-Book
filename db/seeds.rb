# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create(role: "admin", name: "Piers", email: "piers.karpinski@gmail.com", password: "password", password_confirmation: "password", dob: "12/04/2012", profile_image: File.open(File.join(Rails.root.join('public'), 'piersprofilepic.jpg')))

user2 = User.create(role: "admin", name: "Alex", email: "alekswindett@hotmail.com", password: "password", password_confirmation: "password", dob: "12/04/2012", profile_image: File.open(File.join(Rails.root.join('public'), 'alexprofilepic.jpg')))

user3 = User.create(role: "admin", name: "Toby", email: "tmerlet@gmail.com", password: "password", password_confirmation: "password", dob: "12/04/2012", profile_image: File.open(File.join(Rails.root.join('public'), 'tobyprofilepic.jpg'))) 

# album1 = Album.create(name: "Funny business", description: "Load of random stuff")

# album2 = Album.create(name: "My favourit holiday", description: "A weekend in paris")

# album3 = Album.create(name: "Goofing around", description: "A night out to remember")

# photo1 = Photo.create(description: "description 1", location: "TN2 4DE", image: "mountain01.jpg")
# photo2 = Photo.create(description: "description 2", location: "", image: "mountain02.jpg")
# photo3 = Photo.create(description: "description 3", location: "", image: "mountain03.jpg")

# tag1 = Tag.create(name: "fun")
# tag2 = Tag.create(name: "cool")
# tag3 = Tag.create(name: "sport")

# comment1 = Comment.create(content: "radical man, love your stuff")
# comment2 = Comment.create(content: "groovy dude")
# comment3 = Comment.create(content: "pimping!")

# rating1 = Rating.create(status: "positive")
# rating2 = Rating.create(status: "negative")
# rating3 = Rating.create(status: "positive")

# photo1.tags << tag1
# photo2.tags << tag1
# photo2.tags << tag2
# photo3.tags << tag3

# album1.photos << photo1
# album1.photos << photo2
# album1.photos << photo3
# album2.photos << photo2
# album3.photos << photo3

# user1.albums << album1
# user1.albums << album2
# user2.albums << album2
# user3.albums << album3

# user1.comments << comment1
# user2.comments << comment2
# user3.comments << comment3

# photo1.comments << comment3
# photo2.comments << comment1
# photo3.comments << comment2

# user1.ratings << rating1
# user1.ratings << rating2
# user1.ratings << rating3

# photo1.ratings << rating3
# photo2.ratings << rating1
# photo3.ratings << rating2
