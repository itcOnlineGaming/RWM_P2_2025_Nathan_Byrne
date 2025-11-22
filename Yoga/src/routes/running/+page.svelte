<script lang="ts">
    import { goto } from "$app/navigation";
    import NextPageButton from "$lib/components/NextPageButton.svelte";

    const navigate = (path: string) => goto(path);
    //const goToResultPage = () => goto('/results');
</script>

<p>Yoga Running Page</p>
<NextPageButton to="/results" label="End Session" navigate={navigate}/>
<!--<button onclick={goToResultPage}>End</button>-->