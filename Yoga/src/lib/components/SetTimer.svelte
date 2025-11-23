<script lang="ts">
    import "./global.css";

    let timer: number = 600;
    const increment = 30;
    const maxTime = 1200; 

    function increase() {
        if (timer < maxTime) timer += increment;
    }

    function decrease() {
        if (timer > 0) timer -= increment;
    }

    function formatTime(sec: number) {
        const minutes = Math.floor(sec / 60);
        const seconds = sec % 60;
        return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    }

    $: barWidth = Math.min(100, (timer / maxTime) * 100);
</script>

<div class="timer-container">
    <button class="arrow" on:click={decrease}>⬅️</button>

    <div class="timer-bar-wrapper">
        <div class="timer-bar" style="width: {barWidth}%"></div>
        <div class="timer-label">Duration: {formatTime(timer)}</div>
    </div>

    <button class="arrow" on:click={increase}>➡️</button>
</div>
