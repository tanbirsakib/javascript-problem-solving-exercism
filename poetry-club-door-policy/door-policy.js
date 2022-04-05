
export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  let firstLetterUpperCase = word[0].toUpperCase();
  let restLettersLowerCase = word.slice(1).toLowerCase();
  return firstLetterUpperCase + restLettersLowerCase;
}


export function backDoorResponse(line) {
  let lineWithoutSpace = line.trimEnd();
  let lineLength = lineWithoutSpace.length;
  let lastLetter = lineWithoutSpace[lineLength -1];
  return lastLetter;
}


export function backDoorPassword(word) {
  
  return frontDoorPassword(word) + ', please';
}
