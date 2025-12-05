<script lang="ts">
    import { get } from 'svelte/store';
    import { goto } from "$app/navigation";
    import { timer, timeRemaining, completedTime } from "$lib/components/store";
    //import { exerciseEnabled } from "../../lib/components/SelectExercisesArea.svelte";
    import NextPageButton from "$lib/components/NextPageButton.svelte";
    import CycleExercises from "$lib/components/CycleExercises.svelte";
    //import timeRemaining from "$lib/components/CycleExercises.svelte";
    import "../page.css";

    function handleTimer(event: CustomEvent) {
        const newTimeRemaining = event.detail;
        timeRemaining.set(newTimeRemaining);

        const currTimeRema = newTimeRemaining;
        const totalTime = get(timer);

        completedTime.set((totalTime - currTimeRema) / totalTime);
        completedTime.set($completedTime * 100);

        if (currTimeRema === 0) {
            goto("/results");
        }
    }
    
    const navigate = (path: string) => goto(path);
</script>

<div class="container">
    <h1 class="text-bubble">Yoga Exercise Session</h1>

    <!-- Shown Current Exercise -->
    <CycleExercises on:timerUpdate={handleTimer}/>

    <!-- Early Navigation to Results -->
    <NextPageButton to="/results" label="End Session Early" navigate={navigate}/>
</div>