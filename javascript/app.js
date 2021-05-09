
var theFirstTime = prompt('Is this the first time you visit our website?');
if (theFirstTime == 'yes') {
  alert('You are Welcome, Wish you have a nice tour in our website');
}
else if (theFirstTime == 'no') {
  alert('Welcome Back ^_^ , wishing you like our services');
}

function showFavourite() {
  var favouriteFood = prompt('What do you like the most: burger or pizza?');
  while (favouriteFood !== 'pizza' && favouriteFood !== 'burger') {
    favouriteFood = prompt('Please choose either pizza or burger only');
  }

  var favouriteResult = '';

  if (favouriteFood == 'burger') {
    favouriteResult = ('<img src="https://static.toiimg.com/thumb/53352884.cms?width=1200&height=900" width="400px">');
  }
  else if (favouriteFood == 'pizza') {
    favouriteResult = ('<img src="https://i2-prod.mirror.co.uk/incoming/article23726522.ece/ALTERNATES/s1200d/1_Pizza-Hut-Delivery-Mexican-Range.jpg" width="400px">');
  }

  return favouriteResult;
}
document.write(showFavourite());


var eatingTimes = function () {
  var eating = prompt('How many times do eat it a month?');
  var eatingTimesResult = '';
  for (var i = 0; i < eating; i++) {
    eatingTimesResult += ('<img src="https://www.southwestwholesalers.com.au/wp-content/uploads/2018/06/Schweppes-Pepsi-Cans-375ml.jpg" width="100px">');

  }
  return eatingTimesResult;
}

document.write(eatingTimes());



