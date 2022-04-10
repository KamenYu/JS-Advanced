class CarDealership {
    constructor(name) {
        this.name = name,
            this.availableCars = [],
            this.soldCars = [],
            this.tottalIncome = 0
    }

    addCar(model, horsepower, price, mileage) {

        if (model == '' || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({ model, horsepower, price, mileage });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        if (this.availableCars.some(x => x.model == model) == false) {
            throw new Error(`${model} was not found!`);
        }

        const car = this.availableCars.find(x => x.model == model);
        const mileageDifference = car.mileage - desiredMileage;
        const hp = car.horsepower;

        let price = car.price;
        if (car.mileage <= desiredMileage) {
            price += 0;
        } else if (mileageDifference <= 40000) {
            price -= price * 0.05;
        } else if (mileageDifference > 40000) {
            price -= price * 0.1;
        }

        this.soldCars.push(
            {
                model,
                horsepower: hp,
                price
            });
        let index = this.availableCars.indexOf(car);
        this.availableCars.splice(index, 1);

        this.tottalIncome += price;

        return `${model} was sold for ${price.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        } else {
            let result = [];
            result.push('-Available cars:');

            for (const car of this.availableCars) {
                result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
            }
            return result.join('\n');
        }
    }

    salesReport(criteria) {
        const criteriaArray = ['horsepower', 'model'];
        if (criteriaArray.find(x => x == criteria) == undefined) {
            throw new Error('Invalid criteria!');
        } else if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => (b.horsepower - a.horsepower));
        } else if (criteria == 'model') {
            this.soldCars.sort((a, b) => (a.model.localeCompare(b.model)));
        }

        let result = [];

        result.push(`-${this.name} has a total income of ${this.tottalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        for (const car of this.soldCars) {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.price.toFixed(2)}$`)
        }
        return result.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));



