import { Component, Input, Output, EventEmitter } from "@angular/core";
import { GithubRepo } from "src/models/githubRepo.dto";

@Component({
  selector: "overlay",
  templateUrl: "./overlay.component.html",
  styleUrls: ["./overlay.component.css"]
})
export class OverlayComponent {
  @Input() data: GithubRepo[];
  @Output() closeClicked = new EventEmitter<string>();

  isShown(): boolean {
    return this.data.length !== 0;
  }

  handleOnClick(item: GithubRepo) {
    this.closeClicked.emit(item.toString());
  }
}
