require 'html-proofer'

task :test do
  HTMLProofer.check_directory("./_gh_pages", {
    :allow_hash_href => true,
    :allow_missing_href => true,
    :empty_alt_ignore => true,
    :only_4xx => true,
    :file_ignore => ['/bootstrap-sncf.metier.v4.3.1-r0.zip']
  }).run
end
