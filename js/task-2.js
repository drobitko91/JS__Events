import data from './data.json';

// task 2

createTable();

let asc = false;

document.querySelectorAll('th').forEach((th) =>
  th.addEventListener('click', () => {
    const tbody = document.getElementById('tbody');

    Array.from(tbody.querySelectorAll('tr'))
      .sort(
        comparer(Array.from(th.parentNode.children).indexOf(th), (asc = !asc))
      )
      .forEach((tr) => tbody.appendChild(tr));
  })
);

function createTable() {
  let tableElement = `<table>
      <thead><tr id="theadRow"></tr></thead>
      <tbody id="tbody"></tbody>
    </table>`;

  const tableContainer = document.getElementById('table');
  tableContainer.insertAdjacentHTML('afterbegin', tableElement);

  const dataKeys = Object.keys(data[0]);
  const theadRow = tableContainer.querySelector('#theadRow');
  const tbody = tableContainer.querySelector('#tbody');

  dataKeys.forEach((key) => {
    let tableHeadCellElement = `<th ${
      key === 'title' ? '' : "class='text-align-center'"
    }>${convertToSentenceCase(key)}</th>`;
    theadRow.insertAdjacentHTML('beforeend', tableHeadCellElement);
  });

  data.forEach((elem) => {
    let tableBodyRow = `<tr>`;

    for (const key of dataKeys) {
      tableBodyRow += `<td ${
        key === 'title' ? '' : "class='text-align-center'"
      }>${elem[key]}</td>`;
    }

    tableBodyRow += `</tr>`;

    tbody.insertAdjacentHTML('beforeend', tableBodyRow);
  });
}

function convertToSentenceCase(str) {
  const result = str.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function getCellValue(tr, idx) {
  return tr.children[idx].innerText || tr.children[idx].textContent;
}

function comparer(idx, asc) {
  return function (a, b) {
    return (function (v1, v2) {
      return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2);
    })(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
  };
}
