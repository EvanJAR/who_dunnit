// Episode One

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

//   the output will be "The murderer is Miss Scarlet" as the declareMurderer anonymous function returns the key-value for murderer in the 'scenario' object.