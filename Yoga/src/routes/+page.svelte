<script lang="ts">
    import { goto } from "$app/navigation";
    import { timer, rotateTimer } from "../lib/components/store";
    import SelectExercisesArea from "$lib/components/SelectExercisesArea.svelte";
    import NextPageButton from "$lib/components/NextPageButton.svelte";
    import SetValue from "$lib/components/SetValue.svelte";
    import Popup from "$lib/components/Popup.svelte";
    import "./page.css";

    const navigate = (path: string) => goto(path);
</script>

<div class="container">
    <h1 class="text-bubble">Yoga Exercises</h1>

    <!-- Selecting Exercises -->
    <SelectExercisesArea/>

    <!-- Select Duration -->
    <SetValue 
        store={timer} label={"Duration"} maxTime={1200} step={30} minTime={60}
    />

    <!-- Select Exercise Rotations -->
    <SetValue 
        store={rotateTimer} label={"Rotate Exercises"} maxTime={120} step={10} minTime={10}
    />

    <!-- Page Navigation -->
    <NextPageButton to="/running" label="Start" navigate={navigate}/>

    <!-- Popup for Current State of Mind -->
    <Popup/>
</div>