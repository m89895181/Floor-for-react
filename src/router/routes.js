import React from 'react'

import Loadable from 'react-loadable'

function Loading(){
    return <div>loading</div>
}

const Home =  Loadable({
    loader: () => import('@/views/home'),
    loading: Loading,
  });

const Classify =  Loadable({
    loader: () => import('@/views/classify'),
    loading: Loading,
});

const Car =  Loadable({
    loader: () => import('@/views/car'),
    loading: Loading,
});

const My =  Loadable({
    loader: () => import('@/views/my'),
    loading: Loading,
});

const Detail =  Loadable({
    loader: () => import('@/views/detail'),
    loading: Loading,
});

const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/classify',
        component:Classify
    },
    {
        path:'/car',
        component:Car
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'/',
        redirect:'/home'
    }
] 

export default routes
