<script>
    let { path, text } = $props();
</script>

<div>

    <a class="nav-link" href={path}>
        {text}
    </a>


</div>

<style>
    .nav-link{
            font-weight: 700;
            color: #6b705c;
            text-decoration: inherit;
            transition: 0.5s ease-in-out;
        }

    .nav-link:hover {
        color: #cb997e;
    }
</style>

