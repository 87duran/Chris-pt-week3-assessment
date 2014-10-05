/* 
  Write a function called reverse that makes the code below work properly.
  The code below should log "The reversedString is .desrever teg dluohs sihT"
*/
var reverse = function(str, cb) {
	var revStr = str.split('').reverse().join('');
	cb(revStr);
};

var sentence = 'This should get reversed.';
reverse(sentence, function(reversedString){
  console.log('The reversedString is ' + reversedString);
});

