import { Component } from '@angular/core';
import { DictionaryAPIService } from 'src/app/services/dictionary-api.service';

@Component({
  selector: 'app-maining',
  templateUrl: './maining.component.html',
  styleUrls: ['./maining.component.css']
})
export class MainingComponent {
  data: [] = []
  loading: boolean = false;
  error: boolean = false;
  word: string = '';
  constructor (private dictionaty: DictionaryAPIService){
      this.data = [];
  }
ngOnInit(){
  this.dictionaty.loading$.subscribe(res => {
    this.loading = res;
  })
  this.dictionaty.error$.subscribe(res => {
    this.error = res;
    this.loading = false;
  })
  this.dictionaty.word$.subscribe(res => {
    this.word = res;
  })
this.loadData();
}
loadData(){

  this.dictionaty.getWordData().subscribe( data => {
     this.data = data;
     this.dictionaty.setLoaderFalse()

  })
}

}
