import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

const APP_ID = 'angular-universal-firebase';

// Materialize
import {MaterializeModule} from 'angular2-materialize';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterializeModule,
        CoreModule,
        AppRoutingModule,
        BrowserModule.withServerTransition({ appId: APP_ID })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
