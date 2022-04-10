const cinema = require('./cinema');
const { expect } = require('chai');
// no validation for the input
describe ('Cinema', () => {
    describe ('Show Movies', () => {
        it('Should return an error message when and empty array is given', () => {
            expect(cinema.showMovies([])).to.include('currently no movies');            
        });

        it('Should return all movieNames splitted with comma and a space', () => {
            const array = ['King', 'Lipa'];
            const array2 = [',', ','];
            expect(cinema.showMovies(array)).to.equal('King, Lipa');
            expect(cinema.showMovies(array2)).to.equal(',, ,');
        });
    });

    describe ('ticketPrice', () => {
        it('should throw an error if the schedule type is missing', () => {
            expect(() => cinema.ticketPrice('tumpa')).to.throw();
            expect(() => cinema.ticketPrice('Premierre')).to.throw();
            expect(() => cinema.ticketPrice('normal')).to.throw();
            expect(() => cinema.ticketPrice('disukont')).to.throw();

            expect(() => cinema.ticketPrice([])).to.throw();
            expect(() => cinema.ticketPrice(undefined)).to.throw();
            expect(() => cinema.ticketPrice(null)).to.throw();
            
        });

        it('should return correct number when a correct schedule type is given', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
            
        });
    });

    describe ('swapSeatsInHall', () => {
        it('Should succeed when numbers are correct', () => {
            expect(cinema.swapSeatsInHall(1,18)).to.include('Successful change of');
            expect(cinema.swapSeatsInHall(4,10)).to.include('Successful change of');
            expect(cinema.swapSeatsInHall(19,18)).to.include('Successful change of');
            expect(cinema.swapSeatsInHall(20, 2)).to.include('Successful change of');
            
        });

        it('Should not succeed when numbers are NOT correct', () => {
            expect(cinema.swapSeatsInHall(1,1)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(1.5,1)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(1,1.5)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(-1,1)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(1,-1)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(111,1)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(1,1111)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(-1,1111)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(0,5)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(9,0)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(-2,0)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(99,0)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(-1.6)).to.include('Unsuccessful change of');
            expect(cinema.swapSeatsInHall(15)).to.include('Unsuccessful change of');
        });
    });    
});
