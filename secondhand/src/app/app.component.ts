import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public Guest = [
    { title: 'Index', url: '/Guest/index', icon: 'mail' },
    { title: 'Signin', url: '/Guest/signin', icon: 'paper-plane' },
    { title: 'Signup', url: '/Guest/signup', icon: 'heart' },
    { title: 'Admin Login', url: '/Guest/adminlogin', icon: 'archive' },
  ];
  public Admin = [
    { title: 'Logout', url: '/Guest/index', icon: 'mail' },
    { title: 'Report', url: '/admin/report', icon: 'paper-plane' },
    { title: 'Fuel type registration', url: '/admin/fueltyperegistration', icon: 'archive' },
    { title: 'car model registration', url: '/admin/carmodel', icon: 'archive' },
  { title: 'car registration', url: '/admin/carreg', icon: 'archive' },
  { title: 'car company registration', url: '/admin/carcompany', icon: 'archive' },
  { title: 'fuel type view', url: '/admin/fueltypeview', icon: 'archive' },
  { title: 'car view', url: '/admin/carregview', icon: 'archive' },
  { title: 'car model view', url: '/admin/carmodelview', icon: 'archive' },
  { title: 'request', url: '/admin/request', icon: 'archive' },
  


  ];
   public customer = [
    { title: 'Index', url: '/customer/index', icon: 'mail' },
    { title: 'Logout', url: '/Guest/index', icon: 'mail' },
    { title: 'booking', url: '/customer/booking', icon: 'mail' },
    { title: 'profile', url: '/customer/profile', icon: 'archive' },
  ];
  public sidemenutitle = 'Menu';
  public menuitems: any;
  
  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if(this.router.url.includes('admin/'))
        {
         this.menuitems=this.Admin;
         this.sidemenutitle='Admin Dashboard';
        }
        if(this.router.url.includes('Guest/'))
        {
         this.menuitems=this.Guest;
         this.sidemenutitle='Guest Dashboard';
        }
         if(this.router.url.includes('customer/'))
         {
          this.menuitems=this.customer;
         this.sidemenutitle='customer Dashboard';
         }
      }
    });
  }
}
