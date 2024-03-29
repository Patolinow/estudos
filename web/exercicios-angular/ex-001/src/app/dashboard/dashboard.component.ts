import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import Hero from '../interfaces/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  heroes: Hero[] = []
  constructor(private heroService: HeroService) {}

  ngOnInit():void {
    this.getHeroes()
  }

  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5))
  }
}
