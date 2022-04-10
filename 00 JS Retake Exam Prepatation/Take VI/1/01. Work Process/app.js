function solve() {
    let inputFields = Array.from(document.querySelectorAll('form input'));

    const hireButton = document.querySelector('#add-worker');
    const tBody = document.querySelector('#tbody');
    hireButton.addEventListener('click', hire);
    let budget = document.querySelector('#sum');

    function hire(ev) {
        ev.preventDefault();

        if (inputFields.some(x => x.value == '')) {
            return;
        }

        let tr = document.createElement('tr');
        tBody.appendChild(tr);

        for (const el of inputFields) {
            let td = document.createElement('td');
            td.textContent = el.value;
            tr.appendChild(td);
        }

        const firedButton = document.createElement('button');
        firedButton.setAttribute('class', 'fired');
        firedButton.textContent = 'Fired';

        const editButton = document.createElement('button');
        editButton.setAttribute('class', 'edit');
        editButton.textContent = 'Edit';

        let finalTd = document.createElement('td');
        finalTd.appendChild(firedButton);
        finalTd.appendChild(editButton);

        tr.appendChild(finalTd);
        let sum = Number(inputFields.find(x => x.id == 'salary').value) + Number(budget.textContent);
        budget.textContent = sum.toFixed(2);

        inputFields.forEach(el => el.value = '');

        firedButton.addEventListener('click', fire.bind(null, tr))
        editButton.addEventListener('click', edit.bind(null, tr));
    }

    function fire(tr) {
        let array = Array.from(tr.querySelectorAll('td'));
        let salary = Number(array[5].textContent);
        let diff = Number(budget.textContent) - salary;
        budget.textContent = diff.toFixed(2);
        tr.remove();
    }

    function edit(tr) {
        let array = Array.from(tr.querySelectorAll('td'));
        let salary = Number(array[5].textContent);
        let diff = Number(budget.textContent) - salary;
        budget.textContent = diff.toFixed(2);

        for (let i = 0; i < array.length - 1; i++) {
            inputFields[i].value = array[i].textContent
        }

        tr.remove();
    }
}
solve()