Revisiting Basic JavaScript via FreeCodeCamp resources and copying passed code to Git repo as I go through each task. Documenting below anything new I learn, or anything I am reminded of that I may have forgotten.

- Strings are immutable.
    - Following would not work:

        var myStr = "Jello World";

        myStr[0] = "H";

    - Would need to be:

        var myStr = "Jello World";

        myStr = "Hello World";

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
    - Can also take multiple cases and apply same result.