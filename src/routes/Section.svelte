<script lang="ts">
	import type { Item } from '$lib/data';
	import { wrap } from '$lib/utlis';
	import Description from './Description.svelte';

	export let title: string;
	export let items: Item[];
</script>

<section>
	<h2>{wrap(title)}</h2>
	<ul>
		{#each items as item}
			<li>
				<strong
					>{item.position} | {item.name}, {item.city} ({item.startDate} - {item.endDate})</strong
				>
				<Description description={item.description} />
			</li>
		{/each}
	</ul>
	<div>{wrap(`/${title}`)}</div>
</section>
