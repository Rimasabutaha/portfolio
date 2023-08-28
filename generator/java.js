let btn = document.querySelector(".buttons");
let quote = document.querySelector(".quote");
let quotes = [
  `“People cry not because they are weak but because they have been strong for too long”<br><br>-Johnny Depp`,
  `“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.” <br><br> -Bernard M. Baruch`,
  `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” <br> -Maya Angelou`,
  `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” <br><br> -Martin Luther King Jr.`,
  `“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.” <br><br> -Steve Jobs`,
  `“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.” <br><br> -Marilyn Monroe`,
  `“Many of lifes failures are people who did not realize how close they were to success when they gave up.” <br><br> -Thomas A. Edison`,
  `“Be yourself; everyone else is already taken.” <br><br>-Oscar Wilde`,
];


btn.addEventListener("click", function(){
   var random = quotes[Math.floor(Math.random() * quotes.length)];

   quote.innerHTML = random;

})


