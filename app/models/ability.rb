class Ability
  include CanCan::Ability

  #PK admins can do anything, users are limited to :read all (ie. can view the index and show pages) as well as editing and destroying their own material.

  def initialize(user)
    user ||= User.new
    if user.role? :admin
      can :manage, :all
    else user.role? :user
      can :read, [Tag, User]
      can :read, [Album, Photo, Comment]
      can [:edit, :update, :destroy], Album do |album|
        album.user_id == user.id
      end
      can [:edit, :update, :destroy], User do |u|
        u.id == user.id
      end 
      can [:edit, :update, :destroy], Photo do |photo|
        photo.album.user.id == user.id
      end
      can :create, Photo do |photo|
        album.user_id == user.id
      end
    end
  end
end
