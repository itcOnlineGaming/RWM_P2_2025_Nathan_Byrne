<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import "./global.css";

    export let question = "How would you rate this?";
    export let show = false;

    const dispatch = createEventDispatcher();
    let modalEl: HTMLDivElement;

    function open() {
        show = true;
    }

    function close() {
        show = false;
        dispatch('close');
    }

    function selectRating(rating: number) {
        dispatch('ratingSelected', { rating });
        close();
    }

    $: if (show && modalEl) {
        modalEl.focus();
    }
</script>

<!-- Button to Open Popup -->
<button type="button" class="btn" data-tooltip="Open Rating Popup" on:click={open}>
    Open Current Feeling Popup
</button>

{#if show}
    <div class="overlay" role="button" tabindex="0" on:click={close}
        on:keydown={(e) => {
            if (e.key === "Enter" || e.key === " ") close();
        }}>
        <div class="modal" role="dialog" aria-modal="true"
            tabindex="-1" bind:this={modalEl} on:click|stopPropagation>
            <h2>{question}</h2>
            <div class="buttons">
                {#each Array(10) as _, i}
                    <button type="button" class="btn" on:click={() => selectRating(i + 1)}>
                        {i + 1}
                    </button>
                {/each}
            </div>
            <button type="button" class="close-btn" on:click={close}>✖</button>
        </div>
    </div>
{/if}
