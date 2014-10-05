/*Create a function called 'person' that accepts a name and an age parameter
  and returns an object with those properties. 
*/

var person = function(name, age) {
	this.name = name;
	this.age = age;
};

    //code here

/* Call your function twice creating to different objects
*/
var bob = new person('bob', 25);
var chris = new person('chris', 30);

/* In this scenario, can you add a method to your person functions prototoype and then have
   the objects you create with that function delegate to the person's prototype?

   //Explain your answer here
   /*  Yes you can!  */
  
  
/* Create a Constructor function called 'Person' that accepts a name and an age paramter
    and returns an object with those parameters */

    //code here
var Person = function(name, age) {
  this.name = name;
  this.age = age;
};


/* Add a property called sayAge to the Person's prototype which says that instances name */
Person.prototype.sayAge = function() {
  console.log(this.age);
};
    

// Create two instances of Person and call sayAge with one of those instances.
var john = new Person('john', 35);
var bill = new Person('bill', 40);
bill.sayAge();

