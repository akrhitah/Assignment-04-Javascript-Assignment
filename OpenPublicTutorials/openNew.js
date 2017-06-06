chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://www.muele.mak.ac.ug";
    chrome.tabs.create({ url: newURL });
});