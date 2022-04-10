window.addEventListener('load', solve);

function solve() {
    const productTypeField = document.querySelector('#type-product');

    const descriptionField = document.querySelector('#description');

    const nameField = document.querySelector('#client-name');

    const phoneField = document.querySelector('#client-phone');

    const sendButton = document.querySelector('#right form button');

    const form = document.querySelector('#right form');

    const receivedSection = document.querySelector('#received-orders');

    const completedOrdersSection = document.querySelector('#completed-orders');

    const clearButton = document.querySelector('#completed-orders .clear-btn');

    clearButton.addEventListener('click', () => {
        const divs = document.querySelectorAll('#completed-orders .container');
        Array.from(divs).forEach(e => e.remove());
    });

    sendButton.addEventListener('click', (ev) => {
        ev.preventDefault();

        const type = productTypeField.value;
        const description = descriptionField.value.trim();
        const name = nameField.value.trim();
        const phone = phoneField.value.trim();

        if (description == '' || name == '' || phone == '') {
            return;
        }

        const containerDiv = document.createElement('div');
        containerDiv.setAttribute('class', 'container');

        const h2type = document.createElement('h2');
        h2type.textContent = `Product type for repair: ${type}`;

        const h3type = document.createElement('h3');
        h3type.textContent = `Client information: ${name}, ${phone}`;

        const h4type = document.createElement('h4');
        h4type.textContent = `Description of the problem: ${description}`;

        const startButton = document.createElement('button');
        startButton.setAttribute('class', 'start-btn');
        startButton.textContent = 'Start repair';


        const finishButton = document.createElement('button');
        finishButton.setAttribute('class', 'finish-btn');
        finishButton.textContent = 'Finish repair';
        finishButton.disabled = true;

        containerDiv.appendChild(h2type);
        containerDiv.appendChild(h3type);
        containerDiv.appendChild(h4type);
        containerDiv.appendChild(startButton);
        containerDiv.appendChild(finishButton);

        receivedSection.appendChild(containerDiv);
        form.reset();

        startButton.addEventListener('click', () => {
            startButton.disabled = true;
            finishButton.disabled = false;
        });

        finishButton.addEventListener('click', finishRepair.bind(null, containerDiv));
    });

    function finishRepair(div) {
        div.querySelector('button').remove();
        div.querySelector('button').remove();
        const finishDiv = div;
        div.remove();
        completedOrdersSection.appendChild(finishDiv);
    }
}