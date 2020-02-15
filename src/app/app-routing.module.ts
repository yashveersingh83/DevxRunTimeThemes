import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationComponent } from './dashboard/evaluation/evaluation.component';
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

  
  // {
  //     path: 'products',
  //     component: ProductsComponent,
  //     data: { title: 'Products-y' }
  // },
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
