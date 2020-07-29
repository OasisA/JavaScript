var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");
// .split creates an array of words
​
var mainEl = document.getElementById("main");
var readEl = document.getElementById("read");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");
​
var i = 0;
​
var millisecondsPerWord = prompt("How many milliseconds between words would you like?");
​
function prepareRead() {
  var timeLeft = 5;
​
  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;
​
    if (timeLeft === 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }
​
  }, 1000);
}
​
​
function speedRead() {
  mainEl.append(bodyEl);
​
  var poemInterval = setInterval(function() {
    if (words[i] === undefined) {
      clearInterval(poemInterval);
    } else {
      mainEl.textContent = words[i];
      i++;
    }
​
  }, millisecondsPerWord);
}
​
prepareRead();
​
