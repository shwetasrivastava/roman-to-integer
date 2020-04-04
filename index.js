function romanToInteger(romanNumber) {
    if (!romanNumber || typeof romanNumber != 'string' || romanNumber.length <= 0) {
        return null;
    }
    
    const hashmap = new Map();
    
    hashmap.set('I', 1);
    hashmap.set('V', 5);
    hashmap.set('X', 10);
    hashmap.set('L', 50);
    hashmap.set('C', 100);
    hashmap.set('D', 500);
    hashmap.set('M', 1000);
    
    romanNumber = romanNumber.toUpperCase();

    let int = 0;

    for(let i = 0; i < romanNumber.length; i++) {
        if (hashmap.get(romanNumber.charAt(i)) < hashmap.get(romanNumber.charAt(i+1))) {
            int = int - hashmap.get(romanNumber.charAt(i));
        } else {
            int = int + hashmap.get(romanNumber.charAt(i));
        }
    }
    
    return int;
}

module.exports = romanToInteger;
