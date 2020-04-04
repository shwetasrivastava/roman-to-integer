const romanToInteger = require('../index.js');
var chai = require('chai');
var expect = chai.expect;


describe('roman-to-integer test',() => {
    it('should return 1',() =>{
        const romanNumber = "I";
        const expectedInteger = romanToInteger(romanNumber);
        expect(expectedInteger).to.equal(1);
    })

    it('should return 4',() =>{
        const romanNumber = "IV";
        const expectedInteger = romanToInteger(romanNumber);
        expect(expectedInteger).to.equal(4);
    })

    it('should return 9',() =>{
        const romanNumber = "IX";
        const expectedInteger = romanToInteger(romanNumber);
        expect(expectedInteger).to.equal(9);
    })

    it('should return return null for empty string',() =>{
        const romanNumber = "";
        const expectedInteger = romanToInteger(romanNumber);
        expect(expectedInteger).to.equal(null);
    })

    it('should return null for non string values',() =>{
        const romanNumber = 100;
        const expectedInteger = romanToInteger(romanNumber);
        expect(expectedInteger).to.equal(null);
    })

    it('should return null for null values',() =>{
        const romanNumber = null;
        const expectedInteger = romanToInteger(romanNumber);
        expect(expectedInteger).to.equal(null);
    })

    it('should return null for undefined values',() =>{
        const romanNumber = undefined;
        const expectedInteger = romanToInteger(romanNumber);
        expect(expectedInteger).to.equal(null);
    })

    it('should return NaN for non roman numbers',() =>{
        const romanNumber = "A";
        const expectedInteger = romanToInteger(romanNumber);
        expect(expectedInteger).to.NaN;
    })

    it('should convert roman numbers to upper case',() => {
        const romanNumber = "i";
        const expectedInteger = romanToInteger(romanNumber);
        expect(expectedInteger).to.equal(1);
    })
    
})


