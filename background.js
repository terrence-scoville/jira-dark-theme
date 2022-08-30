function scrambleList() {
  var ul = document.querySelector('#ghx-quick-filters > ul:last-child');
  for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
  }
  console.log('SCRAMBLED');
}


chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: scrambleList
  });
});
