// Assumes Config.js has already been loaded.

window.addEventListener('load', initDeck);

function initDeck() {
  customizeName();
  installCounter();
}

function customizeName() {
  forEachSelector('#presenter-name', function (span) {
    span.textContent = Config.presenter;
  });
  forEachSelector('#presenter-twitter', function(span) {
    span.textContent = Config.twitter;
  });
  forEachSelector('#presenter-twitter-url', function(link) {
    link.href = "http://twitter.com/" + Config.twitter;
  });
}

function forEachSelector(selector, fn) {
  var elts = document.querySelectorAll(selector);
  for (var i = 0; i < elts.length; i++) {
    fn(elts[i]);
  }
}

function installCounter() {
  var devsRef = new Firebase("https://firebase-website.firebaseio.com/stats/signups");
  var counterSpan = document.getElementById('current-devs');
  devsRef.on("value", function (snap) {
    // Use thousand separator in counter.
    counterSpan.textContent = snap.val().toLocaleString();
  });
}
