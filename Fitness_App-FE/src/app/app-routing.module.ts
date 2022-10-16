import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './layout/about/about.component';
import { HomeComponent } from './layout/home/home.component';
import { BmiCalculatorComponent } from './features/bmi-calculator/bmi-calculator.component';
import { PlanScheduleComponent } from './features/plan-schedule/plan-schedule.component';
import { WorkoutScheduleComponent } from './features/workout-schedule/workout-schedule.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { AddMealPlanComponent } from './features/add-meal-plan/add-meal-plan.component';
import { AddWorkoutScheduleComponent } from './features/add-workout-schedule/add-workout-schedule.component';
import { ApproveWorkoutComponent } from './features/approve-workout/approve-workout.component';
import { ReportComponent } from './features/report/report.component';

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
  {
    path: 'report',
    component: ReportComponent,
  },
  {
    path: 'add-meal-plan',
    component: AddMealPlanComponent,
  },
  {
    path: 'add-workout-schedule',
    component: AddWorkoutScheduleComponent,
  },
  {
    path: 'schedules',
    component: ApproveWorkoutComponent,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
