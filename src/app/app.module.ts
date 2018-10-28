import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthComponent} from './authorization/auth.component';
import {MarksComponent} from "./marks/marks.component";
import {MissesComponent} from "./misses/misses.component";
import {StudentComponent} from "./student/student.component";
import {DebtsComponent} from "./debts/debts.component";
import {TabsModule} from "ngx-bootstrap";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdditionalLinksComponent } from './additional-links/additional-links.component';
import { MenuComponent } from './menu/menu.component';
import { MailComponent } from './mail/mail.component';

const appRoutes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'marks', component: MarksComponent},
  {path: 'misses', component: MissesComponent},
  {path: 'student', component: StudentComponent},
  {path: 'debts', component: DebtsComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MarksComponent,
    MissesComponent,
    StudentComponent,
    DebtsComponent,
    AdditionalLinksComponent,
    MenuComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TabsModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
