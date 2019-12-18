import { NgModule } from '@angular/core';
import { Lazylib2Component } from './lazylib2.component';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
    /** @nocollapse */ Lazylib2Module.ngModuleDef = i0.ɵɵdefineNgModule({ type: Lazylib2Module });
    /** @nocollapse */ Lazylib2Module.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function Lazylib2Module_Factory(t) { return new (t || Lazylib2Module)(); }, providers: [], imports: [[
                RouterModule.forChild(routes)
            ]] });
    return Lazylib2Module;
}());
export { Lazylib2Module };
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(Lazylib2Module, { declarations: [Lazylib2Component], imports: [i1.RouterModule], exports: [Lazylib2Component] });
/*@__PURE__*/ i0.ɵsetClassMetadata(Lazylib2Module, [{
        type: NgModule,
        args: [{
                declarations: [Lazylib2Component],
                imports: [
                    RouterModule.forChild(routes)
                ],
                exports: [Lazylib2Component],
                providers: []
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eWxpYjIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGF6eWxpYjIvIiwic291cmNlcyI6WyJsaWIvbGF6eWxpYjIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFdkQsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLElBQUksRUFBRSxFQUFFO0tBQ1Q7Q0FDRixDQUFDO0FBRUY7SUFBQTtLQWtCQztJQVBRLHFCQUFNLEdBQUcsV0FBVyxDQUFDO0lBQ3JCLG9CQUFLLEdBQUc7UUFDYjtZQUNFLElBQUksRUFBRSxHQUFHO1lBQ1QsS0FBSyxFQUFFLFlBQVk7U0FDcEI7S0FDRixDQUFDOzZEQVBTLGNBQWM7d0hBQWQsY0FBYyxtQkFKZCxFQUVWLFlBTlE7Z0JBQ1AsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDOUI7eUJBZkg7Q0E2QkMsQUFsQkQsSUFrQkM7U0FSWSxjQUFjO29DQUFkLGNBQWMsbUJBVFYsaUJBQWlCLHlDQUl0QixpQkFBaUI7bUNBS2hCLGNBQWM7Y0FWMUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUU7b0JBQ1AsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQzlCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixTQUFTLEVBQUUsRUFFVjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhenlsaWIyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXp5bGliMi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIGNvbXBvbmVudDogTGF6eWxpYjJDb21wb25lbnQsXG4gICAgcGF0aDogJydcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTGF6eWxpYjJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgXSxcbiAgZXhwb3J0czogW0xhenlsaWIyQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMYXp5bGliMk1vZHVsZSB7XG4gIHN0YXRpYyBwcmVmaXggPSAnbGF6eS1saWIyJztcbiAgc3RhdGljIG1lbnVzID0gW1xuICAgIHtcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIHRpdGxlOiAnTGF6eSBMaWIgMidcbiAgICB9XG4gIF07XG59XG4iXX0=