function radixSort(arrOfNums) {
    let maxDigitsCount = maxDigits(arrOfNums);
    for (let i = 0; i < maxDigitsCount; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let j = 0; j < arrOfNums.length; j++) {
            let digit = getDigit(arrOfNums[j], i);
            digitBuckets[digit].push(arrOfNums[j]);
        }
        arrOfNums = [].concat(...digitBuckets);
    }
    return arrOfNums;
  }

  function maxDigits(array) {
    let maxDigits = 0;
    for (let i=0; i<array.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(array[i]));
    }
    return maxDigits;
  }

  function digitCount(number) {
      if (number === 0)
        return 1;
    
    // log10(son) + 1
    return Math.floor(Math.log10(Math.abs(number))) + 1;
  }

  function getDigit(number, place) {
    // (son / 10^joy) % 10
    return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
  }

  let unsorted = [227, 1055, 103, 14, 1229, 88, 1];
  console.log('Tartiblanmangan qator:');
  console.log(unsorted);
  let sorted = radixSort(unsorted); 
  console.log('Tartiblangan qator:');
  console.log(sorted);