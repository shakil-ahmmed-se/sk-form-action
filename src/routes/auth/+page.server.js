import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({request, cookies, url}) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        if(! username || !password){
            return fail( 400, {
                username,
                message: 'Invalid username or password'
            })
        }
        cookies.set('username', username, { path: '/'});
        throw redirect(303, url.searchParams.get('redirectTo') || '/');
        // return {
        //     message: "Login successfully"
        // }
    },
    register: async ({request, cookies, url}) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        if(! username || !password){
           return fail(400, {
            username,
            message: 'Invalid username or password',
           })
        }
        cookies.set('username', username, { path: '/'});
        throw redirect(303, url.searchParams.get('redirectTo') || '/');
        // return {
        //     message: "Registered successfully"
        // }
    }
}