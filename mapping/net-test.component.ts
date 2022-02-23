import { Component, Inject, OnInit } from '@angular/core'
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  exhaustMap,
  filter,
  first,
  from,
  map,
  mergeMap,
  Observable,
  of,
  pipe,
  skip,
  switchMap,
  take,
  tap,
} from 'rxjs'
import { ApiService } from '../app/lib/apps/src/lib/service/api.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  c(d) {
    console.log(d)
  }
  constructor(private http: HttpClient, private ApiService: ApiService) {}
  ngOnInit(): void {
    let obsC$ = of(1, 2, 3, 4).pipe(
      tap((id) => this.c('concatMap')),
      concatMap((id) =>
        this.http.get(
          'http://burjcrown.com/drm/web/index.php?time=19&id=8&do_id=' + id,
        ),
      ),
    )

    let obsM$ = of(1, 2, 3, 4).pipe(
      tap((id) => this.c('mergeMap')),
      mergeMap((id) =>
        this.http.get(
          'http://burjcrown.com/drm/web/index.php?time=19&id=8&do_id=' + id,
        ),
      ),
    )

    let obsS$ = of(1, 2, 3, 4).pipe(
      tap((id) => this.c('switchMap')),
      switchMap((id) =>
        this.http.get(
          'http://burjcrown.com/drm/web/index.php?time=19&id=8&do_id=' + id,
        ),
      ),
    )

    let obsE$ = of(1, 2, 3, 4).pipe(
      tap((id) => this.c('exhaustMap')),
      exhaustMap((id) =>
        this.http.get(
          'http://burjcrown.com/drm/web/index.php?time=19&id=8&do_id=' + id,
        ),
      ),
    )

    obsC$.subscribe((val) => {
      console.log('concat DOID =', val[0]['do_id'])
    })

    obsM$.subscribe((val) => {
      console.log('merge DOID =', val[0]['do_id'])
    })

    obsS$.subscribe((val) => {
      console.log('switch DOID =', val[0]['do_id'])
    })

    obsE$.subscribe((val) => {
      console.log('exhaustMap DOID =', val[0]['do_id'])
    })
  }
}
