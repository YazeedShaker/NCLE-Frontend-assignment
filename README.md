Hi NCLE Tech Team 
As Uncle Bob stated in the legendary book (CLEAN CODE), that using comments in your code means that your code is not good enough. So based on that you will find no comments as the code itself is the documentation as much as I could
1- Used very clear naming conventions to avoid the need of comments
2- Used an organized folder strtucture where you can find the 
  a- Pages folder that contains the main folder
    i- containg the component itself 
    ii- services folder to deal with the httpClient
    iii- data-models foler to hold the interfaces 
  b- A shared-compnonent folder that hold the sperated components that can be used more than one time across the app 
  c- Inside the assets folder you find
    i- Images > PNG folder to hold the pngs used in the app and to show that we can have multiple images format and each will be in it's corresponding folder
    ii- I18n Folder that hold the translation files (for this task only 'en' was used)
    iii- json folder to hold the json files which simulated the backend in this case and load the data dynamically 
3- Used the new standalone architecure for better preformance
4- Used the new For loop format with Track for better performance and code optimization 
5- Reflect the provided design in the code as much as possible and taking into consideration 
  a- the different footers at different screen sizes, as you provided the footer for the home page changes from desktop to mobile screens 
  b- also the header text alignment changes based on the screen size (desktop or mobile)
  c- same goes for the footer in the subscription page, as it is removed in the mobile screen
6- As for the challenged, there were few 
  a- The major changes in design between the desktop and the mobile screen which needed a lot of focus to notice the differences 
  b- the subsctiption form which had a lof of Validation to consider as the number of topics which I loaded dynamically and also the DOB inputs 
7- Making sure commit messages are as clear as possible for the reviewer 
8- Added a staging branch and worked on it to simulate the git-flow (without making a feature branch to avoid over engineering), and then made a PR from staging to production and a added a label ('production') to show the best way to make a PR 
9- Was going to use 'LaunchDarkly' for feature flags to enable you to switch between the footers live, but the time limitation was a blocker for me 
10- Used the best angular practices and applied most of the SOLID priniciple in the code, aslo used Factory methods and singelton patterns
