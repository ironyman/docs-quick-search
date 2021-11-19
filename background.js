let docsUrl = "https://docs.google.com/document/u/0/";

chrome.browserAction.onClicked.addListener(function openDocs(ev) {
  chrome.tabs.getAllInWindow(tabs => {
    for (let t of tabs) {
      if (t.url == docsUrl || t.pendingUrl == docsUrl) {
        chrome.tabs.update(t.id, { active: true });
        return;
      }
    }
    chrome.tabs.create({ url: docsUrl });
  });  
})
