<script lang="ts">
    import { get } from 'svelte/store';
    import { goto } from "$app/navigation";
    import { NextPageButton, CycleExercises, timer, timeRemaining, completedTime } from 'yoga-exercises';
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

    <CycleExercises on:timerUpdate={handleTimer}/>

    <NextPageButton to="/results" label="End Session Early" keyBind=' ' navigate={navigate}/>
</div>