Revisiting Basic JavaScript via FreeCodeCamp resources and copying passed code to Git repo as I go through each task. Documenting below anything new I learn, or anything I am reminded of that I may have forgotten.

- Strings are immutable.
    - Following would not work:

        ```
        var myStr = "Jello World";

        myStr[0] = "H";
        ```

    - Would need to be:

        ```
        var myStr = "Jello World";

        myStr = "Hello World";
        ```

- Reminded of basic methods of manipulating JS arrays:
    - someArray.push(value);
        Adds a value or set of values to the end of an existing array.
    - someArray.pop();
        Removes a value from the end of an existing array.
    - someArray.shift();
        Removes a value from the beginning of an existing array.
    - someArray.unshift(value);
        Adds a value or set of values to the beginning of an existing array.

- Reminded of use of switch statements as alternative to if/else:
    - Takes a value and tests it against cases until a match is found.
    - In the following example, switch statement takes val and if a match is found for any of the cases, reassigns a value to the variable 'answer'. If no match found, assigns the default value of "stuff".

    ```
    switch(val){
      case "a":
        answer = "apple"
        break;
      case "b":
        answer = "bird"
        break;
      case "c":
        answer = "cat"
        break;
      default:
        answer = "stuff"
        break;
    }
    ```
    
    - Can also take multiple cases and apply same result.

- Re-learned basic use of Javascript objects. Rememebered most elements but needed refreshing on the following:
  - Can use dot or bracket notation when referring to JS objects.
    - Bracket notation must be used if working with variables (also applies to function parameters).

- Re-learned use of JS loops. Most elements familiar but was caught out by:
  - Do...While Loops:
    - Differs from while loop in that will ensure code always runs at least once, i.e. the following will leave myArray containing "11" as the 'do' executes before the 'while' condition is checked.

    ```
    var myArray = [];
    var i = 11;

    do {
      myArray.push(i);
      i++;
    } while (i < 11);
    ```

  - When running a loop inside an if statement, if 'else' condition is placed inside the loop, the loop will end thgere. Else statement needs to be outside the loop if it serves as a final catch all.
  
  In the following correct example, note the "No such contact" catch all sits as the final part of the function. Were it inside the for loop, it would stop the loop iterating through each object within the contacts array and end after contacts[0]:

  ```
  function lookUpProfile(name, prop) {

    for (var i = 0; i < contacts.length; i++) {
      
      if (contacts[i].firstName === name) {
          
          if (contacts[i].hasOwnProperty(prop)) {
              return contacts[i][prop];
          }

          return "No such property"

      }

    }

    return "No such contact"

  }
  ```

- Reminded of use of ternary operator:
  - Works like shorthand if/else statement. Takes condition, checks if true or false and takes return statements for either option. Example:
  
  ```
  a === b ? true : false;
  ```