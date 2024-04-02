chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url && changeInfo.url.includes("https://moodle.uns.edu.ar/")) {
        chrome.tabs.create({url: "https://marcolibertini.github.io/Proposal/"});
    }
});
