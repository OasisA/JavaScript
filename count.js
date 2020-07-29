var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCountertext(){
    countEl.textContent = count;
}

incrementEl.addEventListener("click", function(){
    count++;
    setCountertext();
});

decrementEl.addEventListener("click", function(){
    if (count > 0 )
    {count--;
    setCountertext;
    }
});