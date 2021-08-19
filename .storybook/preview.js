import Vue from 'vue';
import '../Arches/dist/css/acc_boot.min.css';
import '../Arches/dist/css/acc_uc.min.css';
import '../Arches/dist/css/color-code_credits.min.css';
import '../Arches/dist/css/color-code_LOE_COR.min.css';
import '../Arches/dist/icons/css/all.min.css';


// Guideline Search
 import '../Arches/dist/css/glsearch.min.css';

import moment from 'moment';
Vue.filter("dateNumber", (date) => date instanceof Date ? moment(date).format("MM/DD/YYYY") : "");
Vue.filter("dateIsoStr", (date) => date instanceof Date ? moment(date).format("YYYY-MM-DD") : "");
Vue.filter("dateString", (date) => date instanceof Date ? moment(date).format("MMMM D, YYYY") : "");
Vue.filter("dateStrAbv", (date) => date instanceof Date ? moment(date).format("MMM D, YYYY") : "");
Vue.filter("HourMinSec", (date) => date instanceof Date ? moment(date).format("h:mm:ss a") : "");
import tz from 'moment-timezone';
import  { VueResponsiveComponents }  from 'vue-responsive-components';
import carousel from 'vue-owl-carousel';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method:'alphabetical',
      order: ['Introduction','Basic','Navigation','Container','Content','Form',['Question','Basic','Advanced'],'*'],
    }
  },
}