<script lang="ts">
    import { exerciseEnabled, timer } from "./store";
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
    {#each $exerciseEnabled as enabled, i}
        <span>{i + 1}: {enabled ? "Enabled" : "Disabled"}</span>
    {/each}
</div>

<h1>Duration: {$timer}</h1>