import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'note';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAdd8OTPEhdW4Nv3wau32zOv8pNBGQlYYM',
      authDomain: 'lucid-note-fbf29.firebaseapp.com',
    });
  } 

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
