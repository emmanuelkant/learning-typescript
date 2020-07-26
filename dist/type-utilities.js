"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: 'Watch Dark again',
    description: 'Remember details',
    completed: false,
};
console.log(todo);
function updateTodo(todo, fieldsToUpdade) {
    return __assign(__assign({}, todo), fieldsToUpdade);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: 'Beat Ghost of Tsushima',
    completed: false,
};
var todo4 = {
    title: 'Beat The Last of Us 2',
    completed: false,
};
