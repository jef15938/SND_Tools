import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './ui/menu/component/menu.component';
import { HomePageComponent } from './projects/home-page/home-page.component';
import { KoaepComponent } from './projects/koaep/koaep.component';
import { AppRoutingModule } from './/app-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './angularStore';
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
import { LayoutPracticeComponent } from './projects/layout-practice/layout-practice.component';
import { PongPongPayComponent } from './projects/pong-pong-pay/pong-pong-pay.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    KoaepComponent,
    PaintBoardComponent,
    StrategyPatternComponent,
    PrototypePatternComponent,
    NgZoneTestComponent,
    WebParameterTestComponent,
    LocalStorageTestComponent,
    ArraySortComponent,
    TreeComponent,
    NodeTreeComponent,
    ZombieGameComponent,
    NestedLoopRefactorComponent,
    GetSetGeneratorComponent,
    LayoutPracticeComponent,
    PongPongPayComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(fromStore.reducers),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
