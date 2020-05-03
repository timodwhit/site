---
template: post
title: "Bread Crumbs in Drupal 8 are Path Driven."
slug: drupal-breadcrumbs
date: "2016-09-22T16:30:00Z"
description: "That's essentially it."
category: dev
---
There are some great posts about breadcrumbs in Drupal 8:

- [Drupal 8 Breadcrumbs - Add the Current Page - Greg Boggs](http://www.gregboggs.com/drupal8-breadcrumbs/)
- [D8FTW: Breadcrumbs That Work](https://www.palantir.net/blog/d8ftw-breadcrumbs-work)

But both of these articles are missing a critical piece: The path system drives
the breadcrumbs.

Let's say we have two nodes: Node1 and Node2. In all the menus Node2 is nested under Node1… but in the breadcrumbs only “Home” shows. Por que? That is because the menus are no longer dictating the magic of breadcrumbs, the paths are.

Thus, if Node1 has the alias /node1 and Node2 has an alias of /node2, the breadcrumbs won’t nest. However, if Node2 has an alias of /node1/node2 the breadcrumbs will display as nested. On Node2, you’ll be presented with “Home >> Node1”.

Further Things: (https://www.drupal.org/node/743366)

Helpful snippet for breadcrumb.

```php
function THEMENAME_preprocess_breadcrumb(&$variables) {
  // Remove "Home" link and add custom prepended links.
  $breadcrumbs = array_shift($variables['breadcrumb']);
  array_unshift($variables['breadcrumb'],
    array(
      'text' => t('Site'),
      'url' => 'http://example.com',
    ),
    array(
      'text' => 'Drupal Subsite',
      'url' => '/'
    )
  );
  // Add current title of page.
  $request = \Drupal::request();
  $route_match = \Drupal::routeMatch();
  $page_title = \Drupal::service('title_resolver')->getTitle($request, $route_match->getRouteObject());
  $variables['breadcrumb'][] = array(
    'text' => $page_title
  );
}
```


