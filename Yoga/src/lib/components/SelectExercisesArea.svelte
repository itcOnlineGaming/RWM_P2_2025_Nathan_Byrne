<script lang="ts">
    import { filterArgTypes } from "storybook/internal/preview-api";
    import "./selectExercisesArea.css"
    
    export let exerciseEnabled: boolean[] = Array(10).fill(true);

    function updateToggle(index: number): void {
        exerciseEnabled[index] = !exerciseEnabled[index];
        console.log(exerciseEnabled[index]);
    }
</script>

<!-- 
Possible Choices:
    Meditate 🧘
    Deep Breaths 😮‍💨
    Cartwheel 🤸
    Loosen Up 🙆
    Downward Dog 🙇⬆️
    Bridge Pose 🌉
    Tree Pose 🧍🌿
    Plank 🧍➖
    Warrior I 🚶‍♂️✋
    Warrior II 🚶‍♂️👈👉
-->

<div class="area">
    <button class="btn-tooltip" on:click={() => updateToggle(0)}>🧘</button>
    <button class="btn-tooltip" on:click={() => updateToggle(1)}>😮‍💨</button>
    <button class="btn-tooltip" on:click={() => updateToggle(2)}>🤸</button>
    <button class="btn-tooltip" on:click={() => updateToggle(3)}>🙆</button>
    <button class="btn-tooltip" on:click={() => updateToggle(4)}>🙇⬆️</button>
    <button class="btn-tooltip" on:click={() => updateToggle(5)}>🌉</button>
    <button class="btn-tooltip" on:click={() => updateToggle(6)}>🧍🌿</button>
    <button class="btn-tooltip" on:click={() => updateToggle(7)}>🧍➖</button>
    <button class="btn-tooltip" on:click={() => updateToggle(8)}>🚶‍♂️✋</button>
    <button class="btn-tooltip" on:click={() => updateToggle(9)}>🚶‍♂️👈👉</button>
</div>