window.addEventListener('load', initDemo);

function initDemo() {
  bindButton('change-nickname', onChangeNickname);
  bindButton('send-message', onSendMessage);
}

function onChangeNickname() {
  var name = getValue('nickname');
  console.log("Change nickname to " + name);
}

function onSendMessage() {
  var message = getValue('message');
  console.log("Send message: " + message);
}

function bindButton(id, fn) {
  document.getElementById(id).addEventListener('click', fn);
}

function getValue(id) {
  return document.getElementById(id).value;
}
