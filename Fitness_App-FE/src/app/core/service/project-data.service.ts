import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor(private http: HttpClient) { }

  getPrediction(data: any) {
    return this.http.post<any>(`${environment.apiUrl}getPredictionOutput`, data);
  }

  addUser(data: any){
    return this.http.post<any>(`${environment.apiUrl}user`, data);
  }

  login(data: any){
    return this.http.post<any>(`${environment.apiUrl}userLogin`, data);
  }

  addMealPlan(data: any){
    return this.http.post<any>(`${environment.apiUrl}mealPlan`, data);
  }

  getUsers(){
    return this.http.get<any>(`${environment.apiUrl}user`);
  }

  addWorkoutPlan(data: any){
    return this.http.post<any>(`${environment.apiUrl}schedule`, data);
  }

  getMealPlanByUserId(id){
    return this.http.get<any>(`${environment.apiUrl}mealPlan/${id}`);
  }

  getSchedulePlanByUserId(id){
    return this.http.get<any>(`${environment.apiUrl}customizedSchedule/${id}`);
  }

  getMealPlan(){
    return this.http.get<any>(`${environment.apiUrl}mealPlan`);
  }

  getSchedulePlan(){
    return this.http.get<any>(`${environment.apiUrl}schedule`);
  }

  approveSchedulePlan(data: any){
    return this.http.post<any>(`${environment.apiUrl}approveCustomizedSchedule`, data);
  }

  addUserPayment(data: any){
    return this.http.post<any>(`${environment.apiUrl}userAddPayment`, data);
  }

  getUserPaymentStatus(id){
    return this.http.get<any>(`${environment.apiUrl}userPaymentStatus/${id}`);
  }


}

