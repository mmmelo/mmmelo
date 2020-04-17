import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {ProfileService} from "./profile.service";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public profileUser: any;

  colors = [
    '#fbe9e7',
    '#ffccbc',
    '#ffab91',
    '#ff8a65',
    '#ff7043',
    '#ff5722',
    '#f4511e',
    '#e64a19',
    '#d84315',
    '#bf360c',
    '#ff9e80',
    '#ff6e40',
    '#ff3d00',
    '#dd2c00',
  ];
  items: Observable<any[]>;
  constructor( firestore: AngularFirestore, private profileFile: ProfileService, private metaTag: Meta, private titleService: Title) {
    this.items = firestore.collection('users').valueChanges();
  }

  ngOnInit(): void {

    this.titleService.setTitle( "Marcel Melo | Home");

    this.profileFile.getProfileFile().subscribe( result => {
      console.log(result.data);
      result.data.skills = this.getRandomColor(result.data.skills);
      this.profileUser = result.data;
      console.log( 'new', result);
      return result;
    },error => error);
  }

  getRandomColor( data) {
    for ( const index in data) {
       data[index] = ( { name: data[index], color: this.colors[Math.floor(Math.random() * (this.colors.length - 1)) + 0]});
    }
    return data;
  }
}
