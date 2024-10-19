<script lang="ts">
	import type { Contact } from '$lib/data.js';
	import { wrap } from '$lib/utlis';

	export let contacts: Contact[];
</script>

<section>
	<div class="header">{wrap('contacts')}</div>
	<ul>
		{#each contacts as item}
			<li class="link">
				<span class="link__tag">&lt;a href="</span><a href={item.link}>{item.link}</a><span
					class="link__tag">"&gt;</span
				><span class="link__name">{item.name}</span><span class="link__tag">&lt;/a&gt;</span>
			</li>
		{/each}
	</ul>
	<div class="header">{wrap('/contact')}</div>
</section>

<style>
	:global(.header) {
		color: #0094ff;
		font:
			normal 400 24px/1 Roboto,
			sans-serif;
	}

	.link {
		font:
			normal 400 15px/1 Roboto,
			sans-serif;
	}

	.link a {
		color: #ffffff;
	}

	.link__tag {
		color: #696969;
	}

	.link__name {
		color: #3dffdb;
	}
</style>
