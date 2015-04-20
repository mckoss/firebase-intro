window.addEventListener('load', initDemo);

var messageHistory;

var nicknameInput;
var messageInput;

var nickName;

function initDemo() {
  bindButton('change-nickname', onChangeNickname);
  bindButton('send-message', onSendMessage);
  messageHistory = document.getElementById('message-history');

  nicknameInput = document.getElementById('nickname');
  messageInput = document.getElementById('message');

  nicknameInput.focus();

  displayMessage("Mike", "This is a sample (dynamic) message.");
}

function onChangeNickname() {
  nickName = nicknameInput.value;
  messageInput.focus();
}

function onSendMessage() {
  if (!nickName) {
    alert("Missing nickname.");
    return;
  }
  var message = messageInput.value;
  messageInput.value = "";
  messageInput.focus();

  console.log("Send message: " + message);
}

function displayMessage(name, message) {
  var messageDiv = document.createElement('div');
  messageDiv.className = 'message';

  var nameSpan = document.createElement('span');
  nameSpan.className = 'name';
  nameSpan.textContent = name + ": ";
  messageDiv.appendChild(nameSpan);

  var messageSpan = document.createElement('span');
  messageSpan.className = 'span';
  messageSpan.textContent = message;
  messageDiv.appendChild(messageSpan);

  messageHistory.insertBefore(messageDiv, messageHistory.firstChild);
}

// Generic Utilities

function bindButton(id, fn) {
  document.getElementById(id).addEventListener('click', fn);
}
