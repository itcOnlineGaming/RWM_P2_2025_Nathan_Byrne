<script lang="ts">
    import { goto } from "$app/navigation";
    import SelectExercisesArea from "$lib/components/SelectExercisesArea.svelte";
    import NextPageButton from "$lib/components/NextPageButton.svelte";

    const navigate = (path: string) => goto(path);
</script>

<p>Yoga Main Page</p>

<!-- Selecting Exercises -->
<SelectExercisesArea/>

<!-- Page Navigation -->
<NextPageButton to="/running" label="Start" navigate={navigate}/>

<!-- Popup for Current State of Mind -->