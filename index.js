function romanToInteger(romanNumber) {
    romanNumber = romanNumber.toUpperCase();
    const romanNumList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
    const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
    let index =  0, num = 0;
    for(let rn in romanNumList){
      index = romanNumber.indexOf(romanNumList[rn]);
      while(index != -1){
        num += parseInt(corresp[rn]);
        romanNumber = romanNumber.replace(romanNumList[rn],"-");
        index = romanNumber.indexOf(romanNumList[rn]);
      }
    }
    console.log(num);
    return num;
}

// romanToInteger('CMLVI'); 

module.exports = romanToInteger;