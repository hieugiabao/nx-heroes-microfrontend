import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroesComponent,
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent,
      },
    ]),
  ],
  declarations: [HeroesComponent, HeroDetailComponent],
})
export class HeroesModule {}
