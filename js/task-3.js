// task 3

const task3 = document.getElementById('task3');
const resizer = task3.querySelector('#resizer');
const minWidth = task3.getBoundingClientRect().width;
const minHeight = task3.getBoundingClientRect().height;

resizer.addEventListener('pointerdown', function (e) {
  e.preventDefault();

  window.addEventListener('pointermove', resize);
  window.addEventListener('pointerup', stopResize);

  function resize(e) {
    const newWidth = e.pageX - task3.getBoundingClientRect().left;
    const newHeight = e.pageY - task3.getBoundingClientRect().top;
    const maxWidth =
      task3.parentElement.getBoundingClientRect().width -
      task3.getBoundingClientRect().left -
      task3.parentElement.getBoundingClientRect().left;

    if (newWidth > minWidth && newWidth < maxWidth) {
      task3.style.width = newWidth + 'px';
    }

    if (newHeight > minHeight) task3.style.height = newHeight + 'px';
  }

  function stopResize() {
    window.removeEventListener('pointermove', resize);
  }
});
