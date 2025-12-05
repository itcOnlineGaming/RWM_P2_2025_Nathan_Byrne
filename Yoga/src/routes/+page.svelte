<script lang="ts">
    import { goto } from "$app/navigation";
    import SelectExercisesArea from "$lib/components/SelectExercisesArea.svelte";
    import NextPageButton from "$lib/components/NextPageButton.svelte";
    import SetTimer from "$lib/components/SetTimer.svelte";
    import Popup from "$lib/components/Popup.svelte";
    import "./page.css";

    const navigate = (path: string) => goto(path);
</script>

<div class="container">
    <h1 class="text-bubble">Yoga Exercises</h1>

    <!-- Selecting Exercises -->
    <SelectExercisesArea/>

    <!--Select Duration -->
    <SetTimer/>

    <!-- Page Navigation -->
    <NextPageButton to="/running" label="Start" navigate={navigate}/>

    <!-- Popup for Current State of Mind -->
    <Popup/>
</div>