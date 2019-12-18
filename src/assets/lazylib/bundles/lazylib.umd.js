(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('lazylib2'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('lazylib', ['exports', '@angular/core', 'lazylib2', '@angular/router'], factory) :
    (global = global || self, factory(global.lazylib = {}, global.ng.core, global.lazylib2, global.ng.router));
}(this, (function (exports, core, lazylib2, router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/lazylib.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LazylibService = /** @class */ (function () {
        function LazylibService() {
        }
        /**
         * @return {?}
         */
        LazylibService.prototype.hello = /**
         * @return {?}
         */
        function () {
            alert("Hello from lazy lib 1");
        };
        LazylibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LazylibService.ctorParameters = function () { return []; };
        /** @nocollapse */ LazylibService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LazylibService_Factory() { return new LazylibService(); }, token: LazylibService, providedIn: "root" });
        return LazylibService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/lazylib.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LazylibComponent = /** @class */ (function () {
        function LazylibComponent(service) {
            this.service = service;
        }
        /**
         * @return {?}
         */
        LazylibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.service.hello();
        };
        LazylibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lazylib-lazylib',
                        template: "\n    <p>\n      lazylib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        LazylibComponent.ctorParameters = function () { return [
            { type: lazylib2.Lazylib2Service }
        ]; };
        return LazylibComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LazylibComponent.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/lazylib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            component: LazylibComponent,
            path: ''
        }
    ];
    var LazylibModule = /** @class */ (function () {
        function LazylibModule() {
        }
        LazylibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [LazylibComponent],
                        imports: [
                            router.RouterModule.forChild(routes)
                        ],
                        exports: [LazylibComponent],
                        providers: []
                    },] }
        ];
        return LazylibModule;
    }());

    exports.LazylibComponent = LazylibComponent;
    exports.LazylibModule = LazylibModule;
    exports.LazylibService = LazylibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lazylib.umd.js.map
