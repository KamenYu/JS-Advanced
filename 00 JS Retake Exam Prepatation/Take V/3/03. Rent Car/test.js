let { rentCar } = require('./rentCar.js');
let { expect } = require("chai");

describe('rent car', () => {
    describe('searchCar', () => {
        it('invalid input throws error', () => {
            expect(() => rentCar.searchCar({}, 22)).to.throw('Invalid');
            expect(() => rentCar.searchCar(22)).to.throw('Invalid');
            expect(() => rentCar.searchCar([], 22)).to.throw('Invalid');
            expect(() => rentCar.searchCar(undefined, '22')).to.throw('Invalid');
            expect(() => rentCar.searchCar([], '22')).to.throw('Invalid');
        });

        it('throws error if there is no model in shop arr', () => {
            expect(() => rentCar.searchCar(['A', 'B'], 'C')).to.throw('no such models');
            expect(() => rentCar.searchCar(['A', 'B'], 'a')).to.throw('no such models');
            expect(() => rentCar.searchCar([], 'C')).to.throw('no such models');
        });

        it('finds an existing element', () => {
            expect(rentCar.searchCar(['A', 'b'], 'b')).to.equal('There is 1 car of model b in the catalog!');
            expect(rentCar.searchCar(['A', 'b', 'B', 'b'], 'b')).to.equal('There is 2 car of model b in the catalog!');
        });
    });

    describe('calculatePriceOfCar', () => {
        it('invalid input throws error', () => {
            expect(() => rentCar.calculatePriceOfCar({}, 22)).to.throw('Invalid');
            expect(() => rentCar.calculatePriceOfCar('j', 22.09)).to.throw('Invalid');
            expect(() => rentCar.calculatePriceOfCar(undefined, '22')).to.throw('Invalid');
            expect(() => rentCar.calculatePriceOfCar(22)).to.throw('Invalid');
            expect(() => rentCar.calculatePriceOfCar('f', '2')).to.throw('Invalid');
        });

        it('throws error if there is no such model in calatogue', () => {
            expect(() => rentCar.calculatePriceOfCar('Bentli', 22)).to.throw('No such model');
            expect(() => rentCar.calculatePriceOfCar('Porche', 22)).to.throw('No such model');

        });

        it('if model exists returns string like:', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 10)).to.equal('You choose BMW and it will cost $450!');
            expect(rentCar.calculatePriceOfCar('Audi', 10)).to.equal('You choose Audi and it will cost $360!');
            expect(rentCar.calculatePriceOfCar('Toyota', 10)).to.equal('You choose Toyota and it will cost $400!');
            expect(rentCar.calculatePriceOfCar('Mercedes', 10)).to.equal('You choose Mercedes and it will cost $500!');
            expect(rentCar.calculatePriceOfCar('Volkswagen', 10)).to.equal('You choose Volkswagen and it will cost $200!');
        });
    });

    describe('checkBudget', () => {
        it('invalid input throws error', () => {
            expect(() => rentCar.checkBudget(1.2, 3.3, 4.4776655)).to.throw('Invalid');
            expect(() => rentCar.checkBudget(1.2, 3.3, 4.4776655)).to.throw('Invalid');
            expect(() => rentCar.calculatePriceOfCar(22)).to.throw('Invalid');
            expect(() => rentCar.checkBudget(1.2, 3.3, 4.4776655)).to.throw('Invalid');
            expect(() => rentCar.checkBudget(1.2, '3.3', '3')).to.throw('Invalid');
        });

        it('if budget enough rents a car', () => {
            expect(rentCar.checkBudget(1, 5, 50)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(1, 5, 5)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(1, 50, 500)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(1, 500, 5000)).to.equal('You rent a car!');
        });

        it('if budget not enough more money needed', () => {
            expect(rentCar.checkBudget(10, 6, 50)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(100, 1, 50)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(10, 44, 50)).to.equal('You need a bigger budget!');
        });
    });

});
