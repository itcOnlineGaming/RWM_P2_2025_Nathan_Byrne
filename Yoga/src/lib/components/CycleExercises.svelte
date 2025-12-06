<script lang="ts">
    import { ExerciseButtons } from "./SelectExercisesArea.stories";
    import { exerciseEnabled, timer, rotateTimer } from "./store";
    import { createEventDispatcher, onDestroy } from "svelte";

    export let timeRemaining = $timer;
    let currentExercise: string = "";
    let currentExerciseImg: string = "";
    const interval = setInterval(updateCurrentExercise, $rotateTimer * 1000);
    const timeInterval = setInterval(updateTime, 1000);
    const dispatch = createEventDispatcher();

    /*
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
    */

    interface Exercise {
        name: string;
        img: string;
    }

    const exercises: Exercise[] = [
        { name: "Meditate 🧘", img: "/images/Meditate.png" },
        { name: "Deep Breaths 😮‍💨", img: "/images/DeepBreaths.png" },
        { name: "Cartwheel 🤸", img: "/images/Cartwheel.png" },
        { name: "Loosen Up 🙆", img: "/images/LoosenUp.png" },
        { name: "Downward Dog 🙇⬆️", img: "/images/DownwardDog.png" },
        { name: "Bridge Pose 🌉", img: "/images/BridgePose.png" },
        { name: "Tree Pose 🧍🌿", img: "/images/TreePose.png" },
        { name: "Plank 🧍➖", img: "/images/Plank.png" },
        { name: "Warrior I 🚶‍♂️✋", img: "/images/WarriorII.png" },
        { name: "Warrior II 🚶‍♂️👈👉", img: "/images/WarriorII.png" }
    ];

    function updateCurrentExercise() {
        // Random Exercise
        let randI;
        do {
            randI = Math.floor(Math.random() * 10);
        } while ($exerciseEnabled[randI] == false);
        console.log("Ran " + randI);
        currentExercise = exercises[randI].name;
        currentExerciseImg = exercises[randI].img;
    }

    updateCurrentExercise();

    function updateTime() {
        if (timeRemaining > 0) {
            timeRemaining--;
        }
        dispatch("timerUpdate", timeRemaining);
    }

    function formatTime(seconds: number) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
    }

    onDestroy(() => {
        clearInterval(interval);
        clearInterval(timeInterval);
        console.log("Timer Stopped");
    });
</script>

<div class="non-img-side">
    <div class="text-bubble">
        <h2>Current Exercise: {currentExercise}</h2>
        <h2>Duration: {formatTime(timeRemaining)} of {formatTime($timer)}</h2>
    </div>
</div>

<div class="img-side">
    <img src={currentExerciseImg} alt={currentExercise}/>
</div>

<style>
    .non-img-side {
        flex: 1;
    }

    .img-side img {
        max-width: 300px;
        height: auto;
        border-radius: 12px;
    }
</style>