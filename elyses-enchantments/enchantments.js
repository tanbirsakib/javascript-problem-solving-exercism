//1. Retrieve a card from a stack
export function getItem(cards, position) {
  return cards[position];
}

//2.Exchange a card in the stack
export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

//3. Insert a card at the top of the stack
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

//4. Remove a card from the stack
export function removeItem(cards, position) {
  cards.splice(position,1);
  return cards;
}

//5. Remove the top card from the stack
export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

//6. Insert a card at the bottom of the stack
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard)
  return cards;
}

//7. Remove a card from the bottom of the stack
export function removeItemAtBottom(cards) {
  cards.shift()
  return cards;
}

//8. Check the size of the stack
export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}
