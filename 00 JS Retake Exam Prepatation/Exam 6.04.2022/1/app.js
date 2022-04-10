window.addEventListener("load", solve);

function solve() {
  const titleField = document.querySelector('#post-title');
  const categoryField = document.querySelector('#post-category');
  const contentField = document.querySelector('#post-content');
  const form = document.querySelector('.newPostContent');

  const publishButton = document.querySelector('#publish-btn');

  const reviewList = document.querySelector('#review-list');
  const publishedList = document.querySelector('#published-list');
  const clearButton = document.querySelector('#clear-btn');

  publishButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    const title = titleField.value.trim();
    const category = categoryField.value.trim();
    const content = contentField.value.trim();

    if (title == '' || category == '' || content == '') {
      return;
    }

    const liElement = document.createElement('li');
    liElement.setAttribute('class', 'rpost');

    const article = document.createElement('article');

    const h4Element = document.createElement('h4');
    h4Element.textContent = title;
    const categoryElement = document.createElement('p');
    categoryElement.textContent = `Category: ${category}`;
    const contentElement = document.createElement('p');
    contentElement.textContent = `Content: ${content}`;

    article.appendChild(h4Element);
    article.appendChild(categoryElement);
    article.appendChild(contentElement);

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'action-btn edit');
    editButton.textContent = 'Edit';
    const approveButton = document.createElement('button');
    approveButton.setAttribute('class', 'action-btn approve');
    approveButton.textContent = 'Approve';

    liElement.appendChild(article);
    liElement.appendChild(editButton);
    liElement.appendChild(approveButton);
    reviewList.appendChild(liElement);

    form.reset();

    editButton.addEventListener('click', () => {
      liElement.remove();
      titleField.value = title;
      categoryField.value = category;
      contentField.value = content;

    });

    approveButton.addEventListener('click', () => {
      liElement.querySelector('button').remove();
      liElement.querySelector('button').remove();
      const approvedElement = liElement;
      liElement.remove();
      publishedList.appendChild(approvedElement);
    });
  });

  clearButton.addEventListener('click', () => {
    Array.from(publishedList.children).forEach(el => el.remove());
  });
}
