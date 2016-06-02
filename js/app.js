$(document).ready(function(){
	var anwser;
	var count = 0;
	var guesses = [];
	var guess;
	//changes the feedback text	
	function feedBack(check) {
		$('#feedback').hide();
        $('.game').prepend('<h2 id="feedback">' + check + '</h2>');
    }

	function counter() {
		$('.game').children('p').hide();
	  	$('.game').children('form').after('<p>Guess <span id="count">' + count + '</span>!</p>');
	}

	function guesslist() {
		$('#guessList').children().hide();
		for (var i = 0; i < guesses.length; i++) {
			$('#guessList').append('<li>' + guesses[i] + '</li>');
		}
	}

	function check() {
		count += 1;
		counter();
		guesses.push(guess);
		guesslist();
	}

	// Starts runs the game
  	function newgame(){
  		anwser = Math.floor((Math.random() * 100) + 1);
		count = 0;
		counter();
		feedBack('Make your Guess!')
		guesses = [];
		guesslist();
	}

	function checkGuess(number) {
		var checkstatus = false;
		for (var i = 0; i < number; i++) {
			checkstatus = guess == guesses[i] ? true : checkstatus;
		}
		checkstatus == false ? check() : alert('You guessed this number already');
	}

	// startsgame when page opens
  	newgame();

  	// starts a another game
  	$('.clearfix').on('mouseup', '.new', function(){
  		newgame();
  	});

	function enter() {
		guess = $('#userGuess').val();
		$('.game').children('form').children('#userGuess').hide()
		$('.game').children('form').prepend('<input type="text" name="userGuess" id="userGuess" class="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required/>')
		guess = parseInt(guess);

		if (guess % 1 == 0) {
			if (guess <= 100 && guess >= 1) {
				var j = guesses.length;
				j >= 1 ? checkGuess(j) : check();
				guess >= anwser - 40 && guess <= anwser + 40 ? feedBack('less then warm') : feedBack('cold');	
				guess >= anwser - 30 && guess <= anwser + 30 ? feedBack('warm') : false;
				guess >= anwser - 20 && guess <= anwser + 20 ? feedBack('Kinda hot') : false;
				guess >= anwser - 10 && guess <= anwser + 10 ? feedBack('hot') : false;
				guess === anwser ? feedBack('You Won. Click new game to play again') : false;
			}
			else {
				alert('please input a number between 1 and 100');
			}
		}
		else {
			alert('please input a number');
		}
	}

	$('form').on('mouseup', '#guessButton', function(){
		enter();
	});

	$("body").keyup(function(event) {
		if (event.which === 13) {
			enter();
		} 
	});
	
	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});
});



