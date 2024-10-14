<script>
	import { redirect } from '@sveltejs/kit';
    import {page} from '$app/stores'
  import { enhance } from '$app/forms';
   export let form;

   const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<form method="post" action="?/login&redirectTo={redirectTo}" use:enhance>
    <p>{form?.message || ''}</p>
    <input type="text" name="username" placeholder="Username" value={form?.username ?? ''}>
    <br>
    <input type="password" name="password" placeholder="Password">
    <br>
    <button type="submit">Login</button>
    <button formaction="?/register&redirectTo={redirectTo}">Register</button>
</form>