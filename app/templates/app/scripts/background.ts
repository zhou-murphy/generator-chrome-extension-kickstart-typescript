chrome.runtime.onMessage.addListener((message: string, sender, sendTResponse) => {
  var queryOptions = { active: true, currentWindow: true };
  chrome.tabs.query(queryOptions, function(tabs) {
    console.log(tabs[0].id, message);
  });
  return true;

});


chrome.tabs.onRemoved.addListener(function(tabid, removeInfo) {
  console.log(tabid);
})