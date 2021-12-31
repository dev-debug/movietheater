import { actorsMovieDTO } from './../actors.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor(private actorService:ActorsService) { }
  control: FormControl=new FormControl();
  @ViewChild(MatTable) table: MatTable<any>;

  @Input()
 // selectedActors : []= [];
  selectedActors : actorsMovieDTO[] = [];

  // actorsToDisplay:actorsMovieDTO[]=[];
  columnsToDisplay!: ['picture', 'name', 'character', 'actions'];

  actorsToDisplay=[
{name:'Tom Holland',picture:'https://moviesapis.blob.core.windows.net/actors/1d99e4df-dfa5-4dde-9b4b-2d197f5fb116.jpg',character:''},
{name:'Chris Hemsworth',picture:'https://moviesapis.blob.core.windows.net/actors/1d99e4df-dfa5-4dde-9b4b-2d197f5fb116.jpg',character:''},
{name:'Samuel L Jackson',picture:'https://moviesapis.blob.core.windows.net/actors/1d99e4df-dfa5-4dde-9b4b-2d197f5fb116.jpg',character:''},
{name:'Tom Hanks',picture:'https://moviesapis.blob.core.windows.net/actors/1d99e4df-dfa5-4dde-9b4b-2d197f5fb116.jpg',character:''}
];

originalActors=this.actorsToDisplay;


ngOnInit(): void {
  this.control.valueChanges.subscribe(value=>{
    this.actorsToDisplay=this.originalActors;
    this.actorsToDisplay=this.actorsToDisplay.filter(actor=>actor.name.indexOf(value)!==-1)
    });
}

  // ngOnInit(): void {
  //   this.control.valueChanges.subscribe(value=>{
  //     if(typeof value==="string"){
  //       this.actorService.searchByName(value).subscribe(actors =>{
  //         this.actorsToDisplay=actors;
  //       });

  //     }
  //     else{
  //       this.actorService.searchByName(value.name).subscribe(actors =>{
  //         this.actorsToDisplay=actors;
  //       });

  //     }
  //     });
  // }

  optionSelected(event:MatAutocompleteSelectedEvent): void{
    console.log(event.option.value);
    this.control.patchValue('');
    if(this.selectedActors.findIndex(x=>x.id==event.option.value.id)!==-1){
      return;
    }
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    if(this.table!==undefined){
      this.table.renderRows();
    }
    }

    remove(actor: { name: any; }){
    const index= this.selectedActors.findIndex(a=>a.name===actor.name);
    this.selectedActors.splice(index,1);
    this.table.renderRows();
    }

    dropped(event: CdkDragDrop<any>) {
      const previousIndex = this.selectedActors.findIndex(actor=>actor===event.item.data);
      moveItemInArray(this.selectedActors,previousIndex,event.currentIndex);
      this.table.renderRows();
    }

}
