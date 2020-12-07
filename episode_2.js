// Episode two

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// I think there will be an error, as the variable name "murderer" has been declared as constant and then there has been an attempt to change the value of this variable. 