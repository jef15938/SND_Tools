import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KoaepComponent } from './projects/koaep/koaep.component';
import { HomePageComponent } from './projects/home-page/home-page.component';
import { PaintBoardComponent } from './projects/paint-board/paint-board.component';
import { StrategyPatternComponent } from './projects/strategy-pattern/strategy-pattern.component';
import { PrototypePatternComponent } from './projects/prototype-pattern/prototype-pattern.component';
import { NgZoneTestComponent } from './projects/ng-zone-test/ng-zone-test.component';
import { WebParameterTestComponent } from './projects/web-parameter-test/web-parameter-test.component';
import { LocalStorageTestComponent } from './projects/local-storage-test/local-storage-test.component';
import { ArraySortComponent } from './projects/array-sort/array-sort.component';
import { TreeComponent } from './projects/tree/tree.component';
import { NodeTreeComponent } from './projects/node-tree/node-tree.component';
import { ZombieGameComponent } from './projects/zombie-game/zombie-game.component';
import { NestedLoopRefactorComponent } from './projects/nested-loop-refactor/nested-loop-refactor.component';
import { GetSetGeneratorComponent } from './projects/get-set-generator/get-set-generator.component';

export const routes: Routes = [
  { path: 'koaep', component: KoaepComponent },
  { path: 'paintBoard', component: PaintBoardComponent},
  { path: 'strategyPattern', component: StrategyPatternComponent},
  { path: 'prototypePattern', component : PrototypePatternComponent},
  { path: 'ngZoneTest', component : NgZoneTestComponent},
  { path: 'webParameterTest', component : WebParameterTestComponent},
  { path: 'localStorageTest', component : LocalStorageTestComponent},
  { path: 'arraySort', component : ArraySortComponent},
  { path: 'nodeTree', component: NodeTreeComponent},
  { path: 'tree', component: TreeComponent},
  { path: 'zombieGame', component: ZombieGameComponent},
  { path: 'nestedLoopRefactor', component: NestedLoopRefactorComponent},
  { path: 'getSetGenerator', component: GetSetGeneratorComponent},
  { path: '', component: HomePageComponent }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
