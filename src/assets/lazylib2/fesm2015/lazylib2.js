import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { LazylibService } from 'lazylib';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazylib2.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Lazylib2Service {
    constructor() { }
    /**
     * @return {?}
     */
    hello() {
        alert("Hello from lazy lib 2");
    }
}
Lazylib2Service.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Lazylib2Service.ctorParameters = () => [];
/** @nocollapse */ Lazylib2Service.ngInjectableDef = ɵɵdefineInjectable({ factory: function Lazylib2Service_Factory() { return new Lazylib2Service(); }, token: Lazylib2Service, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazylib2.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Lazylib2Component {
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
Lazylib2Component.decorators = [
    { type: Component, args: [{
                selector: 'lazylib2-lazylib2',
                template: `
    <p>
    lazylib2 works!
    </p>
  `
            }] }
];
/** @nocollapse */
Lazylib2Component.ctorParameters = () => [
    { type: LazylibService }
];
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
const routes = [
    {
        component: Lazylib2Component,
        path: ''
    }
];
class Lazylib2Module {
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
