import { map, Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from 'models';
import { HeroService } from 'shared-data-access';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  defaultImage =
    'https://i.postimg.cc/d34zPbkH/124983-boy-demon-anime-picture-free-download-image.png';

  constructor(private readonly heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.heroService
      .getHeroes()
      .pipe(map((heroes) => heroes.slice(1, 5)));
  }
}
