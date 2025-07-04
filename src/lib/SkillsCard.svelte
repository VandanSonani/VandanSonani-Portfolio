<script>


    let {skill = []} = $props();

</script>


<div class="card">
    <div class="card-body-right">
        {#each skill as skill}
        <span class="badge"> {skill} </span>
            {/each}
    </div>

</div>

<style>

    .card{
        width: 508px;
        background: #d8cec3;
        padding: 16px;
        border-radius: 6px;
        box-shadow: 0 1px 7px rgba(0,0,0,0.3);
    }

    .card-body-right{
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    .badge{

        font-size: x-small;
        font-weight: bolder;
        border: none;
        background: #bfb5ad;
        padding: 4.2px 7.8px;
        color: black;
    }


    @media(max-width: 750px) {
        .card
        {
            width: 400px ;
            max-width: 100% ;
            box-sizing: border-box;
            word-break: break-word;
        }
    }


</style>