class VegetableStore {
    constructor(owner, location) {
        this.owner = owner,
            this.location = location,
            this.availableProducts = []
    }

    loadingVegetables(vegetables) {
        let types = [];
        for (const line of vegetables) {
            let [type, q, p] = line.split(' ');
            let quantity = Number(q);
            let price = Number(p);

            const product = this.availableProducts.find(x => x.type == type);

            types.push(type);
            if (product == undefined) {
                this.availableProducts.push({ type, quantity, price });
                continue;
            }

            product.quantity += quantity;

            if (price > product.price) {
                product.price = price;
            }
        }

        return `Successfully added ${types.filter(function (x, i, a) {
            return a.indexOf(x) === i;
        }).join(', ')}`;

    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        let currentPrice = 0;
        for (const line of selectedProducts) {
            let [type, q] = line.split(' ');
            let quantity = Number(q);

            let product = this.availableProducts.find(t => t.type == type);

            if (product == undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            if (quantity > product.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            currentPrice = quantity * product.price;
            totalPrice += currentPrice;
            product.quantity -= quantity;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        const product = this.availableProducts.find(t => t.type == type);

        if (product == undefined) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity > product.quantity) {
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        product.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let result = [];

        result.push('Available vegetables:');
        for (const veg of this.availableProducts.sort((a, b) => a.price - b.price)) {
            result.push(`${veg.type}-${veg.quantity}-$${veg.price}`);
        }
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
