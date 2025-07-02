<script lang="ts">
    import Navbar from "./lib/Navbar.svelte";
    import NameTag from "./lib/NameTag.svelte";
    import Description from "./lib/Description.svelte";
    import Resume from "./lib/Resume.svelte";
</script>

<main>
    <div class="top-site">
        <NameTag/>
        <Navbar/>
    </div>
    <div class="description-holder">
        <Description/>
    </div>
    <div>
        <Resume/>
    </div>
</main>

<style>
 .top-site{
     display: flex;
     justify-content: space-between;
 }
</style>
