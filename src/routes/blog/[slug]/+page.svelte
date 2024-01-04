<script lang="ts">
	import { page } from "$app/stores";
	export let data;
</script>

{$page.params.slug}
{data.title} // No dollar sign for regular props
{@html data.html} //Dont do this with untrusted data XSS attack
