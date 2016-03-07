require 'html/proofer'

task :default do
    sh "bundle exec scss-lint"
    sh "bundle exec jekyll build"

    HTML::Proofer.new("./_site", {
        :only_4xx => true,
    }).run
end
