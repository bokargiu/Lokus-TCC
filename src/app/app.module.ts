import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkMenuModule } from '@angular/cdk/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { SideMenuComponent } from './Components/UserPageComponents/side-menu/side-menu.component';
import { UserPageInterfaceComponent } from './Components/UserPageComponents/user-page-interface/user-page-interface.component';
import { SearchAreaComponent } from './Components/UserPageComponents/search-area/search-area.component';
import { ButtomAdBarComponent } from './Components/UserPageComponents/buttom-ad-bar/buttom-ad-bar.component';
import { LocalizeNearMapComponent } from './Components/UserPageComponents/localize-near-map/localize-near-map.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    SideMenuComponent,
    UserPageInterfaceComponent,
    SearchAreaComponent,
    ButtomAdBarComponent,
    LocalizeNearMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CdkMenuModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
