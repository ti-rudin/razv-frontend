<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	export let data;
	console.log(data.pikets.data.pikets.data)
	let q;
	$: console.log(q)
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

{#each data.pikets.data.pikets.data as piket}


<Counter countid={piket.attributes.Name}/>
<br>
{/each}


</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}




</style>
