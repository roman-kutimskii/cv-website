<script lang="ts">
	import type { Contact } from '$lib/data.js';
	import { wrap } from '$lib/utlis';

	export let contacts: Contact[];
</script>

<section>
	<h2>contact</h2>
	<ul>
		{#each contacts as item}
			<li>
				<a href={item.link}>{item.name}</a>
			</li>
		{/each}
	</ul>
	<div>{wrap('/contact')}</div>
</section>
