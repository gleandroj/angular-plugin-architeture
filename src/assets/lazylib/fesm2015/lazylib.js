import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { Lazylib2Service } from 'lazylib2';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazylib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LazylibService {
    constructor() { }
    /**
     * @return {?}
     */
    hello() {
        alert("Hello from lazy lib 1");
    }
}
LazylibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LazylibService.ctorParameters = () => [];
/** @nocollapse */ LazylibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LazylibService_Factory() { return new LazylibService(); }, token: LazylibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazylib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LazylibComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.service.hello();
    }
}
LazylibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lazylib-lazylib',
                template: `
    <p>
      lazylib works!
    </p>
  `
            }] }
];
/** @nocollapse */
LazylibComponent.ctorParameters = () => [
    { type: Lazylib2Service }
];
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
const routes = [
    {
        component: LazylibComponent,
        path: ''
    }
];
class LazylibModule {
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
