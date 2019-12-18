(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('lazylib2'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('lazylib', ['exports', '@angular/core', 'lazylib2', '@angular/router'], factory) :
    (global = global || self, factory(global.lazylib = {}, global.ng.core, global.lazylib2, global.ng.router));
}(this, (function (exports, core, lazylib2, router) { 'use strict';

    var LazylibService = /** @class */ (function () {
        function LazylibService() {
        }
        /** @nocollapse */ LazylibService.ngInjectableDef = core.ɵɵdefineInjectable({ token: LazylibService, factory: function LazylibService_Factory(t) { return new (t || LazylibService)(); }, providedIn: 'root' });
        return LazylibService;
    }());
    /*@__PURE__*/ core.ɵsetClassMetadata(LazylibService, [{
            type: core.Injectable,
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
        /** @nocollapse */ LazylibComponent.ngComponentDef = core.ɵɵdefineComponent({ type: LazylibComponent, selectors: [["lazylib-lazylib"]], factory: function LazylibComponent_Factory(t) { return new (t || LazylibComponent)(core.ɵɵdirectiveInject(lazylib2.Lazylib2Service)); }, consts: 2, vars: 0, template: function LazylibComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " lazylib works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return LazylibComponent;
    }());
    /*@__PURE__*/ core.ɵsetClassMetadata(LazylibComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lazylib-lazylib',
                    template: "\n    <p>\n      lazylib works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return [{ type: lazylib2.Lazylib2Service }]; }, null);

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
        /** @nocollapse */ LazylibModule.ngModuleDef = core.ɵɵdefineNgModule({ type: LazylibModule });
        /** @nocollapse */ LazylibModule.ngInjectorDef = core.ɵɵdefineInjector({ factory: function LazylibModule_Factory(t) { return new (t || LazylibModule)(); }, providers: [], imports: [[
                    router.RouterModule.forChild(routes)
                ]] });
        return LazylibModule;
    }());
    /*@__PURE__*/ core.ɵɵsetNgModuleScope(LazylibModule, { declarations: [LazylibComponent], imports: [router.RouterModule], exports: [LazylibComponent] });
    /*@__PURE__*/ core.ɵsetClassMetadata(LazylibModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [LazylibComponent],
                    imports: [
                        router.RouterModule.forChild(routes)
                    ],
                    exports: [LazylibComponent],
                    providers: []
                }]
        }], null, null);

    exports.LazylibComponent = LazylibComponent;
    exports.LazylibModule = LazylibModule;
    exports.LazylibService = LazylibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lazylib.umd.js.map
