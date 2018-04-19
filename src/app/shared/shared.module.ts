import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {ToolbarComponent} from './toolbar/toolbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule,
    MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatListModule
  ],
  declarations: [ToolbarComponent, NavigationComponent, HomeComponent],
  exports: [
    ToolbarComponent, NavigationComponent,
    MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule]
})
export class SharedModule {
  /**
   * Use this method in your root module to provide singleton services from ALL modules including this shared one.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      // put here providers of singleton services from ALL modules including this shared one
      providers: []
    };
  }
}
