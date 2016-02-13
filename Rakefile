require 'html/proofer'

task :default do
  sh "bundle exec scss-lint" 
  sh "bundle exec jekyll build"
  HTML::Proofer.new("./_site").run
end
