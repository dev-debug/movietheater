import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap } from './coordinates';

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
initialCoordinates : coordinatesMap[]=[];
  ngOnInit(): void {
    this.layers=this.initialCoordinates.map(value=>marker([value.latitude,value.longitude]));
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 14,
    center: latLng(41.71848793325782, -88.22265725471074)

  };

  layers: Marker<any>[]=[];
  handleMapClick(event: LeafletMouseEvent){
  const   latitude=event.latlng.lat;
  const  longitude=event.latlng.lng;
  //console.log({latitude,longitude});
  this.layers=[];
  this.layers.push(marker([latitude,longitude]));
  this.onSelectedLocation.emit({latitude,longitude});

  }

}
