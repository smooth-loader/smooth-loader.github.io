---
outline: deep
title: Configurations - Smooth Loader
description: Learn how to configure Smooth Loader to fit your needs and improve your website's performance
---

# Configurations
As the second argument to the `smoothLoader` function, you can pass optional configurations. Some of the configurations extend [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), which is a native browser API that is used under the hood.

```typescript
smoothLoader('.lazy-image', {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0,
})
```

## Available Configurations

| Parameter | Type | Description |
| --- | --- | --- |
| `root` | `Element` | The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null. |
| `rootMargin` | `string` | Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros. |
| `threshold` | `number` or `number[]` | Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible. |

## Image Preview
One of the key features of Smooth Loader is its **image preview** capability. This feature allows a low-resolution version of the image to load initially, ensuring faster page load times and a better user experience.

Once the user scrolls the image into view, the high-resolution version is seamlessly loaded, replacing the preview without any noticeable delay.

This approach not only enhances the visual appearance of your website but also improves performance, particularly for image-heavy pages.

:::info Works Only for Image Elements
This feature works only for image elements, background images are not supported yet.
:::

### Real-World Example
Below is an example from a production-ready website utilizing the Smooth Loader package to deliver an optimized and smooth image loading experience:

<img
    src="/gifs/smooth-loader-image-preview.gif"
    class="smooth-loader"
    style="width: 100%"
    alt="Image preview example"
/>

You can check it out [here](https://serhii.io/posts) yourself, just don't forget to set the network speed to "Slow 3G" in the browser's developer tools.

The small version of the image can be added to an `src` attribute on the image element and  the bigger version to a `data-src` attribute like this:

```html
<img src="/path/me-min.jpeg" data-src="/path/me.jpeg">
```

With this in place, users won't look at the empty place when image is loading.

### Step by Step Guide
To use this feature, you'll need small versions of your images which will be loaded right away when the page loads. Let's say I have 2 same images with different sizes:

![Big and small images](/images/big-and-small-images.png)

I want to load a small image on the initial page load, and when person scrolls into the image view, the bigger version will be loaded and it will replace the small one. In my HTML I will simply add an `src` attribute with path to a small image.

```html
<img
    alt="Beautiful girl"
    class="smooth-loader"
    src="images/1min.jpg"
    data-src="images/1.jpg"
    width="736"
    height="725"
/>
```

:::warning Important
It's important to add `width` and `height` attributes or have width and hight setup correctly with CSS. Because small image has to be filling all the space that large image is taking. Additionally, adding `width`, `height`, and `alt` attributes to the image is a good practice for SEO.
:::

Instead of the small version of your image you can use any other small image, like a placeholder or a blurred image. It's up to you.
