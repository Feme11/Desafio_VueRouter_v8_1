import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import Post from './components/Post'
import Articulo from './components/Articulo'
import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
        routes: [
            {
                path: "/",
                name: "Inicio",
                component: Inicio
            },
            {
                path: "/sobremi",
                name: "SobreMi",
                component: SobreMi
            },
            {
                path: "/contacto",
                name: "Contacto",
                component: Contacto
            },
            {
                path: "/post",
                name: "Post",
                component: Post,
                children: [
                {
                    path: ":articulo",
                    name: "Articulo",
                    component: Articulo,               
                },
                ]
            },
            {
                path: "*",
                name: "NotFound",
                component: NotFound,
            }            
        ]
})