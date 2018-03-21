import qzxUrl from './resource/qzx.jpeg';
console.log('i`m a vendors.js');
function $(id) {
  return document.getElementById(id);
}
export function clickHandle() {
  document.getElementById('btn').onclick = (e) => {
    const _img = document.createElement('IMG');
    _img.setAttribute('src', qzxUrl);
    $('app').appendChild(_img);
  }
}

