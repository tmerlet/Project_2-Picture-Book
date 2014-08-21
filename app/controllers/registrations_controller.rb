class RegistrationsController < Devise::RegistrationsController


  def create
    super

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