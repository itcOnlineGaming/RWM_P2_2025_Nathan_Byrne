<script lang="ts">
    import { exerciseEnabled, timer, rotateTimer } from "./store";
    import { createEventDispatcher, onDestroy } from "svelte";

    import MeditateImg from "./images/Meditate.png";
    import DeepBreathsImg from "./images/DeepBreaths.png";
    import CartwheelImg from "./images/Cartwheel.png";
    import LoosenUpImg from "./images/LoosenUp.png";
    import DownwardDogImg from "./images/DownwardDog.png";
    import BridgePoseImg from "./images/BridgePose.png";
    import TreePoseImg from "./images/TreePose.png";
    import PlankImg from "./images/Plank.png";
    import WarriorI_Img from "./images/WarriorII.png";
    import WarriorII_Img from "./images/WarriorII.png";

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
        { name: "Meditate 🧘", img: MeditateImg },
        { name: "Deep Breaths 😮‍💨", img: DeepBreathsImg },
        { name: "Cartwheel 🤸", img: CartwheelImg },
        { name: "Loosen Up 🙆", img: LoosenUpImg },
        { name: "Downward Dog 🙇⬆️", img: DownwardDogImg },
        { name: "Bridge Pose 🌉", img: BridgePoseImg },
        { name: "Tree Pose 🧍🌿", img: TreePoseImg },
        { name: "Plank 🧍➖", img: PlankImg },
        { name: "Warrior I 🚶‍♂️✋", img: WarriorI_Img },
        { name: "Warrior II 🚶‍♂️👈👉", img: WarriorII_Img }
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