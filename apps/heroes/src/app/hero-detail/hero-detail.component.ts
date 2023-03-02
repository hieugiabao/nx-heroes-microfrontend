import { Subscription, switchMap, tap } from 'rxjs';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'models';
import { HeroService } from 'shared-data-access';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero?: Hero | undefined = undefined;
  subscription!: Subscription;
  defaultImage =
    'https://i.postimg.cc/d34zPbkH/124983-boy-demon-anime-picture-free-download-image.png';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly heroService: HeroService,
    private readonly location: Location,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(switchMap((params) => this.heroService.getHero(+params['id'])))
      .pipe(
        tap((hero) => {
          this.hero = hero;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
