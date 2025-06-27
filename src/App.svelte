<script lang="ts">
    import Navbar from "./lib/Navbar.svelte";
    import NameTag from "./lib/NameTag.svelte";
    import Description from "./lib/Description.svelte";
</script>

<main>
        <div class="top-site">
            <NameTag/>
            <Navbar/>
        </div>
    <Description/>
</main>

<style>
 .top-site{
     display: flex;
     justify-content: space-between;
 }
</style>
