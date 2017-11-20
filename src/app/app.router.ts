import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LogicComponent } from './logic/logic.component';
import { L1detailsComponent } from './l1details/l1details.component';
import { L2detailsComponent } from './l2details/l2details.component';
export const router: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'logic', component: LogicComponent, children: [
            { path: 'label1', component: L1detailsComponent, },
            { path: 'label2', component: L2detailsComponent, },
        ]
    },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);