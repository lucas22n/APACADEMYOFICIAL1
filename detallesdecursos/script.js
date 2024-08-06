// thank you:
// https://codepen.io/alamm/pen/bExmvp 
// ♥ 

const jokes = [
    ["what did the colour orenge say to the fruit orenge ? ", "im calling the cops cose you stole my name"],
    ["why wolves howl?", "because they have no idea what are they doing"],
      ["do you no what", "get out of my house"],
      ["what is funny and has eight legs", "a clown"],
      ["why does the crow laugh", "beacause they are mad ha ha ha I am also mad"],
      ["gess how many snakes there are", "13"],
      ["my friend thought that a onion was the only food that makes you cry so what did i do?", "i threw a water melon at his face"],
      ["​who is the old man that have six eyes", "it is you"],
      ["what do spys eat instead of mcdonalds?", "spydonalds"],
    ["​what is the best part of bread……", "bread"],
    ["I have a butt", "Sir we all have butts"],
    ["why did the banana eat himself", "he had nothing"],
    ["What do you call a ufo that looks like a butt?", "A buttfo"],
    ["how do you stop a zombie from eating your hed", "you dont"],
    ["HEY WHATS FOR DINNER COW", "POO SIR IT IS THE FRENCH WAY"],
    ["​whats round fat and is sticky", "a greedy bee"]
  ];
  
  var colors = [
    "#7E57C2",
    "#9C27B0",
    "#F012BE",
    "#E91E63",
    "#C2185B",
    "#FF4136",
    "#E65100",
    "#FF8F00",
    "#AFB42B",
    "#558B2F",
    "#43A047",
    "#009688",
    "#0097A7",
    "#0074D9",
    "#607D8B",
  ];
  
  function timeToLaugh() {
      randomJoke = Math.floor(Math.random() * jokes.length);
    jokeSetup = jokes[randomJoke][0];
    jokePunchline = jokes[randomJoke][1];
  
      $(document).ready(function () {
      $('body').animate({
        backgroundColor: colors[Math.floor(Math.random() * colors.length)]
      }, 200);
      $('.setup').text(jokeSetup);
      $('.punchline').text(jokePunchline);
    });    
  }
  
  document.querySelector('button').addEventListener('click', timeToLaugh);