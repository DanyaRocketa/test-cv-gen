import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CvPageComponent } from "./components/cv-page/cv-page.component";

const routes: Routes = [
  {
    path: '',
    component: CvPageComponent,
    children: [
      {
        path: 'entities',
        loadChildren: () => import('../entities/entities.module').then((m) => m.EntitiesModule)
      },
      {
        path: 'employees',
        loadChildren: () => import('../employees/employees.module').then((m) => m.EmployeesModule) 
      },
      {
        path: 'cvs',
        loadChildren: () => import('../CVs/cvs.module').then((m) => m.CvsModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('../projects/projects.module').then((m) => m.ProjectsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvPageRoutingModule {}