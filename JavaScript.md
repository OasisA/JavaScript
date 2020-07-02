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
