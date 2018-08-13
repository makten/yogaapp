import axios from 'axios';

// leave the export, even if you don't use it
export default ({ Vue }) => {
  // Include axios as a vue type
  Vue.prototype.$axios = axios;
};
