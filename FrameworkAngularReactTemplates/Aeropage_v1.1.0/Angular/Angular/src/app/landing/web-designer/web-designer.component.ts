import { Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import { HeroComponent } from './hero.component'
import { AboutComponent } from './about.component'
import { ServicesComponent } from './services.component'
import { WorkComponent } from './work.component'
import { FaqComponent } from './faq.component'
import { StoriesComponent } from './stories.component'
import { ContactComponent } from './contact.component'

@Component({
  selector: 'app-web-designer',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WorkComponent,
    FaqComponent,
    StoriesComponent,
    ContactComponent,
  ],
  template: `
    <app-header [customLinks]="startUpLink" className="fixed" />
    <!-- hero section  -->
    <app-hero />
    <!-- about -->
    <app-about />
    <!-- services -->
    <app-services />
    <!-- work -->
    <app-work />
    <!-- faq -->
    <app-faq />
    <!-- stories -->
    <app-stories />
    <!-- contact -->
    <app-contact />
  `,
  styles: ``,
})
export class WebDesignerComponent {
  // header link
  startUpLink = [
    { label: 'Home', route: 'home' },
    { label: 'About ', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Work', route: 'work' },
    { label: 'Faq', route: 'faq' },
    { label: 'Stories', route: 'stories' },
    { label: 'Contact', route: 'contact' },
  ]
}
