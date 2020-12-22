---
template: post
title: "Extending Twig Templates."
slug: extending-twig
date: "2014-10-31T16:30:00Z"
description: "An early explanation"
category: dev
---

One of the sessions I enjoyed the most was [Twig: Friendly Curl Braces Invade Your Templates by KNP Labs Ryan Weaver](https://austin2014.drupal.org/session/twig-friendly-curl-braces-invade-your-templates). He discussed a lot of wonderful advantages to the twig templating system including: Simplified markup and declarations, Filters, and extensibility. For the first two of that list, watch his presentation however for extensibility, please read on.
Extendable Templates

In Drupal, we regularly have to override a template for some reason or another, and that template might need to only have one line changed. In Drupal 7, you would create a new file, ex: page—blog.tpl.php, and then copy all of page.tpl.php, and override. This works great until you have 5 page template overrides and you need to override the mark up in all of them. In Drupal 8, twig allows for you to “extend” a template. This means that in the page—blog.html.twig, you would have the line

```
{% extends ‘themes/THEMENAME/templates/system/page.html.twig’ %}
```

Now, out of the box, extending core templates is only so good, because nothing is wrapped in a twig-block. What we need to do is edit the template and start wrapping the components we will want to extend in blocks.

```php
{# Core Example #}
<div class=”l-content”>
  {{ title_prefix }}
  {% if title %}
    <h1 class=”page-title”>{{ title }}</h1>
  {% endif %}
  {{ title_suffix }}
  {{ tabs }}
  {% if action_links %}
    <nav class=”action-links”>{{ action_links }}</nav>
  {% endif %}
  {{ page.content }}
</div>{# /.l-content #}
```

Notice above how no twig-blocks are present

```php
{# Wrapped Example #}{% block content %} {# This lets us change our content block #}
  <div class=”l-content”>
    {% block title %} {# Lets say we want to move the title elsewhere #}
      {{ title_prefix }}
      {% if title %}
        <h1 class=”page-title”>{{ title }}</h1>
      {% endif %}
      {{ title_suffix }}
    {% endblock %}
    {% block tabs %} {# Sometimes we don’t want tabs #}
      {{ tabs }}
    {% endblock %}
    {% block actionLinks %} {# “Nahbra, action links ain’t me”}
      {% if action_links %}
        <nav class=”action-links”>{{ action_links }}</nav>
      {% endif %}
    {% endblock %}
    {{ page.content }}
  </div>{# /.l-content #}
{% endblock %}
```

So far, nothing to crazy is happening. However, now imagine you want to extend the template and hide the title. All you would have to write is somethings like this:

```php
{# Extending the page template to override the title #}
{% extends ‘themes/THEMENAME/templates/page.html.twig’ %}
{% block title %}
  {{ 'Nice New Title for the whole world to see.'|t }}
{% endblock %}
```

Notice: No markup from the original template needs to be copied, just the block that you want to extend.
Complex Extending

What if you take the above example and you want to extend the content, but you want to keep all the content of the block, except you want to change the wrapper “.l-content” to “blog-content”. If you wrote:

```php
{# Extending the page template to override the wrapper of content #}
{% extends ‘themes/THEMENAME/templates/page.html.twig’ %}
{% block content %}
  <div class=”blog-wrapper”>
    {{ page.content }}
  </div>
{% endblock %}
```

The above would cause you to loose the title, action links, and tabs. Only printing out the page.content. Not the most desirable.

After this, you should try to use the parent() function, this will grab the content of the parent block. The only limit of this is that the div.l-content would still be wrapping the content of the block.

To achieve the removal and replacement of the div.l-content, you’ll need a small amount of trickery.

```php
{# Extend it like its hot #} {% block content %} {# This lets us change our content block #}
 <div class=”blog-wrapper”>
 {{ block(title) }}
 {{ block(tabs) }}
 {{ block(actionLinks) }}
 {{ page.content }}
 </div>{# /.blog-wrapper #}
{% endblock %}
```

This will print the parent blocks content and then print page content as desired.
Overall

This is clearly a lot easier than it was with phptemplate engine and it allows for you to quickly get the desired results. If you find a flaw want more, feel free to leave a comment. To read more about extending checkout the twig documentation.

_Originally published at www.newmediadenver.com._
