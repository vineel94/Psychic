var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      var wins = 0;
      var losses = 0;
      var guessesleft = 10;
      var guesses = "";
      document.onkeyup = function() {
          var userguess = String.fromCharCode(event.keyCode).toLowerCase();

          console.log(userguess);

          var computerguess = alph[Math.floor(Math.random() * alph.length)];

          console.log(computerguess);

          if (userguess == computerguess){
              wins++;
              guessesleft = 10;
              guesses = "";
          }
          else {
              guessesleft --;
              guesses += " " + userguess;
              if (guessesleft == 0){
                  losses ++;
                  guessesleft = 10;
                  guesses = "";
              }
          }
          console.log(guesses);

        var html = "<p>Wins: " + wins + "</p> "+
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesleft + "</p>" +
        "<p>Your Guesses so far:" + guesses + "</p>";

        document.querySelector('#game'). innerHTML= html;
      }