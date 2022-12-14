import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Articles from './components/Articles/article.vue'
import Contact from './components/Contact/index.vue'
import Home from './components'
import  Article from './components/Articles/article.vue'
import NotFound from './components/404.vue'

const app =  createApp(App);

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Home},
        {path: "/articles", component: Articles, children:[
             {path: ":id", component: Article},
    ]},
    //child route for articles route
        {path: "/contact", component: Contact},
        {path: "/:notFound(.*)", component: NotFound},
       
    ]
})

app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(routes);
app.mount('#app')
