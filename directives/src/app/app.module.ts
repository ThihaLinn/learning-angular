import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloDirective } from './common/views/common-directive';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './common/views/hello/hello.component';
import { HelloDirectiveComponent } from './common/views/atritube-directive/helloDirective.component';
import { StructureDirectiveComponent } from './common/views/structure-directive/structure-directive.component';
import { TemplateDirectiveDirective } from './common/template-directive.directive';
import { NgIfDirectiveComponent } from './common/views/ngIf-directive/ngIf-directive.component';
import { AppCardComponent } from './common/app-card/app-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloDirectiveComponent,
    HelloDirective,
    TemplateDirectiveDirective,
    StructureDirectiveComponent,
    AppCardComponent,
    NgIfDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/hello', pathMatch: 'full' },
      { path: 'hello', component: HelloComponent },
      { path: 'attr', component: HelloDirectiveComponent},
      { path: 'str', component: StructureDirectiveComponent },
      { path: 'ng-if', component: NgIfDirectiveComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
