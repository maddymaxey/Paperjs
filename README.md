This is the Paper.js library wrapped to use with Meteor apps. Clone the repo and add it to a packages folder in your apps directory. 

NUANCES:
-Meteor has its own way of organizing global and local variables. In order to get the library to work properly with meteor, I had to make a few changes to the paper-full.js file. 

-Calling any function needs paperscript. For example, try new paper.Group instead of new group.

You need a copy of the gitignore file outside of the main package file in the main directory of your meteor app. I'm not sure why this is. 




