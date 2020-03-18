import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FamilyService } from './providers/family.service';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { FamilyComponent } from './containers/family/family.component';
import { SiblingsComponent } from './components/siblings/siblings.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCardComponent,
    FamilyComponent,
    SiblingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FamilyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
