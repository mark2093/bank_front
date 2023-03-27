import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const LAYOUT_ROUTES: Routes= [
    {
        path: '',component:LayoutComponent, children:[
            { path:'home', loadChildren:() => import('../pages/home/home.module').then(m => m.HomeModule) },
            { path:'studentmanagement', loadChildren:() => import('../pages/student-management/student-management.module').then(m => m.StudentManagement) },
            { path:'accountManagement/accountDetails', loadChildren: () => import('../pages/account-management/account-management.module').then(m => m.AccountManagementModule)} 
        ]
        
    }
]

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);