---
template: post
title: "Entity Subclasses"
slug: entity-subclasses
date: "2025-02-03T16:30:00Z"
description: "Subclass the node for better DX"
category: dev
---

I don't know when but Drupal 8 or 9 released entity subclasses. This has been one of the single best improvements to developer experience for me. 

Here are the benefits that I see:

Easily navigate getters and setters for fields

Previously with magic method, you could call the field and methods associated with it:
```php
$user = $node->field_user->referencedEntity()[0]
```
Problems: 
1. field_user might not exist on the node. Okay, easy fix.
  ```php
    if ($node->hasField('field_user')) {
      $user = $node->field_user->referencedEntity()[0]
    }
  ```
1. The field might be empty. Okay, here's the fix:
  ```php
    if ($node->hasField('field_user') && !$node->field_user->isEmpty()) {
      $user $user = $node->field_user->referencedEntity()[0]
    }
  ```
1. We don't know entity type is returned. Okay, okay... Easy enough fix again...
  ```php
    if ($node->hasField('field_user') && !$node->field_user->isEmpty()) {
      /** @var \Drupal\user\Entity\User $user */
      $user = $node->field_user->referencedEntity()[0]
    }
  ```

Now, let's do that all over the code base...

Or, we could subclass the entity, Let's say this entity is a Blog. 

```php
class Blog extends Node implements NodeInterface {

  const FIELD_USER = 'field_user'

  /**
   * Whether or not the blog has a user. 
   * 
   * @return bool
   *   Boolean Indicator.
   */
  public function hasUser(): bool {
    return !$this->get(FIELD_USER)->isEmpty()
  }

  /**
   * Get the user, if one exists.
   * 
   * @return ?CustomUser
   *   Custom user, if exists
   */
  public function getUser(): ?CustomUser {
    return $this->hasUser() ? $this->get(FIELD_USER)->referencedEntity()[0] : NULL;
  }

  ...

}
```

Here are some benefits: 
1. Looking for usages of the field, is simply looking for usages of the methods.
2. It is extremely DRY. Any time you need to access the information, you have the methods in place.
3. For me, I don't use the hasField() method often because I tend to know if my node type has the field, but I do use `$node instanceof Blog` all the time now because it typehints what methods and fields my node or entity has. 

Other tacked on benefits:
1. Centralizes logic around the entity.
2. Less reliance on multiple hooks in disparate modules
3. Testing becomes centralized around the entity as well.

To learn more about entity subclasses: https://www.drupal.org/node/3191609

Or ask ChatGPT
