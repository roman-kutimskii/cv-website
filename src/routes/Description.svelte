<script lang="ts">
	import type { Description } from '$lib/data';

	export let description: Description;
	const parseMarkdownLinks = (data: string) => {
		const markdownLinkRegex = /\[(.+)]\((.+)\)/g;
		return data.replace(markdownLinkRegex, '<a href="$2" class="markdown-link">$1</a>');
	};
</script>

{#if Array.isArray(description)}
	{#each description as desc}
		<p>{@html parseMarkdownLinks(desc)}</p>
	{/each}
{:else}
	{#each Object.entries(description) as [key, descs]}
		<p class="title">{key}:</p>
		{#each descs as desc}
			<p>{@html parseMarkdownLinks(desc)}</p>
		{/each}
	{/each}
{/if}

<style>
	p {
		color: #ffffff;
		font:
			normal 400 15px/1 Roboto,
			sans-serif;
	}

	.title {
		color: #0094ff;
		font-size: 16px;
	}

	:global(.markdown-link) {
		color: #ffffff;
	}
</style>
