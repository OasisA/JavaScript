* JavaScript:
    - one of the 3 fundamental languages (other two are HTML and CSS)

* VARIABLES:
    - nouns of programing
    - num, str, Booleans (true/false), etc
    - made up of a name and value
        EX: var[NAME] = [VALUE]; 
    - str are written in " "
    - num and Booleans are written normally
    - you only need to declare "var" once, then the [NAME] can be resued without "var" in front of it

* JAVA in HTML:
    - <script type ="text/javascript">
        // Add Script
        </script>
    - <script src = "#">
        // Add Script
        </script>
    - often in the head, can be in the body

* console.log()
    - display data in the browser's console
        - can log str, int, Booleans, equations, and var
    - used for debugging
    - not used traditionally, only for yourself, not in industry

* concatenation
    - adding strings

* FUNCTIONS:
    - parseInt(): treat value as number; req when value was entered through a prompt
    - alert(): alert pops up on the screen
    - if/ else/ else is: if/ else/ elif (PYTHON)
    - prompt(""): ask question(string type)
    - confirm(""): OK or Cancel (yes or no; Boolean)
    - input (""): write inside <form></form>
    - .toLowerCase(): can turn strings into lower case

* IF/ ELSE IF/ ELSE
    - "==" -> only checks for value
    - "===" -> checks for value and type
    - alert([name]==[value]);
        - checks if it is true or false

* ARRAY
    - starts at 0
        - first place
    - name.length -> # of variables
    EX. var zooAnimals =["zebra", "rhino", "owl, "giraffer"]
    
    console.log(zooAnimals.length); -> 4
    console.log(zooAnimals[1]); -> rhino
    console.log(zooAnimals[4]); -> undeined (nothing there)
    - DO NOT care about data type
    - can replace items in an array -> NAME[#] = NEW VALUE
    - can add items to an arroay -> NAME.push = NEW VALUE
    - indexOf
        - if the element is not in the array,  checking for its index using "indexOf", then the output would be -1.
        - if the element is in the array, checking for its output would give the index/location of the element. 
* LOOPS
    - for(var 1 =0; i< vegetables.length; i++) {i++ -> i = i+1}
        console.log("I love " + vegetable[i]);
    - i++ = i + 1
    - i-- = i - 1

* || -> or

* ^ / && -> and

* SEARCH FOR LETTER
    - searching for the first letter of a word is similar to how you would search for the first element in an array
    - var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];
            for(var i=0; i<myFarm.length; i++){
            console.log(myFarm[i]);
            if(myFarm[i].charAt(0)==="c"){
            alert("starts with c");
            }
            }

* RANDOM NUMBER
    - Math.random() -> generates a randome #
        - 0.00000000 to 0.99999999999
        - alert(Math.random()*10)
            - 0.0000000 to 9.99999999999
    - Math.floor -> rounds down (# w/o decimal places)
        - alert(Math.floor(Math.random()*10)+1)
            - 1 to 10

* UPPERCARE = LOWERCASE
    - variableName = variableName.toLowerCase

* FUNCTIONS
    function logMe(arr){
        for (var i = 0; i < arr.length; i++){
            console.log(arr[i])
        }
    console.log("..........")
    }

    logMe(insert variable name)
    logMe(insert variable name)
    logMe(insert variable name)
    logMe(insert variable name)
    logMe(insert variable name)
    logMe(insert variable name)

* CHECK TYPE
     - if(typeof x =="string")

* JavaScript OBJECT NOTATION (Json)
     var someObj = {
                title: "Red Hat",               //property = title
                say:  function (){              //method = say()
                        console.log(this.title);    //consoles the property title = "Red Hat"
                }
            };

* query to slect all
    var pTags = document.querySelectorAlee("p");

* SET INTERVAL
    - calls a function every so often
    - you can write how many milli-seconds  you want to pass before calling the function again.
    - clearInterval -> stops the timer
    - sendMessage -> sends the message

* toFixed(2)
    - Rounds to two decimal places
    - var roundedResult = (total * tipPercent).toFixed(2);
    return roundedResult;

* event.target
    - is what fires the event

* event.propagation
    - when you click on this, do not run anything else besides this

* HOW TO MAKE SOMETHING PERSISTENT:
    - localStorage allows you to store data in the browser
        var count = localStorage.getItem("variable name")
        localStorage.setItem("variable name", variable name)
    - How to make an object a string
        - JSON.stringify(variable name)
    - Reverses JSON.stringify
        - JSON.parse(localStorage.getItem("variable name"))

* console.log(this)
    - If it is not in a function
        - console.logs the "window" or information about the browser
        - this is in the window
    - If it is in a function
        - console.logs the "window" or information about the browser
        - this is in the window
    - If it is in an object (var)
        - "this" refers to the objec itself
        - console.log(this.name) refers to the parameter name in the object

            


