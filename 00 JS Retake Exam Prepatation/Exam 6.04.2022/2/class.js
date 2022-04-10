class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable,
            this.plants = [],
            this.storage = []
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        const plant = this.plants.find(p => p.plantName == plantName);

        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        plant.ripe = true;
        plant.quantity = quantity;

        const plantNameQuantity = quantity == 1 ? plantName : `${plantName}s`;
        const have = quantity == 1 ? 'has' : 'have';

        return `${quantity} ${plantNameQuantity} ${have} successfully ripened.`;
    }

    harvestPlant(plantName) {
        const plant = this.plants.find(p => p.plantName == plantName);

        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        const index = this.plants.indexOf(plant);
        this.plants.splice(index, 1);
        this.storage.push({
            plantName,
            quantity: plant.quantity
        });

        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = [];
        result.push(`The garden has ${this.spaceAvailable} free space left.`);
        let plantsLine = [];
        let storageLine = [];

        for (const p of this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))) {
            plantsLine.push(p.plantName);
        }
        result.push(`Plants in the garden: ${plantsLine.join(', ')}`);
        if (this.storage.length == 0) {
            result.push('Plants in storage: The storage is empty.');
        } else {
            for (const p of this.storage) {
                storageLine.push(`${p.plantName} (${p.quantity})`);
            }

            result.push(`Plants in storage: ${storageLine.join(', ')}`)
        }

        return result.join('\n');
    }
}