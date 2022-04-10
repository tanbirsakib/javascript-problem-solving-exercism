//1. Determine the total number of birds that you counted so far
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBirds += birdsPerDay[i];
  }
  return totalBirds;
}

//2. Calculate the number of visiting birds in a specific week
export function birdsInWeek(birdsPerDay, week) {
  let totalBirds = 0;
  for (let i = (week - 1) * 7; i < week * 7; i++) {
    // i=(week-1)*7 initialize the start of that specific week given
    totalBirds += birdsPerDay[i];
  }
  return totalBirds;
}

//3. Fix a counting mistake
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }

  return birdsPerDay;
}
