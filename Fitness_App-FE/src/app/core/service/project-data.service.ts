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

}

