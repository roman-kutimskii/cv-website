<script lang="ts">
	import { data } from '$lib/data';
	import { wrap } from '$lib/utlis';
	import Section from './Section.svelte';
	import Contacts from './Contacts.svelte';

	const { name, position, experience, education, contacts } = data;
</script>

<main>
	<div class="html">{wrap('HTML')}</div>
	<div class="name">//{name}</div>
	<span class="tag">{wrap('title')}</span>
	<span class="title">{position}</span>
	<span class="tag">{wrap('/title')}</span>
	<div class="tag">{wrap('body')}</div>

	<Section items={experience} title="experience" />

	<Section items={education} title="education" />

	<Contacts {contacts} />
	<div class="tag">{wrap('/body')}</div>
	<div class="html">{wrap('/HTML')}</div>
</main>

<style>
	:global(body) {
		margin: 0;
	}

	main {
		background: #181616;
		padding: 40px 50px;
	}

	.html {
		color: #696969;
		font:
			normal 400 35px/1 Roboto,
			sans-serif;
	}

	.name {
		color: #3dffdb;
		font:
			normal 700 50px/1 Roboto,
			sans-serif;
	}

	.tag {
		color: #696969;
		font:
			normal 400 23px/1 Roboto,
			sans-serif;
	}

	.title {
		color: #ffffff;
		font:
			normal 400 23px/1 Roboto,
			sans-serif;
	}
</style>
