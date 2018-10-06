Function constructor //

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge =
}


Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Usselman';

var john = new Person('John', 1990, 'Teacher');
var jane = new Person('Jane', 1996, 'Designer');
var rashad = new Person('Rash', 1955, 'Boxer');

john.calculateAge();


Object.create //

var personProto =  {
    calculateAge: function() {
      console.log(2018 - this.yearOfBirth)
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1985;
john.job = 'Developer';

var jane = Object.create(personProto,
  {
    name: { value: 'Jane' },
    yearOfBirth: { vale: 1969 },
    job: { value: 'designer'}
  });


primitives//




function arrayCalc(arr, fn) {
  var arrRes = [];
  for(i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
  return Math.round(206.9 - (0.67 * el));
} else {
  return 'N/A';
}
}

var years = [1990, 1999, 2000, 2005, 2011];

var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAge);
console.log(rates);


function interviewQuestion(job) {
    if (job === 'designer') {
      return function(name) {
        console.log(name + ' , can you please explain what UX is?')
      }
    }else if (job === 'teacher') {
        return function(name) {
          console.log(name + ', what do you teach?')
        }
      } else {
        return function(name) {
          console.log('Hello ' + name + ", what do you do?");
        }
      }
    }

    var teacherQuestion = interviewQuestion('teacher');

    teacherQuestion('John');

    var genericQuestion = interviewQuestion();
    genericQuestion('Bill');

    interviewQuestion()();


function whatDoYouTeach(subject) {
  if (subject === 'math') {
    return function(name) {
      console.log('Hey ' + name + ' math sucks!');
    }
  }
}

var maths = whatDoYouTeach('math');

maths('Bill')


(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
} )();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
} )(5);



//Closure //

function retirement(retirementAge) {
  var a = ' years left until ya retire';
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

// var retirementUS = retirement(66);

retirement(90)(1990);
