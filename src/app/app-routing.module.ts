import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationComponent } from './dashboard/evaluation/evaluation.component';
import { StudentListComponent } from './Student/student-list/student-list.component';
const routes: Routes = [
  {
      path: 'dashboard',
      data: { title: 'Dashboard' },
      component: EvaluationComponent

      // children: [
      //     {
      //         path: '',
      //        ,
      //         data: { title: 'Revenue by Product' },
      //     }
         
      // ]
  },

  
  {
      path: 'students',
      component: StudentListComponent,
      data: { title: 'Students' }
  },
  // {
  //     path: 'sales',
  //     component: SalesComponent,
  //     data: { title: 'Sales' }
  // },
  // {
  //     path: 'customers',
  //     component: CustomersComponent,
  //     data: { title: 'Customers' }
  // },
  // {
  //     path: '',
  //     redirectTo: '/dashboard/products',
  //     pathMatch: 'full'
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
