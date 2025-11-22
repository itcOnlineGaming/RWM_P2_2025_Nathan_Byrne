<script lang="ts">
    import { goto } from "$app/navigation";
    import NextPageButton from "$lib/components/NextPageButton.svelte";

    const navigateMainMenu = (path: string) => goto(path);
    const navigateRunning = (path: string) => goto(path);
    //const goToMainPage = () => goto('/');
    //const goToRunningPage = () => goto('/running');
</script>

<p>Yoga Running Page</p>
<NextPageButton to="/running" label="Try Again" navigate={navigateMainMenu}/>
<NextPageButton to="/" label="Return to Main Menu" navigate={navigateRunning}/>
<!--<button onclick={goToRunningPage}>Try Again</button>
<button onclick={goToMainPage}>Return to Main Menu</button>-->