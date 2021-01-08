import { Component, Input, OnInit } from '@angular/core';
import { AnimalIconsEnum } from "../../core/animal-icons.enum";

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  @Input() name: string;
  public icon: string;

  constructor() {
  }

  ngOnInit(): void {
    this.setIconAccordingToName();
  }

  private setIconAccordingToName(): void {
    if (this.name) {
      this.icon = `assets/images/icons/${AnimalIconsEnum[this.name]}.png`;
    }
  }
}
