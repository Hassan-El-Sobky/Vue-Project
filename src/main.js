import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginFormComponent from './components/LoginForm.vue';
import HomeComponent from './components/HomePage.vue';
import BlogsComponent from './components/BlogsComponent.vue';
import AddblogComponent from './components/AddblogComponent.vue';
import NotFoundComponent from './components/NotFound.vue'


const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeComponent
        }, 
        {
           path:'/blogs',
           component:BlogsComponent
        },
        {
             path:'/addblog',
             component:AddblogComponent,
        },

        {
            path: '/login',
            component: LoginFormComponent
        },

        {
            path: '/register',
            component: LoginFormComponent
        },

        {
            path: '/:notFound(.*)',
            component: NotFoundComponent
        },

    ]
})

const app = createApp(App);
app.use(router)
app.mount('#app')
