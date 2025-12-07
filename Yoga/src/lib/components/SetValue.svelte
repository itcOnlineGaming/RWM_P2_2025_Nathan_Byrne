<script lang="ts">
    import { onMount } from "svelte";
    import { writable, type Writable } from "svelte/store";

    export let store: Writable<number>;
    export let label: string;
    export let maxTime: number;
    export let step: number;
    export let minTime: number = 10; 
    export let keyBindInc: string;
    export let keyBindDec: string;

    function increase() {
        store.update(n => Math.min(n + step, maxTime));
    }

    function decrease() {
        store.update(n => Math.max(n - step, minTime));
    }

    function formatTime(sec: number) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }

        onMount(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            const key = event.key.toUpperCase();
            switch(key) {
            case keyBindInc:
                event.preventDefault();
                increase();
                break;
            case keyBindDec:
                event.preventDefault();
                decrease();
                break;
            }
        };

        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        }; 
    });

    $: barWidth = Math.min(100, ($store - minTime) / (maxTime - minTime) * 100);
</script>

<div class="timer-container">
    <button class="arrow" on:click={decrease}>⬅️</button>

    <div class="timer-bar-wrapper">
        <div class="timer-bar" style="width:{barWidth}%;"></div>
        <div class="timer-label">{label}: {formatTime($store)}</div>
    </div>

    <button class="arrow" on:click={increase}>➡️</button>
</div>
