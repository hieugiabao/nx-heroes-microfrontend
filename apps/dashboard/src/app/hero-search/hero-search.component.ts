import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from 'models';
import { HeroService } from 'shared-data-access';

@Component({
  selector: 'app-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[] | null>;
  private searchTerms = new Subject<string>();

  constructor(private readonly heroService: HeroService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300), // wait 300ms after each keystroke before considering the term
      distinctUntilChanged(), // ignore new term if same as previous term
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
