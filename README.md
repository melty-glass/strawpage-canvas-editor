I'll try to make it more understandable later, but the main thing you need to know is that I define two functions in this script: `resize()` and `ref()`. You can use these commands in the Inspect Element console on your browser.

The format for resizing the canvas is `resize(width, height)`.

To import a reference image onto the canvas, use `ref(image URL, x value to draw at, y value to draw at, image width, image height)`. The last four are optional. You can change the image width and height to stretch or squish images.

This image won't show up in the strawpage owner's gimmicks tab. I will make the opacity editable at a later point in time. I may or may not try to reverse-engineer the straw.page code to make images sendable (please don't abuse this feature if it ever happens). 
