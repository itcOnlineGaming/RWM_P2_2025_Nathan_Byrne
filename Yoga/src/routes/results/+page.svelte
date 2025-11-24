<script lang="ts">
    import { get } from 'svelte/store';
    import { goto } from "$app/navigation";
    import NextPageButton from "$lib/components/NextPageButton.svelte";
    import Popup from "$lib/components/Popup.svelte";
    import "../page.css";
    import { pastFeelingReported, completedTime, statusMessage } from "$lib/components/store";

    const navigateMainMenu = (path: string) => goto(path);
    const navigateRunning = (path: string) => goto(path);
</script>

<div class="container">
    <h1>Yoga Exercise Results</h1>

    <h2>Duration Completed: {$completedTime.toFixed(2)}%</h2>    

    <h2>Current Feeling Status: {$statusMessage}</h2>

    <!-- Retake Current Feeling Form -->
    <Popup/>

    <!-- Navigation Buttons -->
    <NextPageButton to="/running" label="Try Again" navigate={navigateMainMenu}/>
    <NextPageButton to="/" label="Return to Exercise Selection" navigate={navigateRunning}/>
</div>