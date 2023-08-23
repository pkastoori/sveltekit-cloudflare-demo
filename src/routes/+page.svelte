<script>
	import { enhance } from '$app/forms';

	// @ts-nocheck

	export let data;

	export let form;
</script>

<svelte:head>
	<title>Sveltekit Cloudflare Demo</title>
</svelte:head>
<main>
	<h1>Welcome to SvelteKit</h1>

	<form method="post" use:enhance>
		<input type="text" name="name" placeholder="Name" />
		<input type="email" name="email" placeholder="Email" />
		<button>Submit</button>
	</form>

	{#if form?.message}
		<span>{form.message}</span>
	{/if}

	{#if data.users}
		{#each data.users as user}
			<h3>{user.name}</h3>
			<p>{user.email}</p>
		{/each}
	{/if}
</main>

<style>
	main {
		padding-block: 6px;
		padding-inline: 20px;
		font-family: sans-serif;
	}
	form {
		max-width: 320px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-block: 20px;
	}
	input {
		padding: 6px;
	}
	input:focus {
		outline: none;
	}
	button {
		cursor: pointer;
		padding: 8px;
		border: none;
		background-color: chartreuse;
	}
	span {
		color: blue;
	}
</style>
