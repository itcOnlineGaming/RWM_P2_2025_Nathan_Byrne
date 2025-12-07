<script lang="ts">
    import { get } from 'svelte/store';
    import { goto } from "$app/navigation";
    import { NextPageButton, Popup, pastFeelingReported, completedTime, statusMessage } from 'yoga-exercises';
    import "../page.css";

    const navigateMainMenu = (path: string) => goto(path);
    const navigateRunning = (path: string) => goto(path);
</script>

<div class="container">
    <h1 class="text-bubble">Yoga Exercise Results</h1>

    <h2>Duration Completed: {$completedTime.toFixed(2)}%</h2>
    <h2>Current Feeling Status: {$statusMessage}</h2>

    <Popup/>

    <NextPageButton to="/running" label="Try Again" keyBind=' ' navigate={navigateMainMenu}/>
    <NextPageButton to="/" label="Return to Exercise Selection" keyBind='Escape' navigate={navigateRunning}/>
</div>