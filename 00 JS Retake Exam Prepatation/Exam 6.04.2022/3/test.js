const { bookSelection } = require('./bookSelection.js');
const { expect } = require('chai');

describe('bookSelection', () => {
    describe('isGenreSuitable', () => {
        it('not suitable', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 5)).to.equal('Books with Horror genre are not suitable for kids at 5 age');
        });

        it('suitable', () => {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 23)).to.equal('Those books are suitable');

        });
    });

    describe('isItAffordable', () => {

        it('invalid input throws error', () => {
            expect(() => bookSelection.isItAffordable('2', 2)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(2, '1')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable('2', false)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(2)).to.throw('Invalid input');

        });

        it('valid input', () => {
            expect(bookSelection.isItAffordable(20, 5)).to.equal('You don\'t have enough money');
            expect(bookSelection.isItAffordable(20, 20)).to.equal('Book bought. You have 0$ left');
            expect(bookSelection.isItAffordable(20, 25)).to.equal('Book bought. You have 5$ left');
        });
    });

    describe('suitableTitles', () => {

        it('invalid input', () => {
            expect(() => bookSelection.suitableTitles({}, 'string')).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles([], 2)).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles({}, 2.3)).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles('string')).to.throw('Invalid input');

        });

        it('valid input', () => {
            expect(bookSelection.suitableTitles([
                { title: 'a', genre: 'b' },
                { title: 'aa', genre: 'c' },
                { title: 'bb', genre: 'b' }],
                'b')).to.deep.equal(['a', 'bb']);
            expect(bookSelection.suitableTitles([
                { title: 'a', genre: 'b' },
                { title: 'aa', genre: 'c' },
                { title: 'bb', genre: 'b' }],
                'd')).to.deep.equal([]);
        });
    });
});