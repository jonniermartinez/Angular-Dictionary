import { Component } from '@angular/core';
import { DictionaryAPIService } from 'src/app/services/dictionary-api.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent {
  searchValue:string

  constructor(private dictionary: DictionaryAPIService){
    this.searchValue = '';

  }
  onInptChange(event: any){
  }
  wordToSearch(){
    //console.log('search Value: ', this.searchValue);
    const data = this.dictionary.getWordMaining(this.searchValue);
    
  }
  onKeyDown(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      // Lógica a realizar cuando se presione la tecla Enter
      this.wordToSearch();
      // Aquí puedes llamar a funciones, realizar acciones, etc.
    }
  }
}
