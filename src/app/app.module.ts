import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {LeafletModule} from '@asymmetrik/ngx-leaflet'
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
// import 'leaflet/dist/images/marker-shadow.png';

////////////////////

import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'src/assets/marker-icon-2x.png';
const iconUrl = 'src/assets/marker-icon.png';
const shadowUrl = 'src/assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;


//////////////////////////

// import * as L from 'leaflet'
// import 'leaflet/dist/leaflet.css';

// // stupid hack so that leaflet's images work after going through webpack
// import marker from 'leaflet/dist/images/marker-icon.png';
// import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// // delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: marker2x,
//     iconUrl: marker,
//     shadowUrl: markerShadow
// });





///////
//  import 'leaflet/dist/images/marker-shadow.png';
////////////////////////////////
//  import img from '.'
//import { Map, latLng, tileLayer, Layer, marker, icon } from '@asymmetrik/ngx-leaflet';
// import 'leaflet/dist/images/marker-shadow.png';

///////////////////////////
import {MarkdownModule} from 'ngx-markdown';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { LifecycletestComponent } from './lifecycletest/lifecycletest.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { CommonModule } from '@angular/common';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MovieTheaterFormComponent } from './movie-theaters/movie-theater-form/movie-theater-form.component';
import { MapComponent } from './utilities/map/map.component';
import { FormMovieComponent } from './movies/form-movie/form-movie.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { ActorsAutocompleteComponent } from './actors/actors-autocomplete/actors-autocomplete.component';
import { DisplayErrorsComponent } from './utilities/display-errors/display-errors.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { AuthorizeViewComponent } from './security/authorize-view/authorize-view.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { AuthenticationFormComponent } from './security/authentication-form/authentication-form.component';
import { JwtInterceptorService } from './security/jwt-interceptor.service';
import { UserIndexComponent } from './security/user-index/user-index.component';
//import { ActorsComponent } from './actors/actors/actors.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    LifecycletestComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    CreateActorComponent,
    IndexMovieTheaterComponent,
    CreateMovieTheaterComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditGenreComponent,
    EditMovieTheaterComponent,
    EditMovieComponent,
    FormGenreComponent,
    MovieFilterComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MovieTheaterFormComponent,
    MapComponent,
    FormMovieComponent,
    MultipleSelectorComponent,
    ActorsAutocompleteComponent,
    DisplayErrorsComponent,
    MovieDetailsComponent,
    AuthorizeViewComponent,
    LoginComponent,
    RegisterComponent,

    AuthenticationFormComponent,
     UserIndexComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule ,
    HttpClientModule,
    MarkdownModule.forRoot(),
    LeafletModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:JwtInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
