Foto Finder

Specification

Now that you’ve got the main foundations down to build out a frontend application, it’s time to prove to yourself that you own those skills! You’re going to be building a photo album application called Foto Finder!

Note: If you have started to learn some es6, feel free to implement all of those new es6 features (arrow functions, block scoped variables, etc.). However, if es5 syntax is still more comfortable for you, then stick with what you know. You’ll get a lot more practice and instruction with modern Javascript features next mod!


Learning Goals

Solidify and demonstrate your use of:

semantic HTML

clean & organized CSS styles

DRY JavaScript

localStorage to persist data

Iterate through/filter dom elements using for loops/array prototype methods

Understands the difference between the data model and how the data is displayed on the DOM

Ability to match/recreate a UI and create a great UX



Architecture

Your entire application will consist of one HTML page or template. You will have two javascript files:

A photo.js file that contains a Photo class.

Photo methods must include, but are not limited to:

constructor

saveToStorage

deleteFromStorage

updatePhoto

A main.js file that contains all dom related javascript.


Data Model

An photo has an id, title, caption, file, and a favorite property.

The id should be a unique identifier.

title and caption are strings.

file is a URL string.

favorite will be a boolean.

Each photo should be created as an instance of the Photo class.




Phase One: Building out the UI

This phase is all about setting up the user inputs and general structure of the page. The page will not be very interactive in this phase.

[X] One input field at the top in order to search through photos
[X] Two input fields for the title and caption of the photo
[X] One input field to upload the photo 
  (hint: look at the different HTML input element type attributes and how you can use one of them to select a file from your computer)
[X] One “Add to Album” button for adding the photo to the album so you see it on the page
[X] One View Favorites button to view all of your favorite photos.
[X] A section for all of the photos in the album to live


Phase Two: Implementing The Functionality

[] When a user fills in the Title, Caption, selects an image file, and then clicks the “Add to Album” button, the photo should be added to the photo album.
[] Each photo, when added to the album, is placed in a “card”, and each photo card should display:
  The photo
  The title of the photo
  The caption of the photo
[X] A button to mark the photo as a “Favorite” (counter on “View Favorites” button should reflect how many photos have been favorited)
[X] A button to “Remove” the photo from the album
[] Each photo card should persist (in localStorage) and should be present upon reloading the page.
[] The photo should be added to localStorage using the saveToStorage method defined in the Photo class.
[] When a user clicks the title or caption of a photo in the list, that text should become an editable text field, pre-populated with the existing photo title or caption.
[] The user should be able to “commit” their changes by pressing “Enter/Return” or by clicking outside of the text field.
[] This change should be saved in localStorage using the updatePhoto method defined in the Photo class.


Bonus: If the user clicks on the image, the user should be able to update the photo using the updatePhoto method.
When the user clicks on the “Favorite” button, the button should stay in the active (pink) state.
This favorited state should also persist after a page refresh using the updatePhoto method defined in the Photo class
When the user clicks on the “Trash” button, the photo should be removed from the page
The photo should be removed from localStorage using the deleteFromStorage method defined in the Photo class.
The application should be responsive and work equally well on desktop and mobile



Phase Three
Let’s improve the user experience in this phase.

If the user does not have text in the Title or Caption input elements, or they have not selected a photo from the photos directory, then the “Add to Album” button should be disabled.
If there are no photos in the album yet, then there should be an indication to the user to add photos, displayed in the empty photo section.
The file selector should only allow image file types
Filtering and Searching by Text
We want the user to be able to search through all of their photos easily.

At the top of the page, include a text field labeled “Search”.
As a user types in the search box, the list of photos should filter in real time to only display photos whose title or caption include the user’s text. The page should not reload.
Clearing the search box should restore all the photos to the list.
Do not need to persist changes in between sessions.
Recent Photos
The application should only show the ten most recent Photos on page load.

The application should contain a button labeled Show more....
When a user clicks on the Show more... button, the list should load all of the remaining photos.
Once the remaining photos are loaded, the Show more... button should switch to a Show less... button.
When a user clicks on the Show less... button, the list should switch back to being the first 10 photos only.
This functionality should toggle back and forth based on that button click.
Do not need to persist changes in between sessions.
Viewing Favorites
Finally, let’s let our user be able to view only their favorites.

The user should only see their favorites when they click on the View Favorites button. (consequently, the text on the button should then say View All Photos)
Clicking on the View All Photos button, the user should be able to see all of their photo cards.
When viewing favorites, search field should only search through the favorited photos.
Do not need to persist changes in between sessions.
Extensions
Work through these in order:

When the user clicks on the image, the user should be able to update the photo using the updatePhoto method.
Include at least 3 different animations. Example: one for when a card gets created/deleted.