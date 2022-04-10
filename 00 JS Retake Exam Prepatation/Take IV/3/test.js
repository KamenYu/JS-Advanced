let { library } = require("./library.js");
let { expect } = require("chai");

describe('Library', () => {

    describe('calcPriceOfBook', () => {
        it('error when invalid input', () => {
            expect(() => library.calcPriceOfBook('Book', 'number')).to.throw('Invalid');
            expect(() => library.calcPriceOfBook('Book')).to.throw('Invalid');
            expect(() => library.calcPriceOfBook(3)).to.throw('Invalid');
            expect(() => library.calcPriceOfBook([], 'number')).to.throw('Invalid');
            expect(() => library.calcPriceOfBook('Book', 4.5)).to.throw('Invalid');
            expect(() => library.calcPriceOfBook('Book', undefined)).to.throw('Invalid');
            expect(() => library.calcPriceOfBook('Book', '2')).to.throw('Invalid');
            expect(() => library.calcPriceOfBook(2, 4)).to.throw('Invalid');
        });

        it('if year is <= 1980 price is calculated correctly', () => {
            expect(library.calcPriceOfBook('Book', 1960)).to.equal('Price of Book is 10.00');
            expect(library.calcPriceOfBook('Book', 1980)).to.equal('Price of Book is 10.00');
        });

        it('if year is above 1980 price is 20.00', () => {
            expect(library.calcPriceOfBook('Book', 1990)).to.equal('Price of Book is 20.00');
            expect(library.calcPriceOfBook('Book', 2020)).to.equal('Price of Book is 20.00');
            expect(library.calcPriceOfBook('Book', 1981)).to.equal('Price of Book is 20.00');
        });
    
    });

    describe('findBook', () => {
        let arr = ['Book', 'Page', 'Title'];
        let emty = [];

        it('array is emty throws error', () => {
            expect(() => library.findBook([], 'Page')).to.throw('No books');
            expect(() => library.findBook(emty, 'Page')).to.throw('No books');
        });
    
        it('book is in the array', () => {
            expect(library.findBook(arr, 'Book')).to.equal('We found the book you want.');
            expect(library.findBook(arr, 'Page')).to.equal('We found the book you want.');
            expect(library.findBook(arr, 'Title')).to.equal('We found the book you want.');
        });

        it('no such book in array', () => {
            expect(library.findBook(arr, 'Title1')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(arr, 'Books')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(arr, 'page')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arragneTheBooks', () => {
        it('invalid input throws an error', () => {
            expect(() => library.arrangeTheBooks(5.2)).to.throw('Invalid');
            expect(() => library.arrangeTheBooks(-9)).to.throw('Invalid');
            expect(() => library.arrangeTheBooks(undefined)).to.throw('Invalid');
            expect(() => library.arrangeTheBooks('2')).to.throw('Invalid');
        });

        it('if available space is enough', () => {
            expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(5)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('available space is less', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(101)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    
    });
});