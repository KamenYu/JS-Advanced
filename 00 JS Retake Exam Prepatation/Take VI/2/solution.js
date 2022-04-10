class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let book = this.books.find(x => x.bookName == bookName);

        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let book = this.books.find(x => x.bookName == bookName);

        if (book == undefined) {
            throw new Error('The book, you\'re looking for, is not found.');
        }

        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let index = this.books.indexOf(book);
        this.books.splice(index, 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let result = [];
        if (bookAuthor == undefined) {
            let emptySlots = this.capacity - (this.books.length);
            result.push(`The book collection has ${emptySlots} empty spots left.`);
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            for (const book of this.books) {
                let paid = book.payed ? 'Has' : 'Not';
                result.push(`${book.bookName} == ${book.bookAuthor} - ${paid} Paid.`)
            }
        } else {
            let book = this.books.find(x => x.bookAuthor == bookAuthor);
            if (book == undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            let paid = book.payed ? 'Has' : 'Not';
            result.push(`${book.bookName} == ${book.bookAuthor} - ${paid} Paid.`);
        }

        return result.join('\n');
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());