const testNumbers = require('./testNumbers');
const { expect } = require('chai');

describe('Tests Nubers functionality', () =>{

    describe('Sum Numbers', () => {
        it('If any param is not a number returns undefined', () => {
            expect(testNumbers.sumNumbers(null, 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(2, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(true, false)).to.be.undefined;
            expect(testNumbers.sumNumbers([], {})).to.be.undefined;
            expect(testNumbers.sumNumbers({}, 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(2, [])).to.be.undefined;
            expect(testNumbers.sumNumbers(null, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(undefined, 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(2, {})).to.be.undefined;
            expect(testNumbers.sumNumbers(false, '')).to.be.undefined;
            expect(testNumbers.sumNumbers('', 3)).to.be.undefined;
            expect(testNumbers.sumNumbers(3, '')).to.be.undefined;
        });

        it('Should return a correct sum when params are correct', () => {
            expect(testNumbers.sumNumbers(3, 2)).to.equal('5.00');
            expect(testNumbers.sumNumbers(-1, 2)).to.equal('1.00');
            expect(testNumbers.sumNumbers(-3, -2)).to.equal('-5.00');
            expect(testNumbers.sumNumbers(0, -2)).to.equal('-2.00');
            expect(testNumbers.sumNumbers(9, 0)).to.equal('9.00');
            expect(testNumbers.sumNumbers(-3, 0)).to.equal('-3.00');
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
            expect(testNumbers.sumNumbers(1.5, 2)).to.equal('3.50');
            expect(testNumbers.sumNumbers(1.5, 2.6)).to.equal('4.10');
            expect(testNumbers.sumNumbers(1.3333, 1.4444)).to.equal('2.78');
        });
    });

    describe('Number Checker', () => {
        it('Should throw error when input is not a number', () => {
            expect(() => testNumbers.numberChecker({})).to.throw();
            expect(() => testNumbers.numberChecker('a')).to.throw();
            expect(() => testNumbers.numberChecker(undefined)).to.throw();
            expect(() => testNumbers.numberChecker(NaN)).to.throw();
        });

        it('Should return correct message when number is even', () => {
            expect(() => testNumbers.numberChecker(1.6)).to.not.throw();
            expect(() => testNumbers.numberChecker(4)).to.not.throw();

            expect(testNumbers.numberChecker(2)).to.contain('even')
            
        });

        it('Should return correct message when number is odd', () => {
            expect(() => testNumbers.numberChecker(1.7)).to.not.throw()
            expect(() => testNumbers.numberChecker(3)).to.not.throw()

            expect(testNumbers.numberChecker(2.1)).to.contain('odd')
            expect(testNumbers.numberChecker(3)).to.contain('odd');
            expect(testNumbers.numberChecker(2.2)).to.contain('odd');
        });
    });

    describe('Average Sum Array', () => {
        it('Should give correct result', () => {
            expect(testNumbers.averageSumArray([2, 3, 4, 1, 5])).to.equal(3);
            expect(testNumbers.averageSumArray([2, 3, 4, 2.5, 3.5])).to.equal(3);
            expect(testNumbers.averageSumArray([-4, -6])).to.equal(-5);
            expect(testNumbers.averageSumArray([-4.5, -6.7])).to.equal(-5.6);
        });
    });
});