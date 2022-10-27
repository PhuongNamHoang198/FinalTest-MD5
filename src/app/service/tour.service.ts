import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Tour} from "../model/tour";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http:HttpClient) {
  }

  getAll(): Observable<Tour[]> {
    return this.http.get<Tour[]>(API_URL + '/tuors');
  }

  findById(id: number) {
    return this.http.get<Tour>(`${API_URL}/tuors/${id}`);
  }

  save(tour: Tour): Observable<Tour> {
    console.log(API_URL+`/tuors`)
    return this.http.post<Tour>(API_URL + `/tuors`, tour);
  }

  delete(id: number | undefined): Observable<Tour> {
    return this.http.delete<Tour>(`${API_URL}/tuors/${id}`);
  }

  edit(id: number, temp: Tour) {
    return this.http.put<Tour>(`${API_URL}/tuors/${id}`, temp);
  }
}
