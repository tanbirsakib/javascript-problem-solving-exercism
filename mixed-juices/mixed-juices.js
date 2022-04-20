//## 1. Determine how long it takes to mix a juice
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

//2. Replenish the lime wedge supply
export function limesToCut(wedgesNeeded, limes) {
  let wedgesNumber = 0;
  let limesCounter = 0;
  while (wedgesNumber < wedgesNeeded && limesCounter < limes.length) {
    switch (limes[limesCounter]) {
      case "small":
        wedgesNumber += 6;
        limesCounter++;
        break;
      case "medium":
        wedgesNumber += 8;
        limesCounter++;
        break;
      case "large":
        wedgesNumber += 10;
        limesCounter++;
        break;
    }
  }
  return limesCounter;
}

//3. Finish up the shift
export function remainingOrders(timeLeft, orders) {
  do{
   let time = timeToMixJuice(orders[0]);
    timeLeft -= time;
    orders.splice(0,1);
 }while(timeLeft > 0);
  return orders;
}
