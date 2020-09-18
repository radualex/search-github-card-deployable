import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "recent-search-item",
  templateUrl: "./r-search-item.component.html",
  styleUrls: ["./r-search-item.component.css"]
})
export class RecentSearchItemComponent {
  @Input() text: string;
  @Input() index: number;
  @Output() closeClicked = new EventEmitter<number>();
  
  handleOnClick() {
    this.closeClicked.emit(this.index);
  };
}
