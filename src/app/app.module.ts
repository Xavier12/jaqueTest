import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { ResultsTableComponent } from './shared/components/results-table/results-table.component';
import { CardComponent } from './shared/components/card/card.component';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ResultsTableComponent,
    CardComponent,
    DialogAddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
