"use strict";
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
}
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name as " + user);
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('Windows');
renderPlatform('ios'); // Error
logDetails(123, 'shoes ');
logDetails('123', 'shoes');
logInfo(123, 'kant');
logInfo('123', 'kant');
