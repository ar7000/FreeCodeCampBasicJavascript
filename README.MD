Revisiting Basic JavaScript via FreeCodeCamp resources and copying passed code to Git repo as I go through each task. Documenting below anything new I learn, or anything I am reminded of that I may have forgotten.

- Strings are immutable.
    - Following would not work:

        var myStr = "Jello World";

        myStr[0] = "H";

    - Would need to be:

        var myStr = "Jello World";

        myStr = "Hello World";