"use strict";
// @Component
// @Selector
// @useState('asdfadf')
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Factory
function Logger(prefix) {
    return function (target) {
        console.log(prefix + " - " + target);
    };
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo = __decorate([
        Logger('Awesome')
    ], Foo);
    return Foo;
}());
// @Class decorator
function setAPIVersion(apiVersion) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.version = apiVersion;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var API = /** @class */ (function () {
    function API() {
    }
    API = __decorate([
        setAPIVersion('1.0.0')
    ], API);
    return API;
}());
console.log(new API());
// @Property decorator
function minLength(length) {
    return function (target, key) {
        var val = target[key];
        var getter = function () {
            return val;
        };
        var setter = function (value) {
            if (value.length < length) {
                console.log("Error: You cannot create the " + key + " with less than " + length + " letters.");
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            set: setter,
            get: getter,
        });
    };
}
var Movie = /** @class */ (function () {
    function Movie(t) {
        this.title = t;
    }
    __decorate([
        minLength(50)
    ], Movie.prototype, "title", void 0);
    return Movie;
}());
var movie = new Movie('Interstellar');
console.log(movie.title);
// @Method decorator
function delay(ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply.apply(originalMethod, __spreadArrays([_this], args));
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello! " + this.greeting);
    };
    __decorate([
        delay(500)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var pessoainha = new Greeter("Pessoinha");
pessoainha.greet();
