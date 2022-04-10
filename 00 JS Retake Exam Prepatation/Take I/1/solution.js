function solve() {
    const fields = Array.from(document.querySelectorAll('#container input'));
    const addButton = document.querySelector('#container button');
    const adoptionEl = document.querySelector('#adoption ul');
    const adoptedEl = document.querySelector('#adopted ul');

    addButton.addEventListener('click', addPet);

    function addPet(ev){
        ev.preventDefault();

        const [name, age, kind, owner] = fields.map(f => f.value.trim());

        if(fields.map(f => f.value.trim()).some(v => v == '') || Number.isNaN(Number(age))){
            return;
        }

        const contactButton = e('button', {}, 'Contact with owner');
        
        const pet = e('li', {},
            e('p', {}, 
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind)
            ),
            e('span', {}, `Owner: ${owner}`),
            contactButton 
        );

        contactButton.addEventListener('click', addOwner);

        adoptionEl.appendChild(pet);
        document.querySelector('form').reset();

        function addOwner(){
            contactButton.remove();
            const confirmInput = e('input', {placeholder:'Enter your names'});
            const confirmButton = e('button', {}, 'Yes! I take it!');

            const div = e('div', {},
                confirmInput,
                confirmButton
            );
    
            confirmButton.addEventListener('click', adopt.bind(null, confirmInput, pet));
            pet.appendChild(div);
        }

    };

    function adopt(input, pet){
        const owner = input.value.trim();
        if (owner == ''){
            return;
        }

        pet.querySelector('div').remove();

        const checkButton = e('button', {}, 'Checked');

        pet.querySelector('span').textContent = `New Owner: ${owner}`;
        pet.appendChild(checkButton);

        adoptedEl.appendChild(pet);

        checkButton.addEventListener('click', () => {
            pet.remove();
        });
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

