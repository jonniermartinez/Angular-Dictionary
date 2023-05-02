import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontService {
  private fontSource = new Subject<string>();
  font$ = this.fontSource.asObservable();
  constructor() { 
    
  }

  setFont(font: string){
    this.fontSource.next(font);
  }
}
