import { Component, OnInit } from '@angular/core';
import { delay, take } from 'rxjs';
import { HttpHelperService } from '../Services/http-helper.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor(private httpHelper :HttpHelperService) { }

  ngOnInit(): void {
  }

  public get(){

    var res= this.httpHelper.Get("https://jsonplaceholder.typicode.com/todos/").pipe(take(10)).subscribe(
      x=> console.log(JSON.stringify(x)
      
      ));
  }

  public post(){

    var res= this.httpHelper.Post("https://jsonplaceholder.typicode.com/posts",{
      title: 'foo',
      body: 'bar',
    }).subscribe(x=> console.log("Post"+JSON.stringify(x)));
  }

}
