# React Shopping List

Isn't it just the worst when you come back from grocery shopping only to realize you forgot the most important thing! We've made a shopping list just for you.

## Technologies

- *S*QL
- *E*xpress
- *R*eact
- *N*ode

## Requirements

The app stores a list of items in a database, which can then be checked off as they are purchased. 

There is a form at the top of the page where new items can be added to the list.

Each item must have a:

- Name - text, up to 80 characters
- Quantity - numerical values only
- Unit - text, up to 20 characters.

When the page first loads, all the existing items are displayed with the quantity & unit. Each item also has an option to remove it from the list or mark as purchased.  

Items appear alphabetically, with purchased items dropping to the end of the list.

Two additional buttons allow for resetting all purchased items, and another allows clearing out the entire list.

### Screenshot

![wireframe](wireframe.jpg)

### Database Setup
Simply create a DB named 'fs-react-shopping' and run the attached commands in database.sql in the SQL interface of your choice. The list has some sample items included, these can be discarded or modified at the users convenience.


### Coming Features
Clear inputs upon submission
confirmation dialogue on deleting items / clearing list
UI improvements
App styling
Item editing
