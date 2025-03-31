import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from '@/plugins/axios';
import stores from './stores';
import LottieAnimation from 'lottie-web-vue';
import { numberonly, price, contact, bizNum, firstDemical, secondDemical } from '@/directives/format';
import dayjs from 'dayjs';
import { contactDash, dateFormat, priceFormat } from './composables/format';
import fade from "./directives/fade";
import slide from "./directives/slide";

// editor
import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(App);
app.directive('numberonly', numberonly);
app.directive('firstDemical', firstDemical);
app.directive('secondDemical', secondDemical);
app.directive('price', price);
app.directive('contact', contact);
app.directive('bizNum', bizNum);
app.directive("fade", fade);
app.directive("slide", slide);
app.config.globalProperties.axios = axios;
app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$priceFormat = priceFormat;
app.config.globalProperties.$dateFormat = dateFormat;
app.config.globalProperties.$contactFormat = contactDash;

app.use(stores).use(router).use(CKEditor).use(LottieAnimation).mount('#app');
