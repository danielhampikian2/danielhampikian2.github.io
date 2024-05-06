import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SharedSectionService {
  private currentSectionSubject = new BehaviorSubject<string>('home')
  currentSection$ = this.currentSectionSubject.asObservable()

  setCurrentSection(section: string) {
    setTimeout(() => {
      this.currentSectionSubject.next(section)
    }, 100)
  }
}
