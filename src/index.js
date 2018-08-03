/**
 *
 * Put all your code inside this function.
 * Do not use any external references.
 *
 */

function bookmarklet() {
  alert('foo');
}

/**
 *
 * Feel free to ignore this section.
 * This is what makes this generator work.
 *
 */

const name = 'Bookmarklet';
const encodedFn = btoa(`(${bookmarklet.toString()})()`);
const href = `javascript:eval(atob('${encodedFn}')`;

const html = [
  'code',
  'encoded',
  'hrefcode',
  'link',
  'runencoded',
  'toggleedit',
].reduce((out, id) => {
  out[id] = document.getElementById(id);

  return out;
}, {});

html.link.textContent = name;
html.link.href = href;
html.toggleedit.addEventListener('click', () => {
  html.link.textContent = prompt('Change the bookmarklet name:', name);
});

html.code.textContent = bookmarklet.toString();
html.hrefcode.textContent = href;
html.encoded.textContent = encodedFn;
html.runencoded.textContent = `atob('${encodedFn}')`;
