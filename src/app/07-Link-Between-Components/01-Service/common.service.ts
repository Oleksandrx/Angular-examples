import { EventEmitter, Output } from "@angular/core";

export class CommonService {

  private clickCnt = 0;
  
  @Output() onClick: EventEmitter<number> = new EventEmitter();

  public doClick() {
    this.clickCnt++;
    this.onClick.emit(this.clickCnt);
  }
}


