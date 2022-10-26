/* table1 */
const target = document.getElementById('target');
const span   = document.createElement('div');
const txt    = escapeHTML`
    <div>
      <span class="card has-background-warning">aaaa</span>
    </div>`;
span.innerHTML = txt;
span.setAttribute('class', 'attn');
target.appendChild(span);


/* table2 */
const theader = document.querySelectorAll('.table2 th')
console.log(theader);

theader.forEach(th =>{
    console.log(th);
    const span2 = document.createElement('span');
    span2.setAttribute('class', 'att');
    const text = `<br><small class="has-background-danger">bbb</small>`;
    span2.innerHTML = text;
    th.appendChild(span2);
}
);


// eslint-disable-next-line require-jsdoc
function escapeHTML(strings, ...values) {
    return strings.reduce((result, str, i) => {
      const value = values[i - 1];
      if (typeof value === 'string') {
        return result + escapeSpecialChars(value) + str;
      } else {
        return result + String(value) + str;
      }
    });
  }