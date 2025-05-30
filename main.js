/******************
 * YOUR CODE HERE *
 *******************/

function getFirstItemFrom(array) {
  return array[0];
}

function getLastItemFrom(array) {
  return array[array.length -1];
}

function getIndex3(array) {
  if(array.length > 3) {
    return array[3];
    
  } else {
    return array[array.length - 1];
  }
}

function isLongList(array) {
  return array.length >= 10;
}

function firstItemIsNumber(array) {
  return typeof array[0] === 'number';
}

function secondCharOfThirdString(array) {
  const thirdItem = array[2];

  if (typeof thirdItem === 'string' && thirdItem.length >=2) {
    return thirdItem[1];
  } else {
    return undefined
  }
}







 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
