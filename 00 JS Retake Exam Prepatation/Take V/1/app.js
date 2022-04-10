function solve() {
    let nameField = document.querySelector('#recipientName');
    let titleField = document.querySelector('#title');
    let messageField = document.querySelector('#message');

    const addToListButton = document.querySelector('#add');
    const resettButton = document.querySelector('#reset');
    const addedMailsUl = document.querySelector('#list');
    const sentMailsUl = document.querySelector('.sent-list');
    const deletedMailsUl = document.querySelector('.delete-list');

    addToListButton.addEventListener('click', add);

    function add(ev) {
        ev.preventDefault();

        const name = nameField.value.trim();
        const title = titleField.value.trim();
        const message = messageField.value.trim();

        if (name == '' || title == '' || message == '') {
            return;
        }

        const listActionDiv = document.createElement('div');
        listActionDiv.setAttribute('id', 'list-action');

        const sendButton = document.createElement('button');
        sendButton.setAttribute('type', 'submit');
        sendButton.setAttribute('id', 'send');
        sendButton.textContent = 'Send';

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'submit');
        deleteButton.setAttribute('id', 'delete');
        deleteButton.textContent = 'Delete';

        listActionDiv.appendChild(sendButton);
        listActionDiv.appendChild(deleteButton);

        const element = e('li', {},
            e('h4', {}, `Title: ${title}`),
            e('h4', {}, `Recipient Name: ${name}`),
            e('span', {}, message),
            listActionDiv
        );

        sendButton.addEventListener('click', () => {
            const buttonDiv = document.createElement('div');
            buttonDiv.setAttribute('class', 'btn');

            const deleteSentMailButton = document.createElement('button');
            deleteSentMailButton.setAttribute('type', 'submit');
            deleteSentMailButton.setAttribute('class', 'delete');
            deleteSentMailButton.textContent = 'Delete';
            buttonDiv.appendChild(deleteSentMailButton, name, title);

            const sentMailElement = e('li', {},
                e('span', {}, `To: ${name}`),
                e('span', {}, `Title: ${title}`),
                buttonDiv
            );

            sentMailsUl.appendChild(sentMailElement);
            element.remove();
            deleteSentMailButton.addEventListener('click', deleteSentMail.bind(null, sentMailElement, name, title));
        });

        deleteButton.addEventListener('click', deleteMail.bind(null, element, name, title));

        addedMailsUl.appendChild(element);
        nameField.value = '';
        messageField.value = '';
        titleField.value = '';

    }

    function deleteMail(element, name, title) {
        deleteElement(element, name, title);
    }

    function deleteSentMail(sentMailElement, name, title) {
        deleteElement(sentMailElement, name, title);
    }

    function deleteElement(element, name, title) {
        const deletedElement = e('li', {},
            e('span', {}, `To: ${name}`),
            e('span', {}, `Title: ${title}`)
        );
        deletedMailsUl.appendChild(deletedElement);
        element.remove();
    }

    resettButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        nameField.value = '';
        messageField.value = '';
        titleField.value = '';
    });

    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }

            element.appendChild(item);
        }

        return element;
    }
}
solve()