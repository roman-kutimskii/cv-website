<script lang="ts">
	import type { Item } from '$lib/data';
	import { wrap } from '$lib/utlis';
	import Description from './Description.svelte';

	export let title: string;
	export let items: Item[];
</script>

<section>
	<div class="header">{wrap(title)}</div>
	<ul>
		{#each items as item}
			<li>
				<div class="title">
					{item.position} | {item.name}, {item.city} ({item.startDate} - {item.endDate})
				</div>
				<Description description={item.description} />
			</li>
		{/each}
	</ul>
	<div class="header">{wrap(`/${title}`)}</div>
</section>

<style>
	.title {
		color: #3dffdb;
		font:
			normal 400 15px/1 Roboto,
			sans-serif;
	}
</style>
