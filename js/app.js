console.log('Yo');

$(function(){
    $.getJSON('https://pusher-js-test.herokuapp.com/', function(data) {
        // console.log(data);
        // console.log(data.state);
        // console.log(data.state.office);

        var office = data.state.office;
        var people = data.state.people;
        var coffee = data.state.coffee;
        var food = data.state.food;
        var darts = data.state.darts;

        // console.log(office);
        // console.log(people);
        // console.log(coffee);
        // console.log(food);
        // console.log(darts);

        $('.display-office').html(office);
        $('.display-people').html(people);
        $('.display-coffee').html(coffee);
        $('.display-food').html(food);
        $('.display-darts').html(darts);

        $('.office-button').click(function() {
            $('.result').html('');
            $('.message').html('');

            $('.result').html('The office score is ' + office);
            $('.result').css('background-color', 'gainsboro');
            $('.message').css('background-color', 'lavender');

            if (office == 10) {
              $('.message').html('The HAPPYNESS has gone throught the roof - lets celeberate');

            } else if (office >= 7) {
              $('.message').html('This is a very good HAPPYNESS level - well done guys!');
            } else {
              $('.message').html('Be Happy my Chappy - we can do it!');
            }

            $('.box').css('background-image', 'url(./images/lauren-mancke-60627.png)');
            $('.box').css('background-repeat', 'no-repeat');
            $('.box').css('background-size', 'cover');
        });

        $('.people-button').click(function() {
            $('.result').html('');
            $('.message').html('');

            $('.result').html('The people score is ' + people);
            $('.result').css('background-color', 'gainsboro');
            $('.message').css('background-color', 'lavender');

            if (people > 9) {
              $('.message').html('Everyone is in, lets have a PARTY!');
            } else if (people < 2) {
              $('.message').html('Where is everyone #AWKWARD!');
            }

            $('.box').css('background-image', 'url(./images/ethan-hoover-235152.png)');
            $('.box').css('background-repeat', 'no-repeat');
            $('.box').css('background-size', 'cover');
        });

        $('.coffee-button').click(function() {
            $('.message').html('');
            $('.result').html('');

            $('.result').html('The coffee score is ' + coffee);
            $('.result').css('background-color', 'gainsboro');
            $('.message').css('background-color', 'lavender');

            if (coffee < 5) {
              $('.message').html('Can we order some more COFFEE please!');
            } else if (coffee > 9) {
              $('.message').html('Hey guys calm down on the COFFEE please!');
            }

            $('.box').css('background-image', 'url(./images/nolan-issac-38299.png)');
            $('.box').css('background-repeat', 'no-repeat');
            $('.box').css('background-size', 'cover');
        });

        $('.food-button').click(function() {
            $('.result').html('');
            $('.message').html('');

            $('.result').html('The food score is ' + food);
            $('.result').css('background-color', 'gainsboro');
            $('.message').css('background-color', 'lavender');

            if (food < 3) {
              $('.message').html('OMG! everyone is starving - lets order some Pizza');
            } else if (food > 8) {
              $('.message').html('Your bellys are full but dont fall asleep please!');
            }

            $('.box').css('background-image', 'url(./images/ali-inay-9858.png)');
            $('.box').css('background-repeat', 'no-repeat');
            $('.box').css('background-size', 'cover');
        });

        $('.darts-button').click(function() {
            $('.result').html('');
            $('.message').html('');

            $('.result').html('The darts score is ' + darts);
            $('.result').css('background-color', 'gainsboro');
            $('.message').css('background-color', 'lavender');

            if (darts > 6) {
              $('.message').html('Why is everyone playing darts - come on get back to work please!');
            } else if (darts < 2) {
              $('.message').html('To play a game of darts you need at least 2 people!');
            }

            $('.box').css('background-image', 'url(./images/dart-1127433_640.jpg)');
            $('.box').css('background-repeat', 'no-repeat');
            $('.box').css('background-size', 'cover');
        });

        $('.refresh-button').click(function() {
            location.reload();
        });

    });

});
