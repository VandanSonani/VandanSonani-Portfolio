<script>

    let {name, date, description, description2, skills = [], link} = $props();


</script>


<div class="card">
    <div class="card-body-left">
        <div class="title">
            {name}
        </div>
        <div class="date">
            {date}
        </div>

        <div class="description">
            {description}
            <hr class="space"/>
            {description2}
        </div>

        <div class="badge-container">
        {#each skills as skill}
            <span class="badge">{skill}</span>
            {/each}
        </div>


        <a class="project-link" href={link}>
            View Project
        </a>

    </div>


</div>



<style>

    .project-link{
        display: flex;
        flex-wrap: wrap;


        background: #cb997e;
        font-size: x-small;
        padding: 1px 1px 1px;
        height: auto;
        color: white;
    }

    .project-link:hover{
        background: #c6a89c;
        transition-duration: 0.5s;
    }

    .card{
        display: flex;
        flex-wrap: wrap;
        background: #d8cec3;
        padding: 16px;
        border-radius: 6px;
        box-shadow: 0 1px 7px rgba(0,0,0,0.3);
    }

    .card-body-left{
        display: flex;
        flex-wrap: wrap;

    }

    .badge{

        font-size: x-small;
        font-weight: bolder;
        border: none;
        background: #bfb5ad;
        padding: 4.2px 7.8px;
        color: black;

    }

    .badge-container{
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-bottom: 30px;
    }

    .card-body-left{
        width: 699px;
        gap: 1px;
    }

    .description{
        margin-top: 30px;
        width: 699px;
        font-size: x-small;
        font-weight: normal;
        color: black;
    }

    @media(max-width: 750px) {
        .card,
        .title,
        .date
        {
            width: 400px ;
            max-width: 100% ;
            box-sizing: border-box;
            word-break: break-word;
        }
    }

    .space{
        margin: 6px 0 6px;
        border: none;
        border-top: 1px solid #8c8b8b;
        width: 699px;
        align-content: center;
    }








</style>