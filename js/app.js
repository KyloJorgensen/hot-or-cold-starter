$(document).ready(function(){
	var anwser = Math.floor((Math.random() * 100) + 1),
		count = 0,
		guesses = [];

  	// starts a another game
  	$('.clearfix').on('mouseup', '.new', function(){
  		newgame();
  	});

	// Starts runs the game
  	function newgame(){
  		anwser = Math.floor((Math.random() * 100) + 1);
		count = 0;
		$('#count').text(count);
		$('#feedback').text('Make your Guess!');
		guesses = [];
		$('#guessList').children().hide();
	}

	//enters guess with a click
	$('.game').on('mouseup', '#guessButton', function(){
		validatesGuess($('#userGuess').val());
		$('#userGuess').val('');
	});

	//enters guess by hiting enter
	$("body").keyup(function(event) {
		if (event.which === 13) {
			validatesGuess($('#userGuess').val());
			$('#userGuess').val('');
		} 
	});

	// vailidates that the guess is a valid nubmer
	function validatesGuess(guess) {

		if (!isNaN(guess) && guess <= 100 && guess >= 1 && guess.length) {
			feedBack(guess);
			checkGuess(guess)
		}
		else {
			alert('please input a number between 1 and 100');
		}
	}

	//changes the feedback text	
	function feedBack(guess) {
		var difference = Math.abs(anwser - guess);

		difference <= 40 ? $('#feedback').text('less then warm') : $('#feedback').text('cold');	
		difference <= 30 ? $('#feedback').text('warm') : '';
		difference <= 20 ? $('#feedback').text('Kinda hot') : '';
		difference <= 10 ? $('#feedback').text('hot') : '';
		difference === 0 ? $('#feedback').text('You Won. Click new game to play again') : '';
    }

    //checks if guess has already been guessed
	function checkGuess(guess) {
		for (var i = 0; i < guesses.length; i++) {
			if (guesses[i] == guess) {
				return alert('You guessed this number already');
			}
		}
		updateCount(guess);
		appendGuess(guess);
	}
	//updates number of guess
    function updateCount(guess) {
		count += 1;
		$('#count').text(count);
    }
    // adds vaild guesses to guess list
	function appendGuess(guess) {
		guesses.push(guess);
		$('#guessList').append('<li>' + guess + '</li>');
	}
	
	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});
});



