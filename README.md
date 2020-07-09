Welcome to my responsive app page, tinDog.

It's a cheesy satire-app of tinder. It is a fully-responsive 3-to-2-to-1 column layout with same page navLinks, and a geoLocator. It is heavy on the Bootstrap but I like Bootstrap. 
The location API is a meta-API and none of it requires an API key, or depends on the local machine so you should be good to run it!
Easily, the hardest part of this was putting my rotated cellDog img in the correct z-index to appear underneath the features section.


Project requirements met are as follows:

Feature Requirements:
-Hamburger menu on page collapse
-The use of the one and only, Bootstrap grid system
-Media Query used to rotate phone image (css selector: .cellDog) on mobile phone scren size
-"Show my location" button runs through the inherent geolocation API in HTML/JS, returns coordinates, then I take THOSE coordinates and run them through a different API, which lets me parse some JSON data determining their city and notifying them that the app is available in their area. It also includes functions for hitting the decline button, and not having the Geolocation API(IE10 or older).
-Bootstrap CDN/jQuery is imported and used for Grid-Column layout, pricing section, and navbar.
-3 Column image carousel created via bootstrap

Mandatory requirements:
-Media Query is functioning in tandem with Bootstrap grid
-More than 3 CSS rules
-Successfully hooked up external .js file
-Comments throughout code(one-lines)
-All commits made via GIT/CLI
-This README


