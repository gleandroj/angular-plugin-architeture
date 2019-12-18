(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('hello-world-js'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('lazylib2', ['exports', '@angular/core', 'hello-world-js', '@angular/router'], factory) :
    (global = global || self, factory(global.lazylib2 = {}, global.ng.core, global.helloWorldJs, global.ng.router));
}(this, (function (exports, core, helloWorldJs, router) { 'use strict';

    var Lazylib2Service = /** @class */ (function () {
        function Lazylib2Service() {
        }
        Lazylib2Service.prototype.hello = function () {
            alert("Hello from lazy lib 2");
        };
        /** @nocollapse */ Lazylib2Service.ngInjectableDef = core.ɵɵdefineInjectable({ token: Lazylib2Service, factory: function Lazylib2Service_Factory(t) { return new (t || Lazylib2Service)(); }, providedIn: 'root' });
        return Lazylib2Service;
    }());
    /*@__PURE__*/ core.ɵsetClassMetadata(Lazylib2Service, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);

    var Lazylib2Component = /** @class */ (function () {
        function Lazylib2Component() {
        }
        Lazylib2Component.prototype.ngOnInit = function () {
            alert(helloWorldJs.hello());
        };
        /** @nocollapse */ Lazylib2Component.ngComponentDef = core.ɵɵdefineComponent({ type: Lazylib2Component, selectors: [["lazylib2-lazylib2"]], factory: function Lazylib2Component_Factory(t) { return new (t || Lazylib2Component)(); }, consts: 2, vars: 0, template: function Lazylib2Component_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " lazylib2 works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return Lazylib2Component;
    }());
    /*@__PURE__*/ core.ɵsetClassMetadata(Lazylib2Component, [{
            type: core.Component,
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
        /** @nocollapse */ Lazylib2Module.ngModuleDef = core.ɵɵdefineNgModule({ type: Lazylib2Module });
        /** @nocollapse */ Lazylib2Module.ngInjectorDef = core.ɵɵdefineInjector({ factory: function Lazylib2Module_Factory(t) { return new (t || Lazylib2Module)(); }, providers: [], imports: [[
                    router.RouterModule.forChild(routes)
                ]] });
        return Lazylib2Module;
    }());
    /*@__PURE__*/ core.ɵɵsetNgModuleScope(Lazylib2Module, { declarations: [Lazylib2Component], imports: [router.RouterModule], exports: [Lazylib2Component] });
    /*@__PURE__*/ core.ɵsetClassMetadata(Lazylib2Module, [{
            type: core.NgModule,
            args: [{
                    declarations: [Lazylib2Component],
                    imports: [
                        router.RouterModule.forChild(routes)
                    ],
                    exports: [Lazylib2Component],
                    providers: []
                }]
        }], null, null);

    exports.Lazylib2Component = Lazylib2Component;
    exports.Lazylib2Module = Lazylib2Module;
    exports.Lazylib2Service = Lazylib2Service;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lazylib2.umd.js.map
