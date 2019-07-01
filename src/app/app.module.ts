import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './ui/menu/component/menu.component';
import { HomePageComponent } from './projects/home-page/home-page.component';
import { KoaepComponent } from './projects/koaep/koaep.component';
import { AppRoutingModule } from './/app-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';
import { PaintBoardComponent } from './projects/paint-board/paint-board.component';
import { StrategyPatternComponent } from './projects/strategy-pattern/strategy-pattern.component';
import { PrototypePatternComponent } from './projects/prototype-pattern/prototype-pattern.component';
import { NgZoneTestComponent } from './projects/ng-zone-test/ng-zone-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    KoaepComponent,
    PaintBoardComponent,
    StrategyPatternComponent,
    PrototypePatternComponent,
    NgZoneTestComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromStore.reducers),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
