
//  when jQuery ready
$(function(){

    //  get timestamps
    var dtlast = getLocalStorageItem('dt');
    var dtnow = (new Date).getTime();


    //  show timestamps
    $('#output-default').append('<p>last timestamp: ' + dtlast + '</p>');
    $('#output-default').append('<p>this timestamp: ' + dtnow + '</p>');


    //  store timestamp
    setLocalStorageItem ('dt', dtnow);




});


function setLocalStorageItem (sItemKey, sItemValue) {

    'use strict';

    localStorage.setItem(sItemKey, JSON.stringify(sItemValue));

    if (sItemKey === undefined || sItemValue === undefined) {
        return false;
    }
    return true;
};


function getLocalStorageItem (sItemKey) {

    'use strict';

    var j = localStorage.getItem(sItemKey);
    if (j !== null) {
        return JSON.parse(j);
    }
    return false;
};
