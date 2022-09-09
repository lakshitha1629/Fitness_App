import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { BannerComponent } from './layout/banner/banner.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { HttpClientModule } from '@angular/common/http';
import { ImageUploaderModule } from 'ngx-image-uploader-next';
import { NgxSpinnerModule } from "ngx-spinner";
import { BmiCalculatorComponent } from './features/bmi-calculator/bmi-calculator.component';
import { PlanScheduleComponent } from './features/plan-schedule/plan-schedule.component';
import { WorkoutScheduleComponent } from './features/workout-schedule/workout-schedule.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { AddMealPlanComponent } from './features/add-meal-plan/add-meal-plan.component';
import { AddWorkoutScheduleComponent } from './features/add-workout-schedule/add-workout-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TopBarComponent,
    BannerComponent,
    BmiCalculatorComponent,
    PlanScheduleComponent,
    WorkoutScheduleComponent,
    LoginComponent,
    RegistrationComponent,
    AddMealPlanComponent,
    AddWorkoutScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    ImageUploaderModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  exports: [BrowserModule],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: environment.apiUrl } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
