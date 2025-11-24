<script lang="ts">
    import { goto } from "$app/navigation";
    //import { exerciseEnabled } from "../../lib/components/SelectExercisesArea.svelte";
    import NextPageButton from "$lib/components/NextPageButton.svelte";
    import CycleExercises from "$lib/components/CycleExercises.svelte";
    //import timeRemaining from "$lib/components/CycleExercises.svelte";
    import "../page.css";

    export let timeRemaining: number;

    function handleTimer(event: CustomEvent) {
        timeRemaining = event.detail;
        if (timeRemaining == 0)
            goto("/results");
    }
    
    const navigate = (path: string) => goto(path);
</script>

<div class="container">
    <h1>Yoga Exercise Session</h1>

    <!-- Shown Current Exercise -->
    <CycleExercises on:timerUpdate={handleTimer}/>

    <!-- Early Navigation to Results -->
    <NextPageButton to="/results" label="End Session Early" navigate={navigate}/>
</div>