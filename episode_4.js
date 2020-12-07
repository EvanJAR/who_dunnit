// episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// "Suspects" will return "the suspects are Miss Scarlet, Professor Plum, Colonel Mustard" - the third suspect will not be Mrs Peacock as the variable has been changed in declareAllSuspects.

// However, it will also output "suspect three is Mrs Peacock" as suspectThree with "mrs peacock" as the value was a global declaration.


