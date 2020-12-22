---
template: post
title: Make it an object please!
slug: currency-object
date: "2020-05-03T15:00:00Z"
description: "Objects are more than just scaffolding, they are an API for you and your devs to use."
category: dev
---

Objects in PHP have been around for a while now. And objects in Drupal have as well, but Drupal was predominately filled (and still suffers the fate) of being tied to
arrays and their inherent inability to expose what can and can't be on an object.

Here is an example of a useful object when working on sites that may have
different display variants for a currency.

### Array Version

```php
$currency = [
  'suffix' => '$',
  'prefix' => ' USD',
  'decimal-count' =>  2,
  'decimal-separator' => '.',
  'thousands-separator' => ',',
];
```

Not too bad.. And let's create a function to auto generate that array for ease
of use and possible debugging.

```php
/**
 * Create a currency array.
 *
 * @param string $suffix
 * @param string $prefix
 * @param string $decimalCount
 * @param string $decimalSeparator
 * @param string $thousandsSeparator
 */
function getCurrencyFormat($suffix = '$', $prefix = ' USD', $decimalCount = '2', $decimalSeparator = '.', $thousandsSeparator = ',') {
  return [
    'suffix' => $suffix,
    'prefix' => $prefix,
    'decimal-count' =>  $decimalCount,
    'decimal-separator' => $decimalSeparator
    'thousands-separator' => $thousandsSeparator,
  ];
}
```

Now, let's take the currency format and create a number out of a value in some
code that means almost nothing.

```php
// We'll load the default currency format here. Why not.
$currencyFormat = getCurrencyFormat();
$value = $variableFromOffScreen; // 1234.56
// I have a vague idea of how this should look, but let's just freehand it
// because that is really how we write and nothing could go wrong...
// Also, I just looked at number_format here:
// https://www.php.net/manual/en/function.number-format.php so I'm going to use
// those as the array keys, the other developer who wrote the getCurrencyFormat
// function surely used those.
$formattedValue = $currencyFormat['suffix'] . number_format($value, $currencyFormat['decimals'], $currencyFormat['dec_point'], $currencyFormat['thousands_sep'] ) . $currencyFormat['suffix'];
```

WSOD...

Ah... Because it was an array, my IDE didn't auto populate the allowed values
and there was a mismatch in my keys.

Further, now this code is a one off of how the currency format is used. I could
look up the function and see how each key is being used, but then I have to go
find all the usages if I do want to go back and change thousands-separator to
thousands-sep to match the variables in the number format function.

## Object Implementation

```php

/**
 * Currency Format
 */
class CurrencyFormat {
  protected $suffix = '$';
  protected $prefix = ' USD';
  protected $decimals = '2' ;
  protected $decPoint = '.';
  protected $thousandsSep = ',';

  public function getSuffix() : string {
    return $this->suffix;
  }

  public function setSuffix(string $suffix) {
    $this->suffix = $suffix;
  }

  public function getPrefix() {
    return $this->prefix;
  }

  ...

}
```

Now, let's develop with it.

```php
// Object implementation.
$currencyFormat = new CurrencyFormat();
// Let's override the suffix;
$currencyFormat->setSuffix('');

// Array.
// You could override the suffix in the arguments
$currencyFormatArray = getCurrencyFormat();
$currencyFormatArray['suffix'] = '';
```

No advantage, really. Now let's setup a function to format a value as a currency
format.

```php
// Object
function formatValueWithCurrency($value, CurrencyFormat $currencyFormat) {
  return $currencyFormat->getPrefix() . number_format($value, $currencyFormat->getDecimals(), $currencyFormat->getDecPoint(), $currencyFormat->getThousandsSep()) . $currencyFormat->getSuffix();
}
// Or we could add a method to the CurrencyFormat and have it format that value
// like:
$currencyFormat = new CurrencyFormat();
$formattedValue = $currencyFormat->format($value);
// Array Version
function formatValueWithCurrency($value, array $currencyFormat) {
  // We can't be sure we are going to get a currency format array, so we have
  // to settle for some good ole checks.
  // Also, this is gonna get smelly.
  $prefix = $currencyFormat['prefix'] ?? '$';
  $suffix = $currencyFormat['suffix'] ?? ' USD';
  $decPoint = $currencyFormat['decPoint'] ?? '.';
  $thousandsSeparator = $currencyFormat['thousandsSep'] ?? ',';
  $decimals = $currencyFormat['decimals'] ?? 2;

  return $prefix . number_format($value, $decimals, $decPoint, $thousandsSeparator) . $suffix;
}
```

Things to note:

- Because we have to check the array value and assume a default, we are now
  doubling our locations of default values.
- You could call the getCurrencyFormat array function in the formatValueWithCurrency,
  but it is possible that you want to get the currency from a Node or some user
  defined value and thus would need to pass the value.
- Arrays are cumbersome and don't guarantee properties exist. They are simple
  buckets you can throw your mistakes into.

So please just make it an object if there is any reuse to it and if it is a
piece of standardized data. If you find yourself, constantly calling nested
values on an array, it might be time to refactor into an object.
