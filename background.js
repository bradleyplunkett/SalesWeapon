// chrome.runtime.onInstalled.addListener(function() {
//     chrome.storage.sync.set({hide: true}, function() {
//       console.log("Hide image is on");
//     });
//   });

//Don't believe I need the above


  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.linkedin.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

