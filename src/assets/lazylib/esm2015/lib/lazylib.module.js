import { NgModule } from '@angular/core';
import { LazylibComponent } from './lazylib.component';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        component: LazylibComponent,
        path: ''
    }
];
export class LazylibModule {
}
LazylibModule.prefix = 'lazy-lib';
LazylibModule.menus = [
    {
        path: '/',
        title: 'Lazy Lib'
    }
];
/** @nocollapse */ LazylibModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: LazylibModule });
/** @nocollapse */ LazylibModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function LazylibModule_Factory(t) { return new (t || LazylibModule)(); }, providers: [], imports: [[
            RouterModule.forChild(routes)
        ]] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(LazylibModule, { declarations: [LazylibComponent], imports: [i1.RouterModule], exports: [LazylibComponent] });
/*@__PURE__*/ i0.ɵsetClassMetadata(LazylibModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXp5bGliLyIsInNvdXJjZXMiOlsibGliL2xhenlsaWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFdkQsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLElBQUksRUFBRSxFQUFFO0tBQ1Q7Q0FDRixDQUFDO0FBWUYsTUFBTSxPQUFPLGFBQWE7O0FBQ2pCLG9CQUFNLEdBQUcsVUFBVSxDQUFDO0FBQ3BCLG1CQUFLLEdBQUc7SUFDYjtRQUNFLElBQUksRUFBRSxHQUFHO1FBQ1QsS0FBSyxFQUFFLFVBQVU7S0FDbEI7Q0FDRixDQUFDO3dEQVBTLGFBQWE7a0hBQWIsYUFBYSxtQkFKYixFQUVWLFlBTlE7WUFDUCxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUM5QjtvQ0FNVSxhQUFhLG1CQVRULGdCQUFnQix5Q0FJckIsZ0JBQWdCO21DQUtmLGFBQWE7Y0FWekIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUNoQyxPQUFPLEVBQUU7b0JBQ1AsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQzlCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixTQUFTLEVBQUUsRUFFVjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhenlsaWJDb21wb25lbnQgfSBmcm9tICcuL2xhenlsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBjb21wb25lbnQ6IExhenlsaWJDb21wb25lbnQsXG4gICAgcGF0aDogJydcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTGF6eWxpYkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxuICBdLFxuICBleHBvcnRzOiBbTGF6eWxpYkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGF6eWxpYk1vZHVsZSB7XG4gIHN0YXRpYyBwcmVmaXggPSAnbGF6eS1saWInO1xuICBzdGF0aWMgbWVudXMgPSBbXG4gICAge1xuICAgICAgcGF0aDogJy8nLFxuICAgICAgdGl0bGU6ICdMYXp5IExpYidcbiAgICB9XG4gIF07XG59XG4iXX0=