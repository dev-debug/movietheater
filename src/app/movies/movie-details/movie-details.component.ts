import { movieDTO } from './../movies.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { coordinatesMapWithMessage } from 'src/app/utilities/map/coordinates';
import { RatingService } from 'src/app/utilities/rating.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private moviesService: MoviesService,
    private activatedRoute:ActivatedRoute,
    private sanitiser:DomSanitizer,
    private ratingService: RatingService) { }

    movie:movieDTO;
    trailerURL: SafeResourceUrl;
    releaseDate:Date;
    coordinates:coordinatesMapWithMessage[]=[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.moviesService.getById(params.id).subscribe(movie=>{
        this.movie=movie;
        this.releaseDate=new Date(this.releaseDate);
        this.trailerURL=this.generateYoutubeURLForEmbeddedVideo (this.trailerURL);
        this.coordinates=movie.movieTheaters.map(movieTheater=>{

          return{latitude:movieTheater.latitude,longitude:movieTheater.longitude,message:movieTheater.name};
        });

      });
    });
  }

  generateYoutubeURLForEmbeddedVideo(url:any):SafeResourceUrl{
    if(!url)
    {
      return '';
    }

    let videoId=url.split('v=')[1];
    const ampersandPosition=videoId.indexOf('&');
    if(ampersandPosition!==-1){
      videoId=videoId.substring(0,ampersandPosition);
    }
    return this.sanitiser.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  onRating(rate:number){
this.ratingService.rate(this.movie.id,rate).subscribe(()=>{
  Swal.fire("Success","Your vote has been recieved","success");
});
  }
}
