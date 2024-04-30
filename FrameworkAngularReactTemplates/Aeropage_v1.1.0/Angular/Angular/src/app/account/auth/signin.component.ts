import { Component } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { AuthenticationService } from '@core/service/auth.service'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { first, map } from 'rxjs'

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    RouterModule,
    LucideAngularModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],

  template: `
    <div
      class="relative bg-cover bg-center bg-no-repeat p-2 lg:p-0"
      style="background-image: url(assets/images/other/auth-bg.jpg)"
    >
      <div class="absolute inset-0 bg-black/10"></div>

      <div class="flex h-screen w-full items-center justify-center">
        <div
          class="max-w-4xl overflow-hidden rounded-lg bg-black/60 backdrop-blur-3xl"
        >
          <div class="grid lg:grid-cols-2">
            <div class="hidden py-2.5 ps-2.5 lg:block">
              <div class="relative h-full overflow-hidden rounded-md">
                <div class="absolute inset-0 bg-black/40"></div>
                <img
                  src="assets/images/other/auth-img.jpg"
                  alt=""
                  class="h-full max-w-full"
                />
              </div>
            </div>
            <div class="">
              <div class="p-6">
                <a href="index.html" class="mb-8 block grow">
                  <img
                    class="h-8"
                    src="assets/images/logo-light.png"
                    alt="images"
                  />
                </a>

                <form
                  [formGroup]="loginForm"
                  (ngSubmit)="onSubmit()"
                  data-x-form
                  data-x-form-to="admin-dashboard.html"
                  class="mt-10 shrink"
                >
                  <div class="mb-4">
                    <label
                      for="LogInEmailAddress"
                      class="mb-2 block text-base/normal font-semibold text-zinc-200"
                      >Email address</label
                    >
                    <input
                      data-x-field="email"
                      class="block w-full rounded border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
                      type="email"
                      id="LogInEmailAddress"
                      placeholder="Enter your email"
                      formControlName="email"
                    />
                    <span
                      data-x-field-error="email"
                      class="mt-1 block text-red-500"
                    ></span>
                  </div>
                  <!-- end email input -->
                  <div class="mb-4">
                    <label
                      for="password"
                      class="mb-2 block text-base/normal font-semibold text-zinc-200"
                      >Password</label
                    >
                    <div class="flex" data-x-password>
                      <input
                        data-x-field="password"
                        value="password"
                        [type]="fieldTextType ? 'text' : 'password'"
                        id="form-password"
                        formControlName="password"
                        class="form-password block w-full rounded-s border border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:ring-transparent"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        id="password-addon"
                        (click)="toggleFieldTextType()"
                        class="password-toggle -ms-px inline-flex items-center justify-center rounded-e border border-white/10 bg-transparent px-4 py-2.5"
                      >
                        @if (fieldTextType) {
                          <lucide-angular
                            name="eye"
                            class="password-eye-on size-5 text-zinc-100"
                          ></lucide-angular>
                        } @else {
                          <lucide-angular
                            name="eye-off"
                            class="password-eye-off size-5 text-zinc-100"
                          ></lucide-angular>
                        }
                      </button>
                    </div>
                    <span
                      data-x-field-error="password"
                      class="mt-1 block text-red-500"
                    ></span>
                  </div>
                  <!-- end password input -->
                  <div
                    class="mb-6 flex flex-wrap items-center justify-between gap-x-1 gap-y-2"
                  >
                    <div class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="size-4 rounded border-white/20 bg-white/20 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/60 focus:ring-offset-0"
                        id="checkbox-signin"
                      />
                      <label
                        class="ms-2 select-none align-middle text-base/none text-zinc-200"
                        for="checkbox-signin"
                        >Remember me</label
                      >
                    </div>
                    <a
                      routerLink="/auth/recoverpw"
                      class="border-b border-dashed text-zinc-200"
                      ><small>Forgot your password?</small></a
                    >
                  </div>
                  <!-- end checkbox input -->
                  <div class="mb-6 text-center">
                    <button
                      type="submit"
                      class="group mt-5 inline-flex w-full items-center justify-center rounded bg-primary px-6 py-2.5 text-white backdrop-blur-2xl transition-all hover:bg-primary-700 hover:text-white"
                    >
                      Log In
                    </button>
                  </div>
                </form>

                <div class="my-6 flex shrink items-center">
                  <div
                    class="mt-px flex-auto border-t border-dashed border-white/20"
                  ></div>
                  <div class="mx-4 text-zinc-100">Or</div>
                  <div
                    class="mt-px flex-auto border-t border-dashed border-white/20"
                  ></div>
                </div>

                <!-- social-->
                <div class="mb-6 shrink text-center">
                  <p class="mb-6 text-xl text-white">Continue in with</p>
                  <ul class="flex flex-wrap items-center justify-center gap-2">
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="group inline-flex size-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-blue-500"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="facebook"
                          class="lucide lucide-facebook size-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"
                        >
                          <path
                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          ></path></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="group inline-flex size-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-pink-600"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="instagram"
                          class="lucide lucide-instagram size-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path
                            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                          ></path>
                          <line
                            x1="17.5"
                            x2="17.51"
                            y1="6.5"
                            y2="6.5"
                          ></line></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="group inline-flex size-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-sky-600"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="twitter"
                          class="lucide lucide-twitter size-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"
                        >
                          <path
                            d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                          ></path></svg
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="group inline-flex size-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-blue-800"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="linkedin"
                          class="lucide lucide-linkedin size-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"
                        >
                          <path
                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                          ></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle></svg
                      ></a>
                    </li>
                  </ul>
                </div>

                <p class="shrink text-center text-zinc-200">
                  Don't have an account ?<a
                    routerLink="/auth/register"
                    class="ms-1 text-primary"
                    ><b>Register</b></a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class SigninComponent {
  fieldTextType!: boolean
  loginForm!: FormGroup
  formSubmitted: boolean = false
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {
    if (this.authenticationService.user) {
      this.router.navigate(['/admin/dashboard'])
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['user@demo.com', [Validators.required, Validators.email]],
      password: ['password', Validators.required],
    })
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType
  }

  /**
   * convenience getter for easy access to form fields
   */
  get formValues() {
    return this.loginForm.controls
  }

  onSubmit(): void {
    this.formSubmitted = true
    if (this.loginForm.valid) {
      const email = this.formValues['email'].value // Get the username from the form
      const password = this.formValues['password'].value // Get the password from the for

      this.authenticationService
        .login(email, password)
        .pipe(first())
        .subscribe(
          (data: any) => {
            this.router.navigate(['/admin/dashboard'])
          },
          (error: any) => {}
        )
    }
  }
}
