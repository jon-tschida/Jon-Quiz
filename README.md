# Jon-Quiz

#### View a working version of this project [HERE](https://pleasehirejon.com/project-info/jon-quiz-info)

### Languages

- HTML
- CSS
- JavaScript

### Purpose for creating this project

Everywhere I looked I saw that a JavaScript quiz was a common project for aspiring web developers. So I decided to make one to get to know me a bit more. I thought this would be a fun way to make a popular project a bit more personlized.

### Challenges that arrose

** End of quiz issues **
When the quiz was over, nothing really happened. I wasn't sure what I wanted to do, but I thought that a conclusion plus stats on how the visitor did would suffice. This took longer than I thought it would, but we eventually used the innerhtml method to set the content of the questions box once the quiz is over. 

** Setting styling of correct or incorrect questions ** 
When the user gets a question correct, the button turns green if they got it right, and red if they got it wrong. This took a while to figure out how to get correct, I'm sure there is a more elegant solution, but in the questions array, each question object has a question and a true/false value, we check and see that option is true or false, if it is true, we add the CSS class that styles it green, if it is false, we add the CSS class that styles it red, we achieve this via classlist.add(), example: `document.querySelector(`.answer${i}`).classList.add(`true`)`

### What I learned

I decided to try to use CSS Grid instead of Flexbox for the question/answer box. I had recently learned about CSS grid, and this posed a good opportunity to put it to use. This helped solidify the use of Grid, which just gives us another tool to use for future projects.
