import { NgModule } from '@angular/core';
import { Lazylib2Component } from './lazylib2.component';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        component: Lazylib2Component,
        path: ''
    }
];
export class Lazylib2Module {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eWxpYjIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGF6eWxpYjIvIiwic291cmNlcyI6WyJsaWIvbGF6eWxpYjIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFdkQsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLElBQUksRUFBRSxFQUFFO0tBQ1Q7Q0FDRixDQUFDO0FBWUYsTUFBTSxPQUFPLGNBQWM7O0FBQ2xCLHFCQUFNLEdBQUcsV0FBVyxDQUFDO0FBQ3JCLG9CQUFLLEdBQUc7SUFDYjtRQUNFLElBQUksRUFBRSxHQUFHO1FBQ1QsS0FBSyxFQUFFLFlBQVk7S0FDcEI7Q0FDRixDQUFDO3lEQVBTLGNBQWM7b0hBQWQsY0FBYyxtQkFKZCxFQUVWLFlBTlE7WUFDUCxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUM5QjtvQ0FNVSxjQUFjLG1CQVRWLGlCQUFpQix5Q0FJdEIsaUJBQWlCO21DQUtoQixjQUFjO2NBVjFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFO29CQUNQLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2lCQUM5QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsU0FBUyxFQUFFLEVBRVY7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXp5bGliMkNvbXBvbmVudCB9IGZyb20gJy4vbGF6eWxpYjIuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBjb21wb25lbnQ6IExhenlsaWIyQ29tcG9uZW50LFxuICAgIHBhdGg6ICcnXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xhenlsaWIyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6IFtMYXp5bGliMkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGF6eWxpYjJNb2R1bGUge1xuICBzdGF0aWMgcHJlZml4ID0gJ2xhenktbGliMic7XG4gIHN0YXRpYyBtZW51cyA9IFtcbiAgICB7XG4gICAgICBwYXRoOiAnLycsXG4gICAgICB0aXRsZTogJ0xhenkgTGliIDInXG4gICAgfVxuICBdO1xufVxuIl19