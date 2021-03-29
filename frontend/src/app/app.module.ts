import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';
import { NgxCurrencyModule } from "ngx-currency";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SectionsComponent } from './sections/sections.component';
import { InspirationComponent } from './sections/inspiration/inspiration.component';
import { DemandComponent } from './sections/demand/demand.component';
import { ContextComponent } from './sections/context/context.component';
import { AudienceComponent } from './sections/audience/audience.component';
import { ObjectivesComponent } from './sections/objectives/objectives.component';
import { ObjectiveComponent } from './sections/objective/objective.component';
import { MethodologyComponent } from './sections/methodology/methodology.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDownloadComponent } from './project/project-download/project-download.component';
import { DialogComponent } from './project/dialog/dialog.component';
import { OldProjectsComponent } from './old-projects/old-projects.component';

//services
import { RegisterService } from './authentication/register/register.service';
import { AuthenticationService } from './authentication/shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
    InspirationComponent,
    DemandComponent,
    ContextComponent,
    AudienceComponent,
    ObjectivesComponent,
    MethodologyComponent,
    ToolbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ObjectiveComponent,
    ProjectComponent,
    ProjectDownloadComponent,
    DialogComponent,
    OldProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialFileInputModule,
    MatTooltipModule,
    MatSliderModule,
    NgxCurrencyModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule,
    MatGridListModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [RegisterService, AuthenticationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
