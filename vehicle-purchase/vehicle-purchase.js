//1. Determine if you will need a drivers licence
export function needsLicense(kind) {
  if(kind === 'car' || kind === 'truck'){
    return true;
  }
  return false;
}

//2. Choose between two potential vehicles to buy
export function chooseVehicle(option1, option2) {
  if(option1<option2){
    return option1 + " is clearly the better choice.";
  }
  else return option2 + " is clearly the better choice.";
}

//3. Calculate an estimation for the price of a used vehicle
export function calculateResellPrice(originalPrice, age) {
  if(age<3){
    return originalPrice * 0.8;
  }else if(age>10){
    return originalPrice * 0.5;
  }else if(age>=3 && age<=10){
    return originalPrice * 0.7;
  }
}
