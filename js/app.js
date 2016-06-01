
$(document).ready(function(){
	var anwser
	var count
	var guesses
	//changes the feedback text	
	function checkGuess(check) {
		$('#feedback').hide();
        $('.game').prepend('<h2 id="feedback">' + check + '</h2>');
    }

	// Starts runs the game
  	function newgame(){
  		anwser = Math.floor((Math.random() * 100) + 1);
		console.log(anwser);
		count = 0;
		$('.game').children('form').after('<p>Guess #<span>' + count + '</span>!</p>');
		checkGuess('Make your Guess!')
		guesses = [];
	}

	// startsgame when page opens
  	newgame();

  	// starts a another game
  	$('.clearfix').on('mouseup', '.new', function(){
  		newgame();
  	});
	function counter() {
	  	count += 1;
	  	$('.game').children('form').after('<p>Guess #<span>' + count + '</span>!</p>');
	}


	$('form').on('mouseup', '#guessButton', function(){
		var guess = $('#userGuess').val();
		$('.game').children('form').children('#userGuess').hide()
		$('.game').children('form').prepend('<input type="text" name="userGuess" id="userGuess" class="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required/>')
		if (guess % 1 == 0) {
			guess = parseInt(guess);
			console.log(guess);
			for (var i = 1; i >= guesses.length; i++) {
				guess === guesses[i] ? function() {
				guess >= anwser - 40 && guess <= anwser + 40 ? checkGuess('less then warm') : checkGuess('cold');	
				guess >= anwser - 30 && guess <= anwser + 30 ? checkGuess('warm') : false;
				guess >= anwser - 20 && guess <= anwser + 20 ? checkGuess('Kinda hot') : false;
				guess >= anwser - 10 && guess <= anwser + 10 ? checkGuess('hot') : false;
				guess === anwser ? checkGuess('You Won. Click new game to play again') : false;
				counter();
				} : alert('You guessed this number already');
			}
		}
		else {
			alert('please input a number');
		}
	});


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



});


