import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule implements DoBootstrap {
  constructor(private _injector: Injector) {
  }

  ngDoBootstrap(): void {
    customElements.define(
      'angular-template-widget',
      createCustomElement(AppComponent, { injector: this._injector })
    )
  }
}
