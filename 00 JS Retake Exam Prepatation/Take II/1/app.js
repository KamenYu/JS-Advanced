window.addEventListener('load', solve);

function solve() {
    //take all needed fields
    const modelField = document.getElementById('model');
    const priceField = document.querySelector('#price');
    const yearField = document.querySelector('#year');
    const descriptionField = document.querySelector('#description');

    const addbtn = document.querySelector('#add');

    const table = document.querySelector('#furniture-list');
    const totalPriceEl = document.querySelector('.total-price');

    // add
    addbtn.addEventListener('click', addFurniture);

    // more info
    // buy it

    function addFurniture(ev){
        ev.preventDefault();

        const priceValue = Number(priceField.value);
        const yearValue = Number(yearField.value);

        if (modelField.value.trim() == '' 
        || priceValue < 0 
        || yearValue < 1100 
        || yearValue > 2022 
        || descriptionField.value.trim() == '') {
            return;
        }

        const moreInfoBtn = e('button', {}, 'More Info');
        moreInfoBtn.classList.add('moreBtn');
        
        const buyButton = e('button', {}, 'Buy it');
        buyButton.classList.add('buyBtn');
        
        const tableInfoElement = e('tr', {},
        e('td', {}, modelField.value.trim()),
        e('td', {}, priceValue.toFixed(2)),
        e('td', {}, 
        moreInfoBtn,
        buyButton
        ));
        tableInfoElement.classList.add('info');
        
        const descriptionElement = e('td', {}, `Description: ${descriptionField.value.trim()}`);
        descriptionElement.setAttribute('colspan', '3');
        
        const tableHideElement = e('tr', {},
        e('td', {}, `Year: ${yearValue}`),
        descriptionElement
        );
        
        tableHideElement.classList.add('hide');
        
        table.appendChild(tableInfoElement);
        table.appendChild(tableHideElement);
        
        document.querySelector('form').reset();

        moreInfoBtn.addEventListener('click', moreInfo.bind(null, tableHideElement, moreInfoBtn));
        
        buyButton.addEventListener('click', buy.bind(null, tableInfoElement, tableHideElement));
    }

    function buy(infoElement, hideElement){
        const currentPrice = Number(document.getElementsByTagName('td')[1].textContent);
        const totaPrice = Number(totalPriceEl.textContent);

        const sum = currentPrice + totaPrice;
        totalPriceEl.textContent = sum.toFixed(2);

        infoElement.remove();
        hideElement.remove();
    }

    function moreInfo(hidden, button){
        button.textContent = button.textContent == 'More Info' ? 'Less Info' : 'More Info';
        hidden.style.display = button.textContent == 'More Info' ? 'none' : 'contents';
    }

    function e(type, attr, ...content){
        const element = document.createElement(type);

        for(let prop in attr){
            element[prop] = attr[prop];
        }

        for(let item of content){
            if(typeof item == 'string' || typeof item == 'number'){
                item = document.createTextNode(item);
            }

            element.appendChild(item);
        }

        return element;
    }
}
