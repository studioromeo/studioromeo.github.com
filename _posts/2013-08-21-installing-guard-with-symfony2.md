---
layout: post
---

Following up from my previous article on using [guard-phpunit with composer] I recently wanted to use guard with symfony2.

Symfony2 stores the most of its code in bundles under the /src directory, these bundles have a MVC structure in each bundle
and a Tests directory.

Generally it's up to you how you store your tests but personally I like to subfolder them based on where the code I'm testing is.
For example **/Controller/DefaultController.php** test would live under **/controllers/DefaultController.test**

To get guard to recognise this and map it to the correct test we need to get creative with our regular expressions.
This can be a very trial and error process - for me I managed to figure out this regular expression which maps my
classes to my tests


{% highlight ruby %}
guard 'phpunit', :tests_path => 'src/', :cli => '--colors' do
 # Watch tests files
 watch(%r{^.+Test\.php$})
 # Watch library files and run their tests
 watch(%r{^src/(.+)/(.+)/(.+)/(.+)/(.+)\.php}) { |m| "src/#{m[1]}/#{m[2]}/#{m[3]}/Tests/#{m[4]}/#{m[5]}Test.php" }
end

guard 'phpcs', :standard => 'PSR2' do
    watch(%r{.*\.php$})
end
{% endhighlight %}


[guard-phpunit with composer]: http://studioromeo.co.uk/using-guard-phpunit-with-composer/