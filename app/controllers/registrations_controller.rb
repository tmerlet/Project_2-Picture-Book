class RegistrationsController < Devise::RegistrationsController


# this registration controller was setup to take control of elements of the devise controller.  the routes also had to be changed. 
  def create
    super

    @user.profile_image = uploaded_picture(params[:canvasimage])
    @user.save
  end

  def update

    self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)
        prev_unconfirmed_email = resource.unconfirmed_email if resource.respond_to?(:unconfirmed_email)

        resource_updated = update_resource(resource, account_update_params)
        yield resource if block_given?
        if resource_updated
          if is_flashing_format?
            flash_key = update_needs_confirmation?(resource, prev_unconfirmed_email) ?
              :update_needs_confirmation : :updated
            set_flash_message :notice, flash_key
          end
          sign_in resource_name, resource, bypass: true
          respond_with resource, location: users_path
        else
          clean_up_passwords resource
          respond_with resource
        end
    @user.profile_image = uploaded_picture(params[:canvasimage])
    @user.save
  end

  def uploaded_picture base_64_string
     return unless base_64_string
     base_64_string.gsub!("data:image/png;base64,", "")
     tempfile = Tempfile.new ['upload', 'jpg']
     tempfile.binmode
     tempfile.write(Base64.decode64(base_64_string))
     ActionDispatch::Http::UploadedFile.new(tempfile: tempfile, filename: 'upload.jpg')
   end
end