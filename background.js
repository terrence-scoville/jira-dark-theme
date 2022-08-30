function scrambleList() {
  var ul = document.querySelector('#ghx-quick-filters > ul:last-child');
  for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
  }
}

chrome.runtime.onMessage.addListener(
  function(message, callback) {
    if (message == "runContentScript"){
      chrome.tabs.executeScript({
      target: { tabId: tab.id },
        function: scrambleList
      });
    }
  });
