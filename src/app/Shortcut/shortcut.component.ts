import { Component, Input } from "@angular/core";

@Component({
  selector: "shortcut",
  templateUrl: "./shortcut.component.html",
  styleUrls: ["./shortcut.component.css"]
})
export class ShortcutComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() color: string;
}
