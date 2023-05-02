import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  font: string;
  fonts = [
    "monospace",
    "serif",
    "Roboto",
    "sans-serif"
  ];
  listFontsShowed: boolean;
  @Output() themeColor = new EventEmitter<boolean>();
  @Output() Globalfont = new EventEmitter<string>();
  checkbox: boolean;
  status: string;
  constructor () {
    this.checkbox = true;
    this.status = 'Dark';
    this.listFontsShowed = false;
    this.font = "Select Font"
  }
  cheackBoxStatus(event: any) {
   // console.log(this.checkbox);
    this.chageText();
    this.themeColor.emit(this.checkbox);
  }
  chageText(){
    if (!this.checkbox) {
     this.status = 'Ligth';
    }else{
      this.status = 'Dark';
    }
  }
  toggleList(){
    this.listFontsShowed = !this.listFontsShowed;
  }
  fontSeleted(event: any){
    this.font = event.target.textContent;
    this.Globalfont.emit(this.font);
    this.listFontsShowed = false;
  }
}
