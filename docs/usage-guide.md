---
outline: deep
title: Usage Guide - Smooth Loader
description: Learn how to use Smooth Loader to lazy load images and background images on your website
---

# Usage Guide
Smooth Loader makes it simple to enable lazy loading for image elements and background images, improving page performance by only loading images when they become visible in the viewport. Follow these steps to get started:

1. Replace the standard `src` attribute of your image elements with the `data-src` attribute. The `data-src` attribute should contain the URL of the image you want to lazy load. This ensures the image isn't loaded immediately when the page loads.
2. Import the Smooth Loader package and call the `smoothLoader()` function in your JavaScript file. This function scans your DOM for elements with lazy load configurations and applies the lazy loading logic.

## Using the Default Selector
This selects all images with the `smooth-loader` class by default.

```js
import smoothLoader from 'smooth-loader'

smoothLoader()
```

By default, it will select all images with `smooth-loader` class.

## Using a Custom Class
Specify a custom class to select images, such as `lazy-image`.

```js
import smoothLoader from 'smooth-loader'

smoothLoader('.lazy-image')
```

## Selecting Multiple Elements
Use the `querySelectorAll` method to target multiple images for lazy loading

```js
import smoothLoader from 'smooth-loader'

const images = document.querySelectorAll<HTMLImageElement>('img')
smoothLoader(images)
```

## Selecting a Single Element
Use the querySelector method to target a specific image.

```js
import smoothLoader from 'smooth-loader'

const myPhoto = document.querySelector<HTMLImageElement>('#me')

if (myPhoto) {
    smoothLoader([myPhoto])
}
```

:::warning Keep in Mind!
Lazy loading only works for elements that are already present in the DOM. If images are added after smoothLoader is executed, lazy loading will not be applied.
:::

Here is an example of how to use Smooth Loader in your HTML:

```html
<!-- Regular image -->
<img
    src="./images/me-min.webp"
    data-src="./images/me.webp"
    class="smooth-loader"
    width="500"
    height="500"
    alt="Photo of Serhii Cho"
/>

<!-- Background image -->
<div
    data-src="./images/we.png"
    class="smooth-loader my-bg-image"
    style="width: 500px; height: 500px"
></div>
```