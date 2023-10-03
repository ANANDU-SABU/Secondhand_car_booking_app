import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Guest/index',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'Guest/index',
    loadChildren: () => import('./Guest/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'Guest/adminlogin',
    loadChildren: () => import('./Guest/adminlogin/adminlogin.module').then( m => m.AdminloginPageModule)
  },
  {
    path: 'Guest/signin',
    loadChildren: () => import('./Guest/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'Guest/signup',
    loadChildren: () => import('./Guest/signup/signup.module').then( m => m.SignupPageModule)
  },
  
  {
    path: 'admin/fueltyperegistration',
    loadChildren: () => import('./admin/fueltyperegistration/fueltyperegistration.module').then( m => m.FueltyperegistrationPageModule)
  },
  {
    path: 'admin/carmodel',
    loadChildren: () => import('./admin/carmodel/carmodel.module').then( m => m.CarmodelPageModule)
  },
  {
    path: 'admin/carreg',
    loadChildren: () => import('./admin/carreg/carreg.module').then( m => m.CarregPageModule)
  },
  {
    path: 'admin/index',
    loadChildren: () => import('./admin/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'admin/carcompany',
    loadChildren: () => import('./admin/carcompany/carcompany.module').then( m => m.CarcompanyPageModule)
  },
  {
    path: 'customer/booking',
    loadChildren: () => import('./customer/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'admin/fueltypeview',
    loadChildren: () => import('./admin/fueltypeview/fueltypeview.module').then( m => m.FueltypeviewPageModule)
  },
  {
    path: 'admin/carregview',
    loadChildren: () => import('./admin/carregview/carregview.module').then( m => m.CarregviewPageModule)
  },
  {
    path: 'admin/carmodelview',
    loadChildren: () => import('./admin/carmodelview/carmodelview.module').then( m => m.CarmodelviewPageModule)
  },
  {
    path: 'customer/index',
    loadChildren: () => import('./customer/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'customer/carviewmore/:id',
    loadChildren: () => import('./customer/carviewmore/carviewmore.module').then( m => m.CarviewmorePageModule)
  },
  {
    path: 'admin/request',
    loadChildren: () => import('./admin/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'customer/profile',
    loadChildren: () => import('./customer/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'customer/profileedit',
    loadChildren: () => import('./customer/profileedit/profileedit.module').then( m => m.ProfileeditPageModule)
  },
  {
    path: 'admin/myrequestviewmore/:id',
    loadChildren: () => import('./admin/myrequestviewmore/myrequestviewmore.module').then( m => m.MyrequestviewmorePageModule)
  },
  {
    path: 'admin/acceptlist',
    loadChildren: () => import('./admin/acceptlist/acceptlist.module').then( m => m.AcceptlistPageModule)
  },
  {
    path: 'admin/rejectlist',
    loadChildren: () => import('./admin/rejectlist/rejectlist.module').then( m => m.RejectlistPageModule)
  },
  {
    path: 'admin/customerview/:id',
    loadChildren: () => import('./admin/customerview/customerview.module').then( m => m.CustomerviewPageModule)
  },
  {
    path: 'admin/report',
    loadChildren: () => import('./admin/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'admin/customerreport',
    loadChildren: () => import('./admin/customerreport/customerreport.module').then( m => m.CustomerreportPageModule)
  },
  {
    path: 'admin/carreport',
    loadChildren: () => import('./admin/carreport/carreport.module').then( m => m.CarreportPageModule)
  },
  {
    path: 'carshow',
    loadChildren: () => import('./admin/carshow/carshow.module').then( m => m.CarshowPageModule)
  },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
