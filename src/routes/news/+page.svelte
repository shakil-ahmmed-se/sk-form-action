<script>
    export let data;
</script>

<h1>Today's headline</h1>

{#each data.news as article}
    <h2>{article.title}</h2>
{/each}