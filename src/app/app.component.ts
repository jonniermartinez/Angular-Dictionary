import { Component } from '@angular/core';
import { FontService } from './services/font.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dictionaty-APP';
  ligth = false; 
  dark = true; 
  font:string ;


  constructor(private fontService: FontService){
    this.font = '';
    this.fontService.font$.subscribe(font => {
      this.font = font;
    });
  }


  themeColorChanger(status: boolean){
    if (!status) {
      this.ligth = true;
      this.dark = false;
     }else{
      this.ligth = false;
      this.dark = true;
     }
  }

  handlerFont(event: string){
    this.font = event;
  }
}
