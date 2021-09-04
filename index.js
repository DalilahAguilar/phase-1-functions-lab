
function distanceFromHqInBlocks (blockNumber) {
    if (blockNumber > 42) {
        return (blockNumber - 42);
    } else {
        return (42 - blockNumber)
    }
}

function distanceFromHqInFeet(blockNumber){
return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(blockNumber, blockNumber2){
 if (blockNumber > 42){
return (blockNumber-blockNumber2) * -264;
} else {
  return (blockNumber-blockNumber2) * 264;
  }
}
function calculatesFarePrice(start, destination){
let n = distanceTravelledInFeet(start, destination)
if (n <= 400){
  return 0
} else if ( n > 400 && n < 2000 ){
return (n - 400) * .02 
} else if (n < 2500  && n > 2000) {
    return 25
} else  { 
return 'cannot travel that far'
} 
}


