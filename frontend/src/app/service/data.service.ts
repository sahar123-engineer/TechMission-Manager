import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/car');
  }
  insertData(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/car/create', data);
  }
  updateData(id: number,data:any){
    const url = 'http://127.0.0.1:8000/api/car/' + id + '/update';
    return this.httpClient.put(url,data);
  }
  deleteData(id: number){
    const url = 'http://127.0.0.1:8000/api/car/' + id + '/destroy';
    return this.httpClient.delete(url);
  }
}
