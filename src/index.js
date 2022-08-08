module.exports = function toReadable (number) {
    const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const num1Arr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const num2Arr = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  number = number.toString();
  for(i=0; i<number.length; i++){
    if(number < 10){
      return numArr[number];
    } else if(number >= 10 && number < 20) {
      return num1Arr[number[1]];
    } else if(number >= 20 && number < 100) {
      if(number % 10 === 0) {
        return num2Arr[number[0]];
      } else {
        return num2Arr[number[0]] + ' ' + numArr[number[1]];
      }
    } else if(number >= 100 && number < 1000) {
      if(number % 100 === 0) {
        return numArr[number[0]] + ' ' + 'hundred';
      } else if(number % 100 > 0 && number % 100 < 10) {
        return numArr[number[0]] + ' ' + 'hundred' + ' ' + numArr[number[2]];
      } else if(number % 100 >= 10 && number % 100 < 20) {
        return numArr[number[0]] + ' ' + 'hundred' + ' ' + num1Arr[number[2]];
      } else if(number % 10 === 0) {
        return numArr[number[0]] + ' ' + 'hundred' + ' ' + num2Arr[number[1]];
      } else {
        return numArr[number[0]] + ' ' + 'hundred' + ' ' + num2Arr[number[1]] + ' ' + numArr[number[2]];
      }
      
    }
  }
}