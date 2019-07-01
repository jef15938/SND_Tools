import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KoaepComponent } from './projects/koaep/koaep.component';
import { HomePageComponent } from './projects/home-page/home-page.component';
import { PaintBoardComponent } from './projects/paint-board/paint-board.component';
import { StrategyPatternComponent } from './projects/strategy-pattern/strategy-pattern.component';
import { PrototypePatternComponent } from './projects/prototype-pattern/prototype-pattern.component';
import { NgZoneTestComponent } from './projects/ng-zone-test/ng-zone-test.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: HomePageComponent },
  { path: 'koaep', component: KoaepComponent },
  { path: 'paintBoard', component: PaintBoardComponent},
  { path: 'strategyPattern', component: StrategyPatternComponent},
  { path: 'prototypePattern', component : PrototypePatternComponent},
  { path: 'ngZoneTest', component : NgZoneTestComponent}

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }