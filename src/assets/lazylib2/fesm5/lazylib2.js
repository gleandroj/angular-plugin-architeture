import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { LazylibService } from 'lazylib';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazylib2.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Lazylib2Service = /** @class */ (function () {
    function Lazylib2Service() {
    }
    /**
     * @return {?}
     */
    Lazylib2Service.prototype.hello = /**
     * @return {?}
     */
    function () {
        alert("Hello from lazy lib 2");
    };
    Lazylib2Service.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Lazylib2Service.ctorParameters = function () { return []; };
    /** @nocollapse */ Lazylib2Service.ngInjectableDef = ɵɵdefineInjectable({ factory: function Lazylib2Service_Factory() { return new Lazylib2Service(); }, token: Lazylib2Service, providedIn: "root" });
    return Lazylib2Service;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazylib2.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Lazylib2Component = /** @class */ (function () {
    function Lazylib2Component(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    Lazylib2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.service.hello();
    };
    Lazylib2Component.decorators = [
        { type: Component, args: [{
                    selector: 'lazylib2-lazylib2',
                    template: "\n    <p>\n    lazylib2 works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    Lazylib2Component.ctorParameters = function () { return [
        { type: LazylibService }
    ]; };
    return Lazylib2Component;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    Lazylib2Component.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazylib2.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
    Lazylib2Module.decorators = [
        { type: NgModule, args: [{
                    declarations: [Lazylib2Component],
                    imports: [
                        RouterModule.forChild(routes)
                    ],
                    exports: [Lazylib2Component],
                    providers: []
                },] }
    ];
    return Lazylib2Module;
}());
if (false) {
    /** @type {?} */
    Lazylib2Module.prefix;
    /** @type {?} */
    Lazylib2Module.menus;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lazylib2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Lazylib2Component, Lazylib2Module, Lazylib2Service };
//# sourceMappingURL=lazylib2.js.map
