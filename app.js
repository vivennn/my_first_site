const list = document.querySelector('#list');
const btn = document.querySelector('#add');

btn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `作品 ${list.children.length + 1} ✅`;
    list.appendChild(li);
});

