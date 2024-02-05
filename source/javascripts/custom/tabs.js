window.addEventListener("DOMContentLoaded", () => {
    const tabLists = document.querySelectorAll('[role="tablist"]');

    tabLists.forEach(tabList => {
      tabList.addEventListener("keydown", keyTabs);
    });
});

/**
 * Key focus left and right between sibling elements using arrows
 * @param  {Node} e the element in focus when key was pressed
 */
function keyTabs(e) {
    const tab = e.target;
    let nextTab = null;
    if (e.keyCode === 39 || e.keyCode === 37) {
      // Move right
      if (e.keyCode === 39) {
        nextTab = tab.nextElementSibling;
        if (nextTab === null) {
          nextTab = tab.parentNode.firstElementChild;
        }
      // Move left
      } else if (e.keyCode === 37) {
        nextTab = tab.previousElementSibling;
        if (nextTab === null) {
          nextTab = tab.parentNode.lastElementChild;
        }
      }
    }

    if (nextTab !== null) {
        // deselectTab(tab);
        nextTab.focus();
        // selectTab(nextTab);
        bootstrap.Tab.getInstance(nextTab).show();
    }
}
