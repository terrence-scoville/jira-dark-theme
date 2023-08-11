function scrambleList() {
  // var ul = document.querySelector('#ghx-quick-filters > ul:last-child');
  // for (var i = ul.children.length; i >= 0; i--) {
  //     ul.appendChild(ul.children[Math.random() * i | 0]);
  // }

  var ul = document.querySelector('._otyrzwfg > fieldset');
  for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
  }

  var sidebar = document.querySelector('#ak-side-navigation');
  sidebar.style.display = 'none';

  var nav = document.querySelector('#ak-jira-navigation');
  nav.style.display = 'none';

  // var header = document.querySelector('#ghx-header');
  // header.style.display = 'none';

  setTimeout(() => {

    var header = document.querySelector('.css-1q41chj');
    header.style.gridTemplateRows = '0px 0px auto';

    var main = document.querySelector('#ak-main-content');
    main.style.height = '100vh';

    var mainChild = document.querySelector('#ak-main-content > div:first-child');
    mainChild.style.height = '100vh';

    var breadcrumbs = document.querySelector('._1tke1tcg');
    breadcrumbs.style.display = 'none';

    var title = document.querySelector('.css-1pa8dxh');
    title.style.display = 'none';

  }, "1000");


  window.dispatchEvent(new Event('resize'));
  
  console.log('SCRAMBLED');
}


chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: scrambleList
  });
});
