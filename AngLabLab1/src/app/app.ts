import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './componenet/header/header';
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Projects } from "./projects/projects";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, Hero, About, Projects, Skills, Footer],
  template: `

    <router-outlet />
    <!-- 
    <app-header />
    <app-home />
    <h1>Welcome to {{title}}!</h1> -->
    <app-hero></app-hero>
    <app-about></app-about>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class App {
  protected title = 'AngLabLab1';
}
