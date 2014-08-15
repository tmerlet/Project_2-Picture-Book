CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider  => 'AWS',  # required
    :aws_access_key_id  => 'AKIAIXO52E2KNCFLP4XA',  # required
    :aws_secret_access_key  => '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',  # required
    :region => 'eu-west-1',  # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = 'photoapp-wdi7' ,  # required
  config.fog_public  = true  # optional, defaults to true
end