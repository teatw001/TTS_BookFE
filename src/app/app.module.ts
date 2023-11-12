import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/Clients/header/header.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BellOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDemoCarouselLoopComponent } from './components/Antd/nz-carousel/nz-carousel.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SliderComponent } from './components/Antd/slider/slider.component';
import { FooterComponent } from './components/Clients/footer/footer.component';
import { HomepageComponent } from './pages/Clients/homepage/homepage.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDemoBreadcrumbWithIconComponent } from './components/Antd/nz-demo-breadcrumb.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { BreadcrumbComponent } from './components/Antd/breadcrumb/breadcrumb.component';
import { DrawerModuleComponent } from './components/Antd/drawer-module/drawer-module.component';
import { NzDemoDrawerBasicRightComponent } from './components/Antd/drawer-module-right';
import { NzDemoBadgeLinkComponent } from './components/Antd/badge';
import { CartHeaderComponent } from './components/Antd/cartHeader';
import { PageNotFoundComponent } from './components/Clients/page-not-found/page-not-found.component';
import { LayoutUserComponent } from './Layout/Clients/layout-user/layout-user.component';
import { LayoutAdminComponent } from './Layout/Clients/layout-admin/layout-admin.component';
import { ProductComponent } from './components/product/product.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { FlashSaleComponent } from './components/Clients/flash-sale/flash-sale.component';
import { ToppicblockComponent } from './components/Clients/toppicblock/toppicblock.component';
import { SpecialOfferComponent } from './components/Clients/special-offer/special-offer.component';
import { NzDemoStatisticCountdownComponent } from './components/Antd/Statistic';
import { BookOnsaleComponent } from './components/Clients/book-onsale/book-onsale.component';
import { SearchComponent } from './components/Clients/search/search.component';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { MenuComponent } from './components/Clients/search/menu/menu.component';
import { NzDemoDropdownEventComponent } from './components/Antd/dropdown';
import { LimitWordsPipe } from './components/Clients/pipesplice';
import { CurrencyFormatPipe } from './components/Clients/pipeformatprice';
const icons = [BellOutline, UserOutline];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NzDemoCarouselLoopComponent,
    SliderComponent,
    FooterComponent,
    HomepageComponent,
    NzDemoBreadcrumbWithIconComponent,
    BreadcrumbComponent,
    DrawerModuleComponent,
    NzDemoDrawerBasicRightComponent,
    NzDemoBadgeLinkComponent,
    CartHeaderComponent,
    PageNotFoundComponent,
    LayoutUserComponent,
    LayoutAdminComponent,
    ProductComponent,
    FlashSaleComponent,
    ToppicblockComponent,
    SpecialOfferComponent,
    NzDemoStatisticCountdownComponent,
    BookOnsaleComponent,
    CurrencyFormatPipe,
    SearchComponent,
    MenuComponent,
    LimitWordsPipe,
    NzDemoDropdownEventComponent,
  ],

  imports: [
    NzDropDownModule,
    NzBadgeModule,
    NzDrawerModule,
    BrowserModule,
    NzStatisticModule,
    NzBreadCrumbModule,
    NzFormModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzTabsModule,
    NzCarouselModule,
    NzButtonModule,
    NzInputModule,

    NzIconModule.forRoot(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
