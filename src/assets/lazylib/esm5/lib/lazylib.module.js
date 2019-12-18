import { NgModule } from '@angular/core';
import { LazylibComponent } from './lazylib.component';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var routes = [
    {
        component: LazylibComponent,
        path: ''
    }
];
var LazylibModule = /** @class */ (function () {
    function LazylibModule() {
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
    return LazylibModule;
}());
export { LazylibModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXp5bGliLyIsInNvdXJjZXMiOlsibGliL2xhenlsaWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFdkQsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLElBQUksRUFBRSxFQUFFO0tBQ1Q7Q0FDRixDQUFDO0FBRUY7SUFBQTtLQWtCQztJQVBRLG9CQUFNLEdBQUcsVUFBVSxDQUFDO0lBQ3BCLG1CQUFLLEdBQUc7UUFDYjtZQUNFLElBQUksRUFBRSxHQUFHO1lBQ1QsS0FBSyxFQUFFLFVBQVU7U0FDbEI7S0FDRixDQUFDOzREQVBTLGFBQWE7c0hBQWIsYUFBYSxtQkFKYixFQUVWLFlBTlE7Z0JBQ1AsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDOUI7d0JBZkg7Q0E2QkMsQUFsQkQsSUFrQkM7U0FSWSxhQUFhO29DQUFiLGFBQWEsbUJBVFQsZ0JBQWdCLHlDQUlyQixnQkFBZ0I7bUNBS2YsYUFBYTtjQVZ6QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRTtvQkFDUCxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzNCLFNBQVMsRUFBRSxFQUVWO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF6eWxpYkNvbXBvbmVudCB9IGZyb20gJy4vbGF6eWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIGNvbXBvbmVudDogTGF6eWxpYkNvbXBvbmVudCxcbiAgICBwYXRoOiAnJ1xuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMYXp5bGliQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6IFtMYXp5bGliQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMYXp5bGliTW9kdWxlIHtcbiAgc3RhdGljIHByZWZpeCA9ICdsYXp5LWxpYic7XG4gIHN0YXRpYyBtZW51cyA9IFtcbiAgICB7XG4gICAgICBwYXRoOiAnLycsXG4gICAgICB0aXRsZTogJ0xhenkgTGliJ1xuICAgIH1cbiAgXTtcbn1cbiJdfQ==