import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { tap, mergeMap, concatMap, exhaustMap, delay } from 'rxjs/operators';
@Component({
  selector: 'app-net-test',
  templateUrl: './net-test.component.html',
  styleUrls: ['./net-test.component.sass']
})
export class NetTestComponent implements OnInit, AfterViewInit {
  @ViewChild('makeLike') makeLike: ElementRef;
  constructor(private http: HttpClient) { }
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    fromEvent(this.makeLike.nativeElement, 'click').pipe(
      tap(() => console.log('clicked')),
      exhaustMap(() => this.httpGet()),
      tap((i) => console.log(i))
    ).subscribe((d) => console.log(d))
  }
  httpGet() {
    return this.http.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN").pipe(
      delay(5000)
    );
  }
  concatMap() {
    of(1, 2, 3, 4, 5).pipe(
      concatMap((val) => this.postMan(val)),
      tap((i) => console.log(i))
    ).subscribe();
  }
  mergeMap() {
    of(1, 2, 3, 4, 5).pipe(
      mergeMap((val) => this.postMan(val)),
      tap((i) => console.log(i))
    ).subscribe();
  }

  postMan(postId) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });
    let option = { headers: headers };
    let body = JSON.stringify({
      title: 'test',
      body: 'mybody'
    });
    return this.http.patch(`http://jsonplaceholder.typicode.com/posts/${postId}`, body, option);
  }
}