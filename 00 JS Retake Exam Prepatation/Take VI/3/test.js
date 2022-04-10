const { flowerShop } = require('./flowerShop.js');
const { expect } = require("chai");

describe('flowerShop', () => {
    describe('calcPriceOfFlowers', () => {
        it('invalid input throws error', () => {
            expect(() => flowerShop.calcPriceOfFlowers({}, 2, 3)).to.throw('Invalid');
            expect(() => flowerShop.calcPriceOfFlowers('string', '2', 3)).to.throw('Invalid');
            expect(() => flowerShop.calcPriceOfFlowers('test', 2, '3')).to.throw('Invalid');
            expect(() => flowerShop.calcPriceOfFlowers('s', 2.4, 3)).to.throw('Invalid');
            expect(() => flowerShop.calcPriceOfFlowers(2, 3)).to.throw('Invalid');
            expect(() => flowerShop.calcPriceOfFlowers("str", 3)).to.throw('Invalid');
            expect(() => flowerShop.calcPriceOfFlowers(undefined, "str", 3.6)).to.throw('Invalid');
            expect(() => flowerShop.calcPriceOfFlowers()).to.throw('Invalid');
        });

        it('valid input returns string like:', () => {
            expect(flowerShop.calcPriceOfFlowers('daisy', 2, 10)).to.equal('You need $20.00 to buy daisy!');
            expect(flowerShop.calcPriceOfFlowers('rose', 5, 10)).to.equal('You need $50.00 to buy rose!');
        });
    });

    describe('checkFlowersAvailable', () => {
        it('if there is flower - available', () => {
            expect(flowerShop.checkFlowersAvailable('rose', ['rose', 'lavender', 'a'])).to.equal('The rose are available!');
            expect(flowerShop.checkFlowersAvailable('x', ['w', 'x', 'a'])).to.equal('The x are available!');
        });

        it('if no flower - sold', () => {
            expect(flowerShop.checkFlowersAvailable('x', ['w', 'q', 'a'])).to.equal('The x are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('x', [])).to.equal('The x are sold! You need to purchase more!');
        });
    });

    describe('sellFlowers', () => {
        it('invalid input throws error', () => {
            expect(() => flowerShop.sellFlowers({}, 2)).to.throw('Invalid');
            expect(() => flowerShop.sellFlowers([], 2.3)).to.throw('Invalid');
            expect(() => flowerShop.sellFlowers([], '2')).to.throw('Invalid');
            expect(() => flowerShop.sellFlowers(['a'], -2)).to.throw('Invalid');
            expect(() => flowerShop.sellFlowers(['a', '2'], 5)).to.throw('Invalid');
            expect(() => flowerShop.sellFlowers(['a', '2'], 2)).to.throw('Invalid');
        });

        it('valid input returns string like:', () => {
            expect(flowerShop.sellFlowers(['a', 'b', 'd'], 2)).to.equal('a / b');
            expect(flowerShop.sellFlowers(['a', 'b', 'd', 'l', 'f'], 4)).to.equal('a / b / d / l');
        });
    });
});