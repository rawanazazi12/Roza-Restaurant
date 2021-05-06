var theFirstTime=prompt('Is this the first time you visit our website?');
if(theFirstTime=='yes'){
  alert('You are Welcome, Wish you have a nice tour in our website');
}
else if(theFirstTime=='no'){
  alert('Welcome Back ^_^ , wishing you like our services');
}


var favouriteFood=prompt('What do you like the most: burger or pizza?');


if(favouriteFood=='burger'){
  document.write('<img src="https://static.toiimg.com/thumb/53352884.cms?width=1200&height=900" width="400px">');
} 
else if(favouriteFood =='pizza'){
  document.write('<img src="https://i2-prod.mirror.co.uk/incoming/article23726522.ece/ALTERNATES/s1200d/1_Pizza-Hut-Delivery-Mexican-Range.jpg" width="400px">');
}else {document.write ('<p style="font-family:comic sans ms; color:#a08350 ; font-size:16px;">We will take your favourite meal in our considerations to add it to our menu in the future.</p>')}

for(var i=0;i<=5;i++){console.log('Hello There');}

while(favouriteFood !=='pizza'&&favouriteFood!=='burger')
{
favouriteFood=prompt('Please choose either pizza or burger only'); 
}
var eat=prompt('How many times do eat it a month?');

for(var i=0;i<eat;i++)
{document.write('<img src="https://www.southwestwholesalers.com.au/wp-content/uploads/2018/06/Schweppes-Pepsi-Cans-375ml.jpg" width="100px">');

 }
  
