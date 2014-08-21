class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    if user.role? :admin
      can :manage, :all
    else
      can :read, [Tag, User]
      can :read, [Album, Photo, Comment]
      can [:edit, :update, :destroy], Album do |album|
        album.user_id == user.id
      end
      can [:edit, :update, :destroy], User do |u|
        u.id == user.id
      end 
      can [:edit, :update, :destroy], Photo do |photo|
        album.photo.user.id == user.id
      end
      can :create, Photo do |photo|
        album.user_id == user.id
      end

      
    
    end
  end
end
