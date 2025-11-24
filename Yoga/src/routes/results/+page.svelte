<script lang="ts">
    import { goto } from "$app/navigation";
    import NextPageButton from "$lib/components/NextPageButton.svelte";
    import Popup from "$lib/components/Popup.svelte";
    import "../page.css";

    const navigateMainMenu = (path: string) => goto(path);
    const navigateRunning = (path: string) => goto(path);
</script>

<div class="container">
    <h1>Yoga Exercise Results</h1>

    <!-- Retake Current Feeling Form -->
    <Popup/>

    <!-- Navigation Buttons -->
    <NextPageButton to="/running" label="Try Again" navigate={navigateMainMenu}/>
    <NextPageButton to="/" label="Return to Main Menu" navigate={navigateRunning}/>
</div>