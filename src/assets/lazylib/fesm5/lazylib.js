import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { Lazylib2Service } from 'lazylib2';
import { RouterModule } from '@angular/router';

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LazylibService.ctorParameters = function () { return []; };
    /** @nocollapse */ LazylibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LazylibService_Factory() { return new LazylibService(); }, token: LazylibService, providedIn: "root" });
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
        { type: Component, args: [{
                    selector: 'lazylib-lazylib',
                    template: "\n    <p>\n      lazylib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    LazylibComponent.ctorParameters = function () { return [
        { type: Lazylib2Service }
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
        { type: NgModule, args: [{
                    declarations: [LazylibComponent],
                    imports: [
                        RouterModule.forChild(routes)
                    ],
                    exports: [LazylibComponent],
                    providers: []
                },] }
    ];
    return LazylibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lazylib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LazylibComponent, LazylibModule, LazylibService };
//# sourceMappingURL=lazylib.js.map
