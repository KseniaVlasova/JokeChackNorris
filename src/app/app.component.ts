import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChackNorris';
  joke:string='';
  
  constructor(private httpService: HttpService){}

  getJoke(){
    this.httpService.getData().subscribe(v => this.writeToJoke(v));
  }

  writeToJoke(obj:any){
    this.joke = obj['value'];
  }
}
