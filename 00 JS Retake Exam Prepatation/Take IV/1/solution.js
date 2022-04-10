window.addEventListener('load', solution);

function solution() {
  const fullNameField = document.querySelector('#fname');
  const emailField = document.querySelector('#email');
  const phoneField = document.querySelector('#phone');
  const addressField = document.querySelector('#address');
  const postalCodeField = document.querySelector('#code');

  const submitBtn = document.querySelector('#submitBTN');
  const infoPreviewUl = document.querySelector('#infoPreview');

  const editBtn = document.querySelector('#editBTN');
  const continueBtn = document.querySelector('#continueBTN');

  const blockDiv = document.querySelector('#block');

  submitBtn.addEventListener('click', submit);

  continueBtn.addEventListener('click', () => {
    const h3 = e('h3', {}, 'Thank you for your reservation!');

    Array.from(blockDiv.childNodes).forEach(e => e.remove());

    blockDiv.appendChild(h3);
  });
  

  function edit(name, email, phone, addr, pc){
    fullNameField.value = name;
    emailField.value = email;
    phoneField.value = phone;
    addressField.value = addr;
    postalCodeField.value = pc;

    Array.from(document.querySelectorAll('#infoPreview li')).forEach(e => e.remove());

    editBtn.setAttribute('disabled', '');
    continueBtn.setAttribute('disabled', '');
    submitBtn.removeAttribute('disabled');
  }

  function submit(){  
    const fullName = fullNameField.value.trim();
    const email = emailField.value.trim();
    const phone = phoneField.value.trim();
    const address = addressField.value.trim();
    const postalCode = postalCodeField.value.trim();

    if (fullName && email !== ''){
      const fullNameLi = e('li', {}, `Full Name: ${fullName}`);
      const emailLi = e('li', {}, `Email: ${email}`);
      const PhoneLi = e('li', {}, `Phone Number: ${phone}`);
      const adddressLi = e('li', {}, `Address: ${address}`);
      const pcLi = e('li', {}, `Postal Code: ${postalCode}`);

      infoPreviewUl.appendChild(fullNameLi);
      infoPreviewUl.appendChild(emailLi);
      infoPreviewUl.appendChild(PhoneLi);
      infoPreviewUl.appendChild(adddressLi);
      infoPreviewUl.appendChild(pcLi);

      Array.from(document.querySelectorAll('#form input')).forEach(e => e.value = '');

      submitBtn.setAttribute('disabled', '');

      editBtn.removeAttribute('disabled');
      editBtn.addEventListener('click', edit.bind(null, fullName, email, phone, address, postalCode));

      continueBtn.removeAttribute('disabled');
    }  
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
