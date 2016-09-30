/*
 * Here is an example of how to use Backstretch as a slideshow.
 * Just pass in an array of images, and optionally a duration and fade value.
 */

// Duration is the amount of time in between slides,
// and fade is value that determines how quickly the next image will fade in
$.backstretch([
    "https://hd.unsplash.com/photo-1437382944886-45a9f73d4158"
  , "https://hd.unsplash.com/photo-1414016642750-7fdd78dc33d9"
  , "https://hd.unsplash.com/photo-1472445059364-92ac5245e86d"
], {duration: 3000, fade: 1000});