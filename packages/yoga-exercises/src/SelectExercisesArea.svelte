<script lang="ts">
    import { onMount } from "svelte";
    import { exerciseEnabled } from "./store";
    import "./global.css";

    function updateToggle(index: number): void {
        exerciseEnabled.update(arr => {
            arr[index] = !arr[index];
            console.log(arr[index]);
            return arr;
        });
    }

    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    function handleKeyboardClicks(num: number): void {
        const convertKeyPress: { [key: number]: number } = {
            1:0, 2:1, 3:2, 4:3, 5:4,
            6:5, 7:6, 8:7, 9:8, 0:9
        }
        const index = convertKeyPress[num];
        updateToggle(index);
    }

    onMount(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            const key = event.key;
            if (key >= '0' && key <= '9') {
                const num = parseInt(event.key);
                handleKeyboardClicks(num);
            }
        };

        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        }; 
    });
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

<div class="button-wrapper">
    <button class="btn" class:green-border={$exerciseEnabled[0]} class:red-border={!$exerciseEnabled[0]} on:click={() => updateToggle(0)}>🧘
        <div class="tooltip">Meditate<br>Relax your Body, and Focus<br>
            Difficulty: Easy</div> </button>
    <button class="btn" class:green-border={$exerciseEnabled[1]} class:red-border={!$exerciseEnabled[1]} on:click={() => updateToggle(1)}>😮‍💨
        <div class="tooltip">Deep Breaths<br>Inhale Slowly and Exhale Gently<br>
            Difficulty: Easy</div> </button>
    <button class="btn" class:green-border={$exerciseEnabled[2]} class:red-border={!$exerciseEnabled[2]} on:click={() => updateToggle(2)}>🤸
        <div class="tooltip">Cartwheel<br>Rotate your Body with a Sideways Movement<br>
            Difficulty: Hard</div> </button>
    <button class="btn" class:green-border={$exerciseEnabled[3]} class:red-border={!$exerciseEnabled[3]} on:click={() => updateToggle(3)}>🙆
        <div class="tooltip">Loosen Up<br>Light Movements to Reduce Tension<br>
            Difficulty: Easy</div> </button>
    <button class="btn" class:green-border={$exerciseEnabled[4]} class:red-border={!$exerciseEnabled[4]} on:click={() => updateToggle(4)}>🙇⬆️
        <div class="tooltip">Downward Dog<br>Make a Interted V-Shape with your Body<br>
            Difficulty: Medium</div> </button>
    <button class="btn" class:green-border={$exerciseEnabled[5]} class:red-border={!$exerciseEnabled[5]} on:click={() => updateToggle(5)}>🌉
        <div class="tooltip">Bridge Pose<br>Lie Back, Bend Knees and Lift Hips Upwards<br>
            Difficulty: Hard</div> </button>
    <button class="btn" class:green-border={$exerciseEnabled[6]} class:red-border={!$exerciseEnabled[6]} on:click={() => updateToggle(6)}>🧍🌿
        <div class="tooltip">Tree Pose<br>Stand with One Leg and Balance<br>
            Difficulty: Easy</div> </button>
    <button class="btn" class:green-border={$exerciseEnabled[7]} class:red-border={!$exerciseEnabled[7]} on:click={() => updateToggle(7)}>🧍➖
        <div class="tooltip">Plank<br>Maintain a Straight Formation with your Body<br>
            Difficulty: Hard</div> </button>
    <button class="btn" class:green-border={$exerciseEnabled[8]} class:red-border={!$exerciseEnabled[8]} on:click={() => updateToggle(8)}>🚶‍♂️✋
        <div class="tooltip">Warrior I<br>Back Foot Lunge with Raised Overhead Arms<br>
            Difficulty: Medium</div> </button>
    <button class="btn" class:green-border={$exerciseEnabled[9]} class:red-border={!$exerciseEnabled[9]} on:click={() => updateToggle(9)}>🚶‍♂️👈👉
        <div class="tooltip">Warrior II<br>Wide-Leg Lunge with Extended Parallel Arms<br>
            Difficulty: Medium</div> </button>
</div>
