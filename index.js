let location1 = 43;
let location2 = 50;
let location3 = 34;

function distanceFromHqInBlocks(x) {
  if (x < 42) {
    return 42 - x;
  } else if (x > 42) {
    return x - 42;
  }
}

distanceFromHqInBlocks(location1);
distanceFromHqInBlocks(location2);
distanceFromHqInBlocks(location3);

function distanceFromHqInFeet(y) {
  distanceFromHqInBlocks(y);
  if (y < 42) {
    return (42 - y) * 264;
  } else if (y > 42) {
    return (y - 42) * 264;
  }
}
distanceFromHqInFeet(location1);
distanceFromHqInFeet(location2);
distanceFromHqInFeet(location3);

function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else if (start > destination) {
    return (start - destination) * 264;
  }
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination) {
  let distance;
  if (start < destination) {
    distance = (destination - start) * 264;
  } else if (start > destination) {
    distance = (start - destination) * 264;
  }
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return ((distance - 400) * 2) / 100;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
