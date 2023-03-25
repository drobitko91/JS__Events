// task 1

document.addEventListener('keydown', switchInput);

function switchInput(e) {
  if ((e.code === 'KeyE' || e.code === 'KeyS') && (e.ctrlKey || e.metaKey)) {
    const currentEl = document.getElementById('textEditor');
    e.preventDefault();

    e.code === 'KeyE' ? changeToTextarea(currentEl) : changeToDiv(currentEl);
  }
}

function changeToTextarea(currentEl) {
  if (currentEl.tagName === 'TEXTAREA') return;

  const textarea = document.createElement('textarea');

  textarea.setAttribute('id', 'textEditor');
  textarea.innerHTML = currentEl.innerHTML.trim();

  currentEl.replaceWith(textarea);
}

function changeToDiv(currentEl) {
  if (currentEl.tagName === 'DIV') return;

  const div = document.createElement('div');

  div.setAttribute('id', 'textEditor');
  div.innerHTML = currentEl.value;

  currentEl.replaceWith(div);
}
