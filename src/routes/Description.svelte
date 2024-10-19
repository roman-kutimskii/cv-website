<script lang="ts">
	import type { Description } from '$lib/data';

	export let description: Description;
</script>

{#if Array.isArray(description)}
	{#each description as desc}
		<p>{@html desc}</p>
	{/each}
{:else}
	{#each Object.entries(description) as [key, descs]}
		<p><strong>{key}:</strong></p>
		{#each descs as desc}
			<p>{@html desc}</p>
		{/each}
	{/each}
{/if}
