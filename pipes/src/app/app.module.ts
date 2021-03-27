import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UcfirstPipe } from './ucfirst.pipe';
import { ReversePipe } from './reverse.pipe';
import { JoinPipe } from './join.pipe';
import { SumPipe } from './sum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UcfirstPipe,
    ReversePipe,
    JoinPipe,
    SumPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
