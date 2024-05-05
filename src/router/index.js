import { createWebHistory, createRouter } from "vue-router";
import PostData from "../views/PostData.vue";
import getApiPractice from '../views/getApiPractice.vue';
import piniaStore from '../views/piniaStore.vue'
import PostDataNew from "../views/PostDataNew.vue";


const routes = [
    {path:'/post-data' , name:'PostData', component:PostData},
    {path:'/get-api-practice' , name:'getApiPractice', component:getApiPractice},
    {path:'/' , name:'piniaStore', component:piniaStore},
    {path:'/post-data-new' , name:'PostDataNew', component:PostDataNew},

]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;