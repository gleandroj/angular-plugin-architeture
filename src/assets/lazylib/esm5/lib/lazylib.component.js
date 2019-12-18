import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "lazylib2";
var LazylibComponent = /** @class */ (function () {
    function LazylibComponent(service) {
        this.service = service;
    }
    LazylibComponent.prototype.ngOnInit = function () {
        this.service.hello();
    };
    /** @nocollapse */ LazylibComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: LazylibComponent, selectors: [["lazylib-lazylib"]], factory: function LazylibComponent_Factory(t) { return new (t || LazylibComponent)(i0.ɵɵdirectiveInject(i1.Lazylib2Service)); }, consts: 2, vars: 0, template: function LazylibComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, " lazylib works! ");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return LazylibComponent;
}());
export { LazylibComponent };
/*@__PURE__*/ i0.ɵsetClassMetadata(LazylibComponent, [{
        type: Component,
        args: [{
                selector: 'lazylib-lazylib',
                template: "\n    <p>\n      lazylib works!\n    </p>\n  ",
                styles: []
            }]
    }], function () { return [{ type: i1.Lazylib2Service }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXp5bGliLyIsInNvdXJjZXMiOlsibGliL2xhenlsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQUdsRDtJQVdFLDBCQUNVLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBQzlCLENBQUM7SUFFTCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO21FQVJVLGdCQUFnQixxR0FBaEIsZ0JBQWdCO1lBTnpCLHlCQUNFO1lBQUEsZ0NBQ0Y7WUFBQSxpQkFBSTs7MkJBUlI7Q0FzQkMsQUFuQkQsSUFtQkM7U0FWWSxnQkFBZ0I7bUNBQWhCLGdCQUFnQjtjQVQ1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLCtDQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF6eWxpYjJTZXJ2aWNlIH0gZnJvbSAnbGF6eWxpYjInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXp5bGliLWxhenlsaWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbGF6eWxpYiB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGF6eWxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBMYXp5bGliMlNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlcnZpY2UuaGVsbG8oKTtcbiAgfVxuXG59XG4iXX0=