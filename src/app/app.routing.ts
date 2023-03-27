import { RouterModule, Routes } from "@angular/router";

const ROUTES : Routes = [
    { path: '', redirectTo:'/app', pathMatch:'full' },
    {path: 'app',loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule)}
];

export const Routing = RouterModule.forRoot(ROUTES) 