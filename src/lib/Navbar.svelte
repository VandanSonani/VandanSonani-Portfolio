
<script>

    import NavItem from "./NavItem.svelte";
</script>


<nav class="navbar">

    <a href="/#" class="toggle-button" aria-label="x">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>

    <div class="container-fluid">
        <div class="links">
            <NavItem text="💼 Experience" path="/#experience"/>
            <NavItem text="🎓 Education" path="/#education"/>
            <NavItem text="💻 Projects" path="/#projects"/>
            <NavItem text="📞 Contact Me" path="/#contact"/>
        </div>
    </div>

</nav>

<style>
    .navbar{
        align-content: center;

    }

    .links{
        flex-direction: row;
        display: flex;
        gap: 10px;
    }

    .toggle-button .bar{
        height: 3px;
        width: 100%;
        background-color: #000000;
        border-radius: 10px;
    }

    .toggle-button{
        position: absolute;
        top: 2.2rem;
        right: 1rem;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
    }

    @media (max-width: 755px){
        .container-fluid{
            display: flex;
        }

        .toggle-button{
            display: flex;
        }

        .links{
            display: none;
            flex-direction: column;
            margin-top: 60px;
            gap: 15px;
        }



    }


</style>
