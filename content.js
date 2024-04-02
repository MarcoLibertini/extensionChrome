chrome.tabs.onCreated.addListener(function(tab) {
    if (tab.url.includes("https://moodle.uns.edu.ar/*")) {
      chrome.tabs.create({url: "https://marcolibertini.github.io/Proposal/"});
    }
  });
  