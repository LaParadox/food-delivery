import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  url: string = "Customers";
  constructor(private http: HttpClient) { }

  result!: string;

  ngOnInit() {
    this.findUrl().subscribe((x) => {
      this.result = x
      console.log(this.result);   
    });
  }

  private findUrl(): Observable<string> {
     return this.http.get<string>(`${environment.apiUrl}/${this.url}`);
  }

}
