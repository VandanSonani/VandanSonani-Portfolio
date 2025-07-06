<script>

    let { certificate, date, location, link} = $props();

</script>

<div class="card">

    <div class="certificate">
        {certificate}
    </div>
    <div class="location">
        {location}
    </div>
    <div class="date">
        {date}
    </div>

    <a class="link" href="/">

        <div>
        Show Credentials
        </div>
        <img src="/ic_link.svg" alt = "link" class="link-image"/>
    </a>
</div>


<style>


    .link{
        padding: 0.2rem;
        color: white;
        width: 10rem;
        background: #cb997e;
        border: none;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        margin-top: 4px;
        text-decoration: inherit;
        transition: background 0.5s ease-in-out;

    }

    .link:hover{
        background: #9f7b6d;

        cursor: pointer;
    }



    .link-image{
        height: 20px;
        width: 20px;
        filter: invert(1);
    }

    .card{
        width: 508px;
        background: #d8cec3;
        padding: 16px;
        border-radius: 6px;
        box-shadow: 0 1px 7px rgba(0,0,0,0.3);
    }



    @media(max-width: 750px) {
        .card,
        .location,
        .link,
        .date
        {
            width: 400px ;
            max-width: 100% ;
            box-sizing: border-box;
            word-break: break-word;
        }
    }



</style>