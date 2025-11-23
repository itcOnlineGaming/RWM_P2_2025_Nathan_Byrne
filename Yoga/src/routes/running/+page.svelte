<script lang="ts">
    import { goto } from "$app/navigation";
    //import { exerciseEnabled } from "../../lib/components/SelectExercisesArea.svelte";
    import NextPageButton from "$lib/components/NextPageButton.svelte";
    import CycleExercises from "$lib/components/CycleExercises.svelte";

    const navigate = (path: string) => goto(path);
</script>

<p>Yoga Running Page</p>

<!-- Shown Current Exercise -->
<CycleExercises/>

<!-- Early Navigation to Results -->
<NextPageButton to="/results" label="End Session Early" navigate={navigate}/>