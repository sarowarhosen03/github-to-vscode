chrome.runtime.onInstalled.addListener(() => {

    //create context menu
    chrome.contextMenus.create({
        id: "gitToVscode",
        title: "Open in Vscode",
        contexts: ["all"],
    })
});

//listener for context menu
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    //the URL that will be added to based on the selection
    baseURL = info?.frameUrl;
    if (!baseURL.startsWith("https://github.com")) return;

    const repoUrl = baseURL.replace('https://github.com/', 'https://github.dev/');

    chrome.tabs.create({ url: repoUrl, index: tab.index + 1 });
})
