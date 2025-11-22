<script lang="ts">
    import { goto } from "$app/navigation";
    import NextPageButton from "$lib/components/NextPageButton.svelte";

    const navigate = (path: string) => goto(path);
    //const goToRunningPage = () => goto('/running');
</script>

<p>Yoga Main Page</p>
<NextPageButton to="/running" label="Start" navigate={navigate}/>
<!--<button onclick={goToRunningPage}>Start</button>-->