<script lang="ts">
    import { onMount } from "svelte";
    import "./global.css";
    
    export let to = "/";
    export let label = "Go";
    export let keyBind: string;

    export let navigate: (path: string) => void = () => {};

    onMount(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            const key = event.key;
            if (key === keyBind) {
                event.preventDefault();
                navigate(to);
            }
        };

        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        }; 
    });
</script>

<button type="button" class="btn" on:click={() => navigate(to)}>
    {label}
</button>
