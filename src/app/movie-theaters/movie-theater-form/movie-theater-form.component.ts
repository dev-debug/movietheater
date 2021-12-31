import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap } from 'src/app/utilities/map/coordinates';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.model';
// import L from 'leaflet';
// delete L.Icon.Default.prototype._getIconUrl;

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  form!: FormGroup;
  @Input()
  model!: movieTheatersDTO;
  @Output()
  onSaveChanges=new EventEmitter<movieTheatersCreationDTO>();

initialCoordinates:coordinatesMap[]=[];

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:['',{
        validators:[Validators.required]
      }],
      logitude:['',{
        validators:[Validators.required]
      }],
      latitude:['',{
        validators:[Validators.required]
      }]
    });
    if(this.model!==undefined){
      console.log(this.model)
            this.form.patchValue(this.model);
    }
  }

onSelectedLocation(coordinates:coordinatesMap){
this.form.patchValue(coordinates);
this.form.valid;
console.log(this.form.valid)

// var customIcon = L.icon({
//   iconUrl: 'images/marker_icon_2x.png',
//   shadowUrl: 'images/marker_shadow.png'
// });
// L.marker(e.latlng).addTo(map);

// this.initialCoordinates.push({latitude:parseFloat(this.model.latitude.toString()),longitude:parseFloat(this.model.longitude.toString())});
this.initialCoordinates.push({latitude:coordinates.latitude,longitude:coordinates.longitude});

  }

  saveChanges(){
this.onSaveChanges.emit(this.form.value);
  }
}
