import { Component } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})

export class HobbyComponent { 
  title = "XZ"
  time = Date.now()

  imgs = [
    "/assets/d.jpg",
    "/assets/kr.jpg",
    "/assets/kr2.jpeg"
  ]

  
  imgClick = (event: Event) => {
    console.log((event.target as HTMLImageElement).getAttribute('src')); 
    console.log("clicked@" + (event.target as HTMLImageElement).src);
  }
 
}
