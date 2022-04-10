const { companyAdministration } = require('./companyAdministration.js');
const { expect } = require('chai');

describe('companyAdministration', () => {
    describe('hiringEmployee', () => {
        it('if position is NOT a programmer throws error', () => {
            expect(() => companyAdministration.hiringEmployee('A', 'Programer', 5)).to.throw('not looking for');
            expect(() => companyAdministration.hiringEmployee('A', 'Florist', 5)).to.throw('not looking for');
        });

        it('depending on experience returns correct message', () => {
            expect(companyAdministration.hiringEmployee('A', 'Programmer', 3)).to.equal('A was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('A', 'Programmer', 5)).to.equal('A was successfully hired for the position Programmer.');

            expect(companyAdministration.hiringEmployee('A', 'Programmer', 1)).to.equal('A is not approved for this position.');
        });
    });

    describe('calculateSalary', () => {

        it('invalid parameter throws error', () => {
            expect(() => companyAdministration.calculateSalary('2')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(-3)).to.throw('Invalid hours');
        });

        it('valid parameter returns total amount', () => {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });
    });

    describe('firedEmployee', () => {

        it('invalid parameters throw error', () => {
            expect(() => companyAdministration.firedEmployee({}, 3)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee({}, 3.5)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['a'], '3')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee({}, undefined)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee({})).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', '2'], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', '2'], 2)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', '2'], 4)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', '2'], 1.2)).to.throw('Invalid input');
        });

        it('returns correct string when params are valid', () => {
            expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 0)).to.equal('b, c');
            expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 1)).to.equal('a, c');
            expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 2)).to.equal('a, b');
        });
    });
});