import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./Search/search.component";
import { ShortcutComponent } from "./Shortcut/shortcut.component";
import { RecentSearchItemComponent } from "./RecentSearchItem/r-search-item.component";
import { OverlayComponent } from "./Overlay/overlay.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShortcutComponent,
    RecentSearchItemComponent,
    OverlayComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
