import { Output, EventEmitter, Injectable } from "@angular/core"

// @Injectable()
export class SideBarToggleService {

  private isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  public toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
}

