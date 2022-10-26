const result = document.getElementById('result');
console.log(result);

// eslint-disable-next-line require-jsdoc
async function main() {
  try {
    while (result.firstChild) result.removeChild(result.firstChild);
      const userId = getUserId();
      const userInfo = await fetchUserInfo(userId);
    for (let i =0; i < 10; i++) {
      createView(userInfo.items[i]);
    }
  } catch (error) {
    console.error(`eエラーが発生しました(${error})`);
  }
}

// eslint-disable-next-line require-jsdoc
function fetchUserInfo(userId) {
  return fetch(
    `https://api.github.com/search/repositories?q=${userId}+in:name&sort=stars&order=desc`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    } else {
      return response.json();
    }
  })
  .catch((error) => {
    throw new Error('ネットワークエラー');
  });
}

// eslint-disable-next-line require-jsdoc
function getUserId() {
  const value = document.getElementById('userId').value;
  console.log(value)
  return encodeURIComponent(value);
}

// eslint-disable-next-line require-jsdoc
function createView(userInfo) {
  const node = document.createElement('div');
  node.setAttribute('class', 'column');
  const txt = escapeHTML`
  <div class="card has-background-light">
    <h4>${userInfo.full_name}</h4>
    <img src="${userInfo.owner.avatar_url}" alt="${userInfo.owner.login}" width="100" />
    <dl>
      <dt>☆${userInfo.stargazers_count}</dt>
      <dt>URL <a href="${userInfo.html_url}">${userInfo.html_url}</a></dt>
      <dt>${userInfo.description}</dt>
    </dl>
  </div>
  `;
  node.innerHTML = txt;
  result.appendChild(node);
}

// eslint-disable-next-line require-jsdoc
function escapeSpecialChars(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

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