class Restaurant{
   constructor(budgetMoney){
    this.budgetMoney = Number(budgetMoney), // check
    this.menu = {},
    this.stockProducts = {},
    this.history = []
   }

   loadProducts(products) {

        for (const el of products) {
            const name = el.split(' ')[0];
            const quantityString = el.split(' ')[1];
            const totalPriceString = el.split(' ')[2];

            const quantity = Number(quantityString);
            const totalPrice = Number(totalPriceString);

            if (this.budgetMoney >= totalPrice) {
                
                if (this.stockProducts[name] == undefined) {
                    this.stockProducts[name] = 0;
                }   
                
                this.budgetMoney -= totalPrice;
                this.stockProducts[name] += quantity;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } 

            this.history.push(`There was not enough money to load ${quantity} ${name}`);
        }

        return this.history.join('\n');
   }

   addToMenu(meal, neededProducts, price){ // CHECK
        if (this.menu[meal] == undefined) {
            this.menu[meal] = {
                products: {},
                price
            };

            for (const el of neededProducts) {
                let name = el.split(' ')[0];
                let quantity = Number(el.split(' ')[1]);
                this.menu[meal].products[name] = quantity;
            }

            const mealCount = Object.keys(this.menu).length;
            if (Object.keys(this.menu).length == 1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${mealCount} meals in the menu, other ideas?`;
            }
        }

       return`The ${meal} is already in the our menu, try something different.`;
        
   }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0){
            return 'Our menu is not ready yet, please come later...';
        }

        let result = [];
        for (const meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal].price}`)
        }

        return result.join('\n');
    }

    makeTheOrder(meal){
        if (this.menu[meal] == undefined){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        for (const product in this.menu[meal].products) {
            let prodQuan = this.menu[meal].products[product];      

            if (this.stockProducts[product] >= prodQuan){
                continue;
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        this.budgetMoney += this.menu[meal].price;

        for (const product in this.menu[meal].products) {
            let prodQuan = this.menu[meal].products[product];      

            this.stockProducts[product] -= prodQuan;            
        }

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}



let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));