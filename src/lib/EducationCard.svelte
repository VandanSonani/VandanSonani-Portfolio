<script>

    let { major, university, date } = $props();

</script>

<div class="card">

    <div class="major">
        {major}
    </div>
    <div class="university">
        {university}
    </div>
    <div class="date">
        {date}
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

    @media(max-width: 750px) {
        .card,
        .major,
        .university,
        .date
        {
            width: 400px ;
            max-width: 100% ;
            box-sizing: border-box;
            word-break: break-word;
        }
    }
    </style>
