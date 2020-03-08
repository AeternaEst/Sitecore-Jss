export var removeTimeFromDate = function (dateField) {
    var date = dateField.value.substring(0, dateField.value.indexOf("T"));
    return {
        value: date
    };
};
