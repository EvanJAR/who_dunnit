// episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// The first verdict will be "The murder is Mrs. Peacock", as the variable name "murderer" is declared using a let, therefore within that function the murderer has the value "Mrs. Peacock". 

// The second verdict will return the "The murderer is Professor Plum", as the first declaration of the murderer variable has been a global declaration.