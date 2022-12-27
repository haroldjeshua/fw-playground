<script>
	console.log("this is dope")
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h3>Kumusta!</h3>
	<h1>
		I'm Harold Jeshua Varde aka HARV.
	</h1>

	<p>A frontend developer with a strong eye for design. Building web apps with intuitive interfaces.</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	h1 {
		width: 100%;
		font-size: 3rem;

	}

</style>
