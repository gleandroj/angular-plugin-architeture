import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵdirectiveInject, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Lazylib2Service } from 'lazylib2';
import { RouterModule } from '@angular/router';

var LazylibService = /** @class */ (function () {
    function LazylibService() {
    }
    /** @nocollapse */ LazylibService.ngInjectableDef = ɵɵdefineInjectable({ token: LazylibService, factory: function LazylibService_Factory(t) { return new (t || LazylibService)(); }, providedIn: 'root' });
    return LazylibService;
}());
/*@__PURE__*/ ɵsetClassMetadata(LazylibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null);

var LazylibComponent = /** @class */ (function () {
    function LazylibComponent(service) {
        this.service = service;
    }
    LazylibComponent.prototype.ngOnInit = function () {
        this.service.hello();
    };
    /** @nocollapse */ LazylibComponent.ngComponentDef = ɵɵdefineComponent({ type: LazylibComponent, selectors: [["lazylib-lazylib"]], factory: function LazylibComponent_Factory(t) { return new (t || LazylibComponent)(ɵɵdirectiveInject(Lazylib2Service)); }, consts: 2, vars: 0, template: function LazylibComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " lazylib works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return LazylibComponent;
}());
/*@__PURE__*/ ɵsetClassMetadata(LazylibComponent, [{
        type: Component,
        args: [{
                selector: 'lazylib-lazylib',
                template: "\n    <p>\n      lazylib works!\n    </p>\n  ",
                styles: []
            }]
    }], function () { return [{ type: Lazylib2Service }]; }, null);

var routes = [
    {
        component: LazylibComponent,
        path: ''
    }
];
var LazylibModule = /** @class */ (function () {
    function LazylibModule() {
    }
    LazylibModule.prefix = 'lazy-lib';
    LazylibModule.menus = [
        {
            path: '/',
            title: 'Lazy Lib'
        }
    ];
    /** @nocollapse */ LazylibModule.ngModuleDef = ɵɵdefineNgModule({ type: LazylibModule });
    /** @nocollapse */ LazylibModule.ngInjectorDef = ɵɵdefineInjector({ factory: function LazylibModule_Factory(t) { return new (t || LazylibModule)(); }, providers: [], imports: [[
                RouterModule.forChild(routes)
            ]] });
    return LazylibModule;
}());
/*@__PURE__*/ ɵɵsetNgModuleScope(LazylibModule, { declarations: [LazylibComponent], imports: [RouterModule], exports: [LazylibComponent] });
/*@__PURE__*/ ɵsetClassMetadata(LazylibModule, [{
        type: NgModule,
        args: [{
                declarations: [LazylibComponent],
                imports: [
                    RouterModule.forChild(routes)
                ],
                exports: [LazylibComponent],
                providers: []
            }]
    }], null, null);

/*
 * Public API Surface of lazylib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LazylibComponent, LazylibModule, LazylibService };
//# sourceMappingURL=lazylib.js.map
