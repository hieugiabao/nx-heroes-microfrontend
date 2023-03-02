import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Hero } from 'models';
import { HeroService } from 'shared-data-access';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  defaultImage =
    'https://i.postimg.cc/d34zPbkH/124983-boy-demon-anime-picture-free-download-image.png';

  constructor(
    private readonly heroService: HeroService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.cdr.markForCheck();
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
      this.cdr.markForCheck();
    });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe({
      complete: () => {
        this.heroes = this.heroes.filter((h) => h !== hero);
        this.cdr.markForCheck();
      },
    });
  }
}
