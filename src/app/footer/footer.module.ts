import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFooterComponent } from './main-footer/main-footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { TermoDeUsoComponent } from './termo-de-uso/termo-de-uso.component';

@NgModule({
    declarations: [
        MainFooterComponent,
        TermoDeUsoComponent
    ],
    exports: [
        MainFooterComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        RouterModule
    ]
})
export class FooterModule { }
