import {DB_USER, DB_PASSWORD} from '$env/static/private'

import { redirect } from "@sveltejs/kit";

export const load = ({cookies, url}) =>{
    console.log(`Connection to database with username ${DB_USER} and password ${DB_PASSWORD}`)
    if(!cookies.get('username')){
        throw redirect(307, `/auth?redirectTo=${url.pathname}`)
    }
    const newsAPIkey = 'YOUR_API_KEY';
    console.log(newsAPIkey);
    // make api call using API key to fetch news data

    const news = [
        {id: 1, title: 'News 1'},
        {id: 2, title: 'News 2'},
        {id: 3, title: 'News 3'},
        {id: 4, title: 'News 4'},
    ]

    return { news}
}