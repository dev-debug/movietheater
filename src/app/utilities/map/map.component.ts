import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap, coordinatesMapWithMessage } from './coordinates';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
@Output()
onSelectedLocation=new EventEmitter<coordinatesMap>();
@Input()
initialCoordinates : coordinatesMapWithMessage[]=[];
@Input()
editMode:boolean=true;

  ngOnInit(): void {
    this.layers=this.initialCoordinates.map(value=>{

      const m=marker([value.latitude,value.longitude]);
      if(value.message){
        m.bindPopup(value.message,{autoClose:false,autoPan:false});
      }
      return m;

    });
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18, attribution: 'Movies Theaters' })
    ],
    zoom: 14,
    center: latLng(41.71848793325782, -88.22265725471074)

  };

  layers: Marker<any>[]=[];

  handleMapClick(event: LeafletMouseEvent){
    if(this.editMode){
      const   latitude=event.latlng.lat;
  const  longitude=event.latlng.lng;
  this.layers=[];
  this.layers.push(marker([latitude,longitude]));
  this.onSelectedLocation.emit({latitude,longitude});

    }

  }

}
