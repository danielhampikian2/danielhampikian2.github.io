import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core'
import { contact, message } from './data'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { CommonModule } from '@angular/common'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LucideAngularModule,
  ],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  template: `
    <app-breadcrumb [pageTitle]="'Chat'" />
    <section>
      <div class="container">
        <div class="my-6 space-y-6">
          <div class="grid gap-4 lg:grid-cols-3">
            <!-- Chat List -->
            <div class="lg:col-span-1">
              <div
                class="overflow-hidden rounded-xl border border-default-200 bg-white dark:bg-default-50 lg:min-w-96"
              >
                <div class="border-b border-default-200 px-6 py-4">
                  <h6 class="text-lg font-medium text-default-900">Contacts</h6>
                </div>
                <div
                  class="h-[calc(100vh-370px)] divide-y divide-default-200 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1"
                >
                  @for (item of contactList; track $index) {
                    <div
                      id="userList"
                      [ngClass]="{
                        'bg-default-100': selectedItemIndex === $index
                      }"
                    >
                      <a
                        href="javascript:void(0);"
                        (click)="chatUsername(item.name, $index, item.avatar)"
                      >
                        <div class="flex items-center gap-3 px-4 py-3">
                          <img
                            src="{{ item.avatar }}"
                            class="h-10 rounded-full"
                            alt="Brandon Smith"
                          />
                          <div class="w-full">
                            <div class="flex justify-between">
                              <h6 class="text-default-900">{{ item.name }}</h6>
                              <small class="text-default-400">{{
                                item.time
                              }}</small>
                            </div>
                            <div class="flex justify-between">
                              <span class="font-light text-default-400">{{
                                item.message
                              }}</span>
                              @if (item.notificationCount) {
                                <span class=""
                                  ><span
                                    class="rounded-full bg-red-500/25 px-1 py-0.5 text-xs text-red-500"
                                    >{{ item.notificationCount }}</span
                                  ></span
                                >
                              }
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  }
                </div>
              </div>
            </div>

            <!-- Chat Conversation -->
            <div class="lg:col-span-2">
              <div
                class="w-full overflow-hidden rounded-xl border border-default-200 bg-white dark:bg-default-50"
              >
                <div class="border-b border-default-200 px-6 py-3">
                  <div
                    class="flex flex-wrap items-center justify-between gap-3 py-1.5"
                  >
                    <div class="sm:w-7/12">
                      <div class="flex items-center gap-2">
                        <img
                          src="{{ isProfile }}"
                          class="me-2 h-9 rounded-full"
                          alt="Brandon Smith"
                        />
                        <div>
                          <h5 class="text-base font-medium text-default-700">
                            {{ username }}
                          </h5>
                          <p
                            class="mt-1.5 flex items-center text-xs text-default-400"
                          >
                            <small
                              class="ti ti-circle-filled me-1 text-red-400"
                            ></small>
                            Offline
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="flex w-auto gap-1">
                      <a href="javascript: void(0);" class="inline-block p-1.5">
                        <lucide-angular
                          size="20"
                          name="phone"
                          class="flex text-default-900"
                        ></lucide-angular>
                      </a>
                      <a href="javascript: void(0);" class="inline-block p-1.5">
                        <lucide-angular
                          size="20"
                          name="video"
                          class="flex text-default-900"
                        ></lucide-angular>
                      </a>
                      <a href="javascript: void(0);" class="inline-block p-1.5">
                        <lucide-angular
                          size="20"
                          name="users"
                          class="flex text-default-900"
                        ></lucide-angular>
                      </a>
                      <a href="javascript: void(0);" class="inline-block p-1.5">
                        <lucide-angular
                          size="20"
                          name="trash-2"
                          class="flex text-default-900"
                        ></lucide-angular>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="h-[calc(100vh-480px)] overflow-y-auto p-6 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1"
                  id="chatMessage"
                >
                  <div class="space-y-4">
                    <!-- Chat Left -->
                    @for (item of chatMessage; track $index) {
                      <div
                        class=""
                        [ngClass]="
                          item.isSender
                            ? 'group flex w-11/12 items-start gap-3 text-start'
                            : 'group ms-auto flex w-11/12 flex-row-reverse items-start gap-3 text-end'
                        "
                      >
                        <div class="text-center">
                          <img src="{{ isProfile }}" class="h-8 rounded-md" />
                          <p class="pt-0.5 text-xs">{{ item.timestamp }}</p>
                        </div>

                        <div
                          class="max-w-3/4 rounded bg-default-100 p-3"
                          [ngClass]="
                            item.isSender ? 'bg-default-100' : 'bg-primary'
                          "
                        >
                          <p
                            class="relative text-xs font-bold "
                            [ngClass]="
                              item.isSender
                                ? 'text-default-800'
                                : 'text-white/90'
                            "
                          >
                            {{ username }}
                          </p>
                          <p
                            class="pt-1"
                            [ngClass]="item.isSender ? '' : 'text-white'"
                          >
                            {{ item.content }}
                          </p>
                        </div>
                      </div>
                    }
                  </div>
                </div>

                <div
                  class="border-t border-default-200 bg-white p-6 dark:bg-default-50"
                >
                  <form
                    name="chat-form"
                    class="flex items-center gap-2"
                    (ngSubmit)="messageSave()"
                    [formGroup]="formData"
                  >
                    <input
                      type="text"
                      formControlName="content"
                      class="form-input w-full rounded border-none bg-default-100 text-default-900 placeholder:text-default-600 focus:ring-primary"
                      placeholder="Enter your text"
                      required=""
                    />
                    <div class="flex w-auto gap-1">
                      <a
                        href="javascript:void(0);"
                        class="rounded bg-default-200 px-3 py-2 text-default-800 hover:bg-default-800/20"
                        ><lucide-angular
                          name="paperclip"
                          class="inline size-3.5 text-default-800"
                        ></lucide-angular
                      ></a>
                      <button
                        class="inline-flex items-center justify-center gap-2 rounded bg-primary px-3 py-2 text-white transition-all duration-300 hover:bg-primary-700"
                      >
                        Send
                        <lucide-angular
                          name="send"
                          class="size-4"
                        ></lucide-angular>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ChatComponent {
  contactList = contact
  submitted!: boolean
  username: string = 'Brandon Smith'
  isProfile: string = 'assets/images/avatars/img-2.jpg'
  formData!: UntypedFormGroup
  selectedItemIndex: number | null = null
  isreplyMessage = false
  chatMessage: any
  isCurrentUserSender: boolean = true
  @ViewChild('chatContainer', { static: false }) chatContainer!: ElementRef

  constructor(
    public formBuilder: UntypedFormBuilder,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg-default-50')
    this.chatMessage = message
    // Validation
    this.formData = this.formBuilder.group({
      content: ['', [Validators.required]],
    })
  }

  /**
   *
   * Returns form
   */
  get form() {
    return this.formData.controls
  }
  // chat page change
  chatUsername(name: string, index: number, avatar: string): void {
    // Handle the click event here
    this.selectedItemIndex = index
    this.username = name
    this.isProfile = avatar
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const content = this.formData.get('content')!.value
    if (this.formData.valid && content) {
      // User message
      this.chatMessage.push({
        id: this.chatMessage.length + 1,
        content,
        isSender: false,
        sender: '',
      })

      // System-generated reply
      setTimeout(() => {
        this.chatMessage.push({
          id: this.chatMessage.length + 1,
          content,
          isSender: true,
          sender: '',
        })
        this.isCurrentUserSender = !this.isCurrentUserSender
        this.onListScroll()
      }, 1000)
      this.onListScroll()
      // Toggle sender status for the next message
    }
    // this.scrollToBottom();
    this.formData.reset()
  }

  // list scroll
  onListScroll() {
    const containerElement = document.getElementById('chatMessage') // Replace 'yourContainerId' with the actual ID of your container element

    if (containerElement) {
      setTimeout(() => {
        containerElement.scrollTop = containerElement.scrollHeight
      }, 100)
    }
  }
}
