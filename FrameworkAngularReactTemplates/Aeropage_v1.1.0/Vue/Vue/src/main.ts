import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'preline/preline'
import 'lucide'
import 'swiper/css/effect-coverflow'
import 'swiper/css/thumbs'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import 'swiper/css/mousewheel'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import '@/assets/css/icons.css'
import '@/assets/css/style.css'

import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from './router'

createApp(App).use(createPinia()).use(router).use(VueApexCharts).mount('#app')
