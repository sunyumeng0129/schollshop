import Axios from "axios";
import Vue from "vue"


Axios.interceptors.response.use((res) => {
    return res.data
})

Vue.prototype.$http = Axios;