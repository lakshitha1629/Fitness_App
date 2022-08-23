import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './layout/about/about.component';
import { HomeComponent } from './layout/home/home.component';
import { BmiCalculatorComponent } from './features/bmi-calculator/bmi-calculator.component';
import { PlanScheduleComponent } from './features/plan-schedule/plan-schedule.component';
import { WorkoutScheduleComponent } from './features/workout-schedule/workout-schedule.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'bmi-calculator',
    component: BmiCalculatorComponent,
  },
  {
    path: 'plan-schedule',
    component: PlanScheduleComponent,
  },
  {
    path: 'workout-schedule',
    component: WorkoutScheduleComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
