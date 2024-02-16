import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule } from '@angular/forms';
import { DirectiveDirective } from './directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ResultsComponent,
    DirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
