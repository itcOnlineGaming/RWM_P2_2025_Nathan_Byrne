<script lang="ts">
    import "./nextPageButton.css";
    
    export let to = "/";
    export let label = "Go";

    export let navigate: (path: string) => void = () => {};
</script>

<button onclick={() => navigate(to)} class="nav-btn">
    {label}
</button>
