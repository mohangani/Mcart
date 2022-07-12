import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//test

export class AppComponent {
  title: string = 'Mcart';
  fileName: string = this.getFileName();
  selectedNavId :Number;

  public getFileName() {
    return this.constructor.name;

  }
onNavClick(selectedNav : Number){
  this.selectedNavId = selectedNav;
}

}
