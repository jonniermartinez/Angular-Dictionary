import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryAPIService {
  private data = new Subject<any>();
  private loader = new Subject<boolean>();
  private error = new Subject<boolean>();
  private word = new Subject<string>();
  loading$ = this.loader.asObservable();
  error$ = this.error.asObservable();
  word$ = this.word.asObservable();
  constructor(private http: HttpClient) {}

  getWordMaining(word: string){
    this.loader.next(true);
    this.word.next(word);
    //console.log(word)
    this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).subscribe(res => {
      const data = res;
      this.data.next(data);
      this.error.next(false);

    }, error => {
      const data = error;
      this.error.next(true);
      
    })
  }
  addWordData (data: []){
      this.data.next(data);
  }
  getWordData (): Observable<[]>{
    return this.data;
  }
  setLoaderFalse (){
    this.loader.next(false);
  }

}
