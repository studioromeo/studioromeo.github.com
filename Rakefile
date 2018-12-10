require 'html-proofer'

task :default do
    sh "bundle exec scss-lint"
    sh "bundle exec jekyll build"

    HTMLProofer.check_directory("./_site", {
        :disable_external => true, # unfortunately too unreliable
        :enforce_https => true,
        :check_html => true,
        :check_favicon => true
    }).run
end
