---
title: Using Guard-phpunit with Composer
---

While reading through a book on unit testing with PHP I ran into a few issues using guard with phpunit. This article guides me (and maybe you) through the process of installing & configuring guard with PHPUnit.

---

First of we need to install phpunit globally using composer. To do this create a new hidden directory called .composer/packages in your home folder

```bash
mkdir ~/.composer/packages
```

Then inside that directory create a new composer.json file and fill it with your global dependencies in our case phpunit

```json
{
    "require": {
        "phpunit/phpunit": "3.7"
    }
}
```

Install phpunit by running composer install, this will install phpunit and all of its dependencies. After its completed we then need to edit our **$PATH** variable so we need to edit our `~/.bash_profile` with the following

```bash
export PATH=$HOME/.composer/packages/vendor/bin:$PATH
```

Check that everything is working by running

```bash
phpunit --version
```

Which should return something like `PHPUnit 3.7.21 by Sebastian Bergmann.`

Wicked we have phpunit installed but now for guard & it's phpunit extension. To do this run both these commands (you may have to sudo too)

```bash
gem install guard
gem install guard-phpunit
```

Now unless things have changed when you run guard you'll receive this error

```php
Call to undefined method PHPUnit_Framework_TestResult::allCompletlyImplemented()
```

It's due to a small typo in the method name, so to change it find guard-phpunits source files in my case it was located here

```bash
/Library/Ruby/Gems/1.8/gems/guard-phpunit-0.1.4/lib/guard/phpunit/formatters/PHPUnit-Progress/PHPUnit/Extensions/Progress/ResultPrinter.php
```

In here find lines 250 and 256 and replace `allCompletlyImplemented()` with `allCompletelyImplemented()` Save and then run guard again.

I hope this helps anyone else in the same situation. All credit goes to this [issue on Github](https://github.com/Maher4Ever/guard-phpunit/issues/10)
