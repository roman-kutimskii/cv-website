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
	<span>{wrap('title')}</span>
	<span class="title">{position}</span>
	<span>{wrap('/title')}</span>
	<div>{wrap('body')}</div>

	<Section items={experience} title="experience" />

	<Section items={education} title="education" />

	<Contacts {contacts} />
	<div class="html">{wrap('/HTML')}</div>
</main>
