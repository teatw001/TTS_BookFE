import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/Clients/homepage/homepage.component';
import { PageNotFoundComponent } from './components/Clients/page-not-found/page-not-found.component';
import { LayoutUserComponent } from './Layout/Clients/layout-user/layout-user.component';
import { LayoutAdminComponent } from './Layout/Clients/layout-admin/layout-admin.component';

const routes: Routes = [{ path: '', component: LayoutUserComponent,children:[
  { path: '', component: HomepageComponent },
  // { path: 'product/:id', component: ProductDetailComponent },
] },

// { path: 'signup', component: SignupComponent },
// { path: 'signin', component: SigninComponent },
{
  path: 'admin',
  component: LayoutAdminComponent,
  children: [
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'product', component: ManageProductComponent },
    // { path: 'product/add', component: ProductAddComponent },
    // { path: 'product/:id/edit', component: ProductEditComponent },
  ],
},
{ path: '**', component: PageNotFoundComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
