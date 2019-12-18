import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { hello } from 'hello-world-js';
import { RouterModule } from '@angular/router';

var Lazylib2Service = /** @class */ (function () {
    function Lazylib2Service() {
    }
    Lazylib2Service.prototype.hello = function () {
        alert("Hello from lazy lib 2");
    };
    /** @nocollapse */ Lazylib2Service.ngInjectableDef = ɵɵdefineInjectable({ token: Lazylib2Service, factory: function Lazylib2Service_Factory(t) { return new (t || Lazylib2Service)(); }, providedIn: 'root' });
    return Lazylib2Service;
}());
/*@__PURE__*/ ɵsetClassMetadata(Lazylib2Service, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null);

var Lazylib2Component = /** @class */ (function () {
    function Lazylib2Component() {
    }
    Lazylib2Component.prototype.ngOnInit = function () {
        alert(hello());
    };
    /** @nocollapse */ Lazylib2Component.ngComponentDef = ɵɵdefineComponent({ type: Lazylib2Component, selectors: [["lazylib2-lazylib2"]], factory: function Lazylib2Component_Factory(t) { return new (t || Lazylib2Component)(); }, consts: 2, vars: 0, template: function Lazylib2Component_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " lazylib2 works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return Lazylib2Component;
}());
/*@__PURE__*/ ɵsetClassMetadata(Lazylib2Component, [{
        type: Component,
        args: [{
                selector: 'lazylib2-lazylib2',
                template: "\n    <p>\n    lazylib2 works!\n    </p>\n  ",
                styles: []
            }]
    }], function () { return []; }, null);

var routes = [
    {
        component: Lazylib2Component,
        path: ''
    }
];
var Lazylib2Module = /** @class */ (function () {
    function Lazylib2Module() {
    }
    Lazylib2Module.prefix = 'lazy-lib2';
    Lazylib2Module.menus = [
        {
            path: '/',
            title: 'Lazy Lib 2'
        }
    ];
    /** @nocollapse */ Lazylib2Module.ngModuleDef = ɵɵdefineNgModule({ type: Lazylib2Module });
    /** @nocollapse */ Lazylib2Module.ngInjectorDef = ɵɵdefineInjector({ factory: function Lazylib2Module_Factory(t) { return new (t || Lazylib2Module)(); }, providers: [], imports: [[
                RouterModule.forChild(routes)
            ]] });
    return Lazylib2Module;
}());
/*@__PURE__*/ ɵɵsetNgModuleScope(Lazylib2Module, { declarations: [Lazylib2Component], imports: [RouterModule], exports: [Lazylib2Component] });
/*@__PURE__*/ ɵsetClassMetadata(Lazylib2Module, [{
        type: NgModule,
        args: [{
                declarations: [Lazylib2Component],
                imports: [
                    RouterModule.forChild(routes)
                ],
                exports: [Lazylib2Component],
                providers: []
            }]
    }], null, null);

/*
 * Public API Surface of lazylib2
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Lazylib2Component, Lazylib2Module, Lazylib2Service };
//# sourceMappingURL=lazylib2.js.map
