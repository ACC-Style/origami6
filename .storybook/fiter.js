Vue.filter("dateStr", (date) => date instanceof Date ? moment(date).format("MM/DD/YYYY") : "");
Vue.filter("dateIsoStr", (date) => date instanceof Date ? moment(date).format("YYYY-MM-DD") : "");
Vue.filter("dateForCertStr", (date) => date instanceof Date ? moment(date).format("MMMM D, YYYY") : "");