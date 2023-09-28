var sidebarOpen = true;

browser.browserAction.onClicked.addListener(() => {
  if (sidebarOpen) {
    browser.sidebarAction.close();
  } else {
    browser.sidebarAction.open();
  }
  sidebarOpen = !sidebarOpen;
});
