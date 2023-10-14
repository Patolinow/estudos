import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import Hero from '../interfaces/hero';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>()

  constructor(private heroService: HeroService) {}

  search(searchTerm: string) {
    this.searchTerms.next(searchTerm)
    // this.heroService
    //   .searchHeroes(searchTerm)
    //   .subscribe((heroes) => (this.heroes$ = heroes));
  }

  ngOnInit():void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

            // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }
}
