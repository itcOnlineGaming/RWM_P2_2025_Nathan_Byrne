<script lang="ts">
    import { goto } from "$app/navigation";
    import { SelectExercisesArea, SetValue, NextPageButton, Popup, rotateTimer, timer } from "yoga-exercises";
    import "./page.css";

    const navigate = (path: string) => goto(path);
</script>

<div class="container">
    <h1 class="text-bubble">Yoga Exercises</h1>

    <SelectExercisesArea/>

    <SetValue 
        store={timer} label={"Duration"} maxTime={1200} step={30} minTime={60}
    />

    <SetValue
        store={rotateTimer} label={"Rotate Exercise"} maxTime={120} step={10} minTime={10}
    />

    <NextPageButton to="/running" label="Start" navigate={navigate}/>

    <Popup/>
</div>