<script>

    let { title, company, date } = $props();

</script>

<div class="card">

    <div class="title">
        {title}
    </div>
    <div class="company">
        {company}
    </div>
    <div class="date">
        {date}
    </div>
</div>


<style>

    .card{
        background: #d8cec3;
        padding: 16px;
        border-radius: 6px;
        box-shadow: 0px 1px 7px rgba(0,0,0,0.3);
    }



</style>