export var DISCONNECTED_MODE_IDENTIFIER = "available-in-connected-mode";
export var removeTimeFromDate = function (dateField) {
    var date = dateField.value.substring(0, dateField.value.indexOf("T"));
    return {
        value: date
    };
};
export var isDisconnectedMode = function (sitecoreContext) {
    return !sitecoreContext ||
        sitecoreContext.route.databaseName === DISCONNECTED_MODE_IDENTIFIER;
};
