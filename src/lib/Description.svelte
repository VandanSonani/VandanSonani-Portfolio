<script>
    import '@fontsource/titillium-web/200.css';




    let typedChars = "";
    let phrase = ["Front-End Developer 🖥️", "Back-End Developer 🖥️", "Software Engineer 🖥️"];


    let index = 0;
    let phraseIndex = 0;
    let done = false;

    let tmpStr = phrase[0];

    const rotateStr = () => {
        phraseIndex++;
        if(phraseIndex > 2){
            phraseIndex = 0
        }
    }

    const typedChar=async () => {
        if (index < tmpStr.length && !done) {
            typedChars += tmpStr[index];
            index += 1;
            if (index === tmpStr.length) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                done = true;
            }
        } else if (done) {
            typedChars = typedChars.slice(0, index - 1);
            index -= 1;
            if (index === 0) {
                rotateStr();
                done = false;
                tmpStr = phrase[phraseIndex];
            }
        }
        // if index == frontend.length


    }


    const typing = () => setInterval(typedChar, 50)


    typing();
</script>


<div class="container">
    <div class="bio">


        <div class="title">
        Hi, I'm Vandan Sonani
        </div>


            <span class="writing">
                <div>{typedChars}</div>
                <div class = "type-cursor">|
            </div>
            </span>

        <div class="description">
            Senior CS + LING student at UIC focused on
            <span class="special">full stack development and UI design</span>.
            Experienced with
            <span class="special">JavaScript, C++, React, & client-server apps</span>.
            Passionate about building intuitive user experiences and exploring tech in linguistics.
        </div>

        <div class="social">
            <a class="github" href="https://github.com/VandanSonani" aria-label="x">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36"
                     viewBox="0 0 65 65" class="github-icon">
                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                </svg>
            </a>
            <a class="linkedin" href="https://www.linkedin.com/in/vandan-sonani-768849253/" aria-label="x">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36"
                     viewBox="0 0 50 50" class="linkedin-icon">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
            </a>
            <a class="resume" href="https://drive.google.com/file/d/1snZcj-wXFLrIx4-9yZygHWLsQbnPRJ5b/view?usp=sharing" aria-label="x">
                <svg viewBox="50 -10 510 500" height="37" width="40" xmlns="http://www.w3.org/2000/svg" class="resume-icon">
                    <path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z"></path></svg>
            </a>


            <p class="extra-info-section">

                <span class="text">
                    <svg class="age-icon" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z"></path><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z"></path></svg>
                    21 yrs
                </span>

                <span class="text">
                    <svg class="location-icon" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>
                    Chicago, Illinois
                </span>

            </p>
        </div>
    </div>

    <div class="pic">
        <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/67400593_919274305083077_3341480609213054976_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=0axYxmukw50Q7kNvwGLkcP0&_nc_oc=Adni2Uvv3nRrv5rQaHWEkJbuN9sqDV2kunnYWcfDwPobwYpSEKXa6VsUUBuj9uopCOs&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sPG4gUxjRJijcHkAIzyOqQ&oh=00_AfP-fgAimRAIR1FoZ4bRVq0RPLFp521E_vImqd5AO_Uf-w&oe=688D2E53" alt = "pic" height="480px" width="400px"/>

    </div>

</div>

<style>


    .extra-info-section{

        gap: 30px;
        display: flex;
    }

    .age-icon{
        vertical-align: middle;
    }

    .location-icon{
        vertical-align: middle;
    }

    .text{
        color: black;

    }

    .social{
        padding-top: 10px;
    }

    .github-icon:hover{
        fill: #838383;
        transition-duration: .5s;
    }

    .linkedin-icon:hover{
        fill: #569bff;
        transition-duration: .5s;
    }

    .resume-icon:hover{
        fill: #9a9a03;
        transition-duration: .5s;
    }

    .pic{
        padding: 0 5rem 0 5rem;
    }


    .description{
        color: #000000;
        max-width: 50rem;


    }

    .special{
        font-weight: 900;
        background: linear-gradient(0.25turn, #cb997e, #6b705c);
        background-clip: border-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }

    .container{
        display: flex;
        padding: 0 2rem 0 2rem;
        align-items: center;
        justify-content: center;
    }

    .bio{
        justify-content: start;
    }

    .title{
        font-size: xx-large;
        color: #6b705c;
        text-align: start;
        justify-content: start;
    }

    .writing{
        font-size: xx-large;
        color: #000000;
        align-content: center;
        display: flex;
        width: 25rem;
        font-weight: bolder;


    }

    .type-cursor{
        animation: mymove 1s infinite;

    }

    @keyframes mymove {
        50% {opacity: 0;}
    }

    @media (max-width: 1050px){
        .container{
            flex-direction: column;
            align-items: center;
            padding: 0 1rem;
        }
        .pic{
            padding: 2rem 0 0 0;
        }

        .writing{
            width: 100%;
            font-size: x-large;
        }
    }



</style>