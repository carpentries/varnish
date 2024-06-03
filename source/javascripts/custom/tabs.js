try {
  var store = window.localStorage || {};
} catch (e) {
  var store = {};
}

window.addEventListener("DOMContentLoaded", () => {
  const tabLists = document.querySelectorAll('[role="tablist"]');

  tabLists.forEach(tabList => {
    tabList.addEventListener("click", changeTabs);
  });

  tabLists.forEach(tabList => {
    tabList.addEventListener("keydown", keyTabs);
  });

  // Restore group tab selection from store
  const lastSelected = store.getItem('group-tabs-last-selected');
  if (lastSelected != null) selectNamedTabs(lastSelected);
});

/**
 * Key focus left and right between sibling elements using arrows
 * @param  {Node} e the element in focus when key was pressed
 */
function keyTabs(e) {
  var tab = e.target;
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
      // Focus on the tab and tell bootstrap to show it
      nextTab.focus();
      tab = new bootstrap.Tab(nextTab);
      tab.show();
      // Show group-tab(s) with same name
      if (nextTab.hasAttribute("name")) {
        var group_name = nextTab.getAttribute("name");
        selectNamedTabs(group_name, nextTab.id);
        store.setItem('group-tabs-last-selected', group_name);
      }
  }
}

/**
 * Select the group-tabs with the same name as e.
 * This doesn't need to call show() on the
 * target tab; Bootstrap handles that.
 * @param  {Node} e the element that was clicked
 */
function changeTabs(e) {
  // Using Bootstrap the clicks can be
  // on the header or the button, if on
  // the header target the button
  if (e.target.classList.contains("tab-header")) {
    var target = e.target.parentNode;
  } else {
    var target = e.target;
  }
  // Show group-tab(s) with same name
  if (target.hasAttribute("name")) {
    var group_name = target.getAttribute("name");
    selectNamedTabs(group_name, target.id);
    store.setItem('group-tabs-last-selected', group_name);
  }
}

/**
 * Select grouped tabs with the same name, but no the tab
 * with the given id.
 * @param  {Node} name name of grouped tab to be selected
 * @param  {Node} clickedId id of clicked tab
 */
function selectNamedTabs(name, clickedId=null) {
  const groupedTabs = document.getElementsByName(name);
  groupedTabs
    .forEach(groupTab => {
      // Don't show the tab we already selected
      if ( groupTab.id != clickedId ) {
        var tab = new bootstrap.Tab(groupTab);
        tab.show();
      }
    })
}
