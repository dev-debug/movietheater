import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tobase64 } from '../utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {
                                                                                                                                                                                                                                                                                                                                                                                                                                       
  constructor() { }
imageBase64!:string;
@Output()
onImageSelected=new EventEmitter<File>();
  @Input()
  // urlCurrentImage!: string
  urlCurrentImage: any ='';
  ngOnInit(): void {
  }
  
change(event:any){
if(event.target.files.length>0){
 const file: File =event.target.files[0];
 tobase64(file).then((value:any) => 
    {
     return this.imageBase64 = value;
   });
   this.onImageSelected.emit(file);
   this.urlCurrentImage = null;

}
}
}
