import {Component, OnInit} from '@angular/core';
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {environment} from "../environments/environment";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mmmelo website';
  debugMode = environment.debug;

  // Icons
  faHome = faHome;
  faGithub = faGithub;


  constructor( private metaTag: Meta) {

  }

  ngOnInit(): void {

    this.metaTag.addTags([
      { name: 'keywords', content: "marcel melo, php, css, javaScript, mysql, angular, nodejs, ionic, laravel" },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Marcel Melo' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
      {httpEquiv: 'Content-Type', content: 'text/html'},
      {name: 'description', content: 'My personal website, marcel melo, developer'},
    ]);

  }

}
