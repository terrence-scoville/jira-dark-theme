function scrambleList() {
  var ul = document.querySelector('#ghx-quick-filters > ul:last-child');
  for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
  }

  var nav = document.querySelector('#ak-jira-navigation');
  nav.style.display = 'none';

  var header = document.querySelector('#ghx-header');
  header.style.display = 'none';

  var breadcrumbs = document.querySelector('.bYQimP');
  breadcrumbs.style.display = 'none';

  window.dispatchEvent(new Event('resize'));
  
  console.log('SCRAMBLED');
}


chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: scrambleList
  });
});
