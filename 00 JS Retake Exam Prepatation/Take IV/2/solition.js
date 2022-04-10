class ArtGallery{
    constructor(creator){
        this.creator = creator,
        this.possibleArticles = { 
            picture:200,
            photo:50,
            item:250 
        },
        this.listOfArticles = [],
        this.guests = []
    }

    addArticle( articleModel, articleName, quantity ){ // Number(quantity)

        if (this.possibleArticles[articleModel.toLowerCase()] == undefined){
            throw new Error('This article model is not included in this gallery!');
        }

        if(this.listOfArticles.some(x => x.articleName == articleName && x.articleModel.toLowerCase() == articleModel.toLowerCase())){
            const article =
             this.listOfArticles
             .find(x => x.articleName == articleName && x.articleModel.toLowerCase() == articleModel.toLowerCase());
                article.quantity += Number(quantity);
            
        } else {

            this.listOfArticles.push({articleModel, articleName, quantity});
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest ( guestName, personality) {
        if (this.guests.some(x => x.guestName == guestName)){
            throw new Error (`${guestName} has already been invited.`);
        }

        let points = 0;
        if (personality == 'Vip'){
            points = 500;
        } else if (personality == 'Middle'){
            points = 250;
        } else {
            points = 50;
        }

        this.guests.push({guestName, points, purchaseArticle: 0});

     return `You have successfully invited ${guestName}!`

    }

    buyArticle ( articleModel, articleName, guestName) {
        const model = articleModel.toLowerCase();
        let article = this.listOfArticles.find(x => x.articleName == articleName && x.articleModel.toLowerCase() == model);
        let guest = this.guests.find(x => x.guestName == guestName);

        if (article == undefined){
            throw new Error("This article is not found.");
        }

        if (article.quantity == 0){
            return `The ${articleName} is not available.`;
        }

        if (guest == undefined){
            return 'This guest is not invited.';
        }

        let atriclePoints = this.possibleArticles[model];
        if (guest.points < atriclePoints){
            return "You need to more points to purchase the article." // have
        }

        guest.points -= atriclePoints;
        article.quantity --;
        guest.purchaseArticle ++;

        return `${guestName} successfully purchased the article worth ${atriclePoints} points.`

    }

    showGalleryInfo (criteria) {
        let result = [];
        if(criteria == 'article'){
            result.push('Articles information:');

            this.listOfArticles.forEach(el => {
                result.push(`${el.articleModel} - ${el.articleName} - ${el.quantity}`)
            });

        } else if (criteria == 'guest'){
            result.push('Guests information:');

            this.guests.forEach(el => {
                result.push(`${el.guestName} - ${el.purchaseArticle}`)
            });
        }

        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));