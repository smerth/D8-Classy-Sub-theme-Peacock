# Peacock - a Drupal 8 sub-theme of Classy

## What does this project do?

- This is a Drupal 8 sub-theme of Classy.  
- The build tasks are run by Gulp. 
- You can see an example of how the libraries (css and javascript) are included.  
- Templates are from core/modules/system.  You can see how some of them are over-ridden. 
- You can see conditional twig logic using of a page variable in html--front.html.twig.
- Partials are used to manage header and footer output.
- Some neat svg images are base64 encoded and included as sass variables.
- Under sass there's a folder drupal-bem, that's a reference for common selectors in Drupal 8.

## Set up

To modify you need to:
- install npm packages (packages.json)
- run gulp watch
- make an edit to an scss file and js file to get gulp to overwrite the css and js folders with your latest changes.


# Useful Links

This project started out with:

[Watch and Learn - Drupal 8 Theming](https://www.youtube.com/playlist?list=PLUBR53Dw-Ef818EUxzNoWKcQ7PYUXpFFA)

Check out this links for SVG fun:

[Philip Rogers - SVG patterns](https://philiprogers.com/svgpatterns/)
