browser.commands.onCommand.addListener((command) => {
  if (command === "_execute_sidebar_action") {
    browser.sidebarAction.open();
  }
});