import { Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import { HeroComponent } from './hero.component'
import { AboutComponent } from './about.component'
import { ServicesComponent } from './services.component'
import { WorkComponent } from './work.component'
import { TestimonialsComponent } from './testimonials.component'
import { BlogComponent } from './blog.component'
import { ScrollspyDirective } from '@components/scrollspy/scrollspy.directive'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { FormComponent } from './form.component'

@Component({
  selector: 'app-startup',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WorkComponent,
    TestimonialsComponent,
    BlogComponent,
    ScrollspyDirective,
    CommonModule,
    FormComponent,
  ],
  template: `
    <app-header
      [customLinks]="startUpLink"
      [className]="'fixed'"
      [sidebarNav]="false"
    />
    <!-- home page -->
    <app-hero />
    <!-- about section -->
    <app-about />
    <!-- services -->
    <app-services />
    <!-- work -->
    <app-work />
    <!-- testimonials -->
    <app-testimonials />
    <!-- blog -->
    <app-blog />
    <!-- form -->
    <app-form />
  `,
  styles: ``,
})
export class StartupComponent {
  startUpLink = [
    { label: 'Home', route: 'home' },
    { label: 'About ', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Work', route: 'work' },
    { label: 'Testimonials', route: 'testimonials' },
    { label: 'Blog', route: 'blog' },
  ]
}
