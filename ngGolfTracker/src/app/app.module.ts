import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundComponent } from './components/round/round.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AveragesPipe } from './averages-pipe';

@NgModule({
  declarations: [AppComponent, RoundComponent, AveragesPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [AveragesPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
