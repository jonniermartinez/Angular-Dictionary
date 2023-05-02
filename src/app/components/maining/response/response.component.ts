import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  @ViewChild('audioElement')
  audioPlayerRef!: ElementRef;
  @Input() data: any;
  wordData: any;
  meanings: any;
  phonetic: any;
  phonetics: [] = [];
  sourceUrls: any;
  word: any;
  audio: string = '';
  
constructor(private elementRef: ElementRef){
  this.data = [];
}

ngOnInit(){
  this.meanings = this.data[0].meanings;
  this.phonetic = this.data[0].phonetic;
  this.sourceUrls = this.data[0].sourceUrls;
  this.word = this.data[0].word;
  this.phonetics = this.data[0].phonetics;
  this.searchAudio(this.phonetics);  
  //console.log(this.data);
}

searchAudio (phonetics: []){
  phonetics.map((item: any) => {
    item.audio != '' ? this.audio = item.audio : 'Objeto sin audio';
  })
}
play(){
  const audioPlayer = this.audioPlayerRef.nativeElement as HTMLAudioElement;
  audioPlayer.play()
}

}
