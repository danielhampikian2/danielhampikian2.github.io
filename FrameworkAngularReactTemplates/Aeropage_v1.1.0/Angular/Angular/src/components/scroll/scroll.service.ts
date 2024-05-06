// scroll.service.ts
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollSubject = new Subject<number>()

  getScrollObservable() {
    return this.scrollSubject.asObservable()
  }

  updateScrollPosition(position: number) {
    this.scrollSubject.next(position)
  }
}
