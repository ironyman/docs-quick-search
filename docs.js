addEvent(document, "keypress", function focusSearchOnKeyPress(e) {
    e = e || window.event;

    // It's the first one. Trust me, I'm an engineer.
    let searchBox = document.querySelectorAll('input')[0];

    if (searchBox === undefined) {
        console.error("Could not find search input box.");
        return;
    }

    searchBox.focus();
});

function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, callback);
    } else {
        element["on" + eventName] = callback;
    }
}
