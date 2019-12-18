import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "lazylib2";
export class LazylibComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.hello();
    }
}
/** @nocollapse */ LazylibComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: LazylibComponent, selectors: [["lazylib-lazylib"]], factory: function LazylibComponent_Factory(t) { return new (t || LazylibComponent)(i0.ɵɵdirectiveInject(i1.Lazylib2Service)); }, consts: 2, vars: 0, template: function LazylibComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " lazylib works! ");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ i0.ɵsetClassMetadata(LazylibComponent, [{
        type: Component,
        args: [{
                selector: 'lazylib-lazylib',
                template: `
    <p>
      lazylib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return [{ type: i1.Lazylib2Service }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXp5bGliLyIsInNvdXJjZXMiOlsibGliL2xhenlsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVlsRCxNQUFNLE9BQU8sZ0JBQWdCO0lBRTNCLFlBQ1UsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFDOUIsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OytEQVJVLGdCQUFnQixxR0FBaEIsZ0JBQWdCO1FBTnpCLHlCQUNFO1FBQUEsZ0NBQ0Y7UUFBQSxpQkFBSTs7bUNBSUssZ0JBQWdCO2NBVDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhenlsaWIyU2VydmljZSB9IGZyb20gJ2xhenlsaWIyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF6eWxpYi1sYXp5bGliJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGxhenlsaWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExhenlsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VydmljZTogTGF6eWxpYjJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmhlbGxvKCk7XG4gIH1cblxufVxuIl19