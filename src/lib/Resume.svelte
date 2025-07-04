<script>


import ExperienceCard from "./ExperienceCard.svelte";
</script>

<div class="holder">
    <div class="container">

        <section class="experience">
            <h4 class="section-header">
                💼 EXPERIENCE
            </h4>
            <div class="card-container">
                <ExperienceCard company="Driving Forward" title="Consulting Intern" date="Jan. 2023 - March 2023"></ExperienceCard>
                <div class="card">
                    <div class="title">
                        Sales Representative
                    </div>
                    <div class="company">
                        JetBrite
                    </div>
                    <div class="date">
                        Jun. 2022 - Sept. 2022
                    </div>
                </div>
            </div>
        </section>

        <hr class="divider"/>

        <section class="projects">
            <h4 class="section-header">
                💻 Projects
            </h4>
            <div class="card">
                <div class="card-body-left">
                <div class="title">
                   Competitive Minesweeper
                </div>
                <div class="date">
                    Jan. 2025
                </div>
                <div class="padding"/>

                <div class="description">
                    Developed a multiplayer Minesweeper game with real-time competitive leaderboard using Firestore as a
                    non-relational database and leveraged spring web sockets for seamless player interaction.
                    <hr class="space"/>
                    Utilized Java for backend game logic, for efficient mine generation, game state management,
                    matchmaking between players.
                </div>

                <div class="padding"/>

                <span class="badge">Back End Development</span>
                <span class="badge">Front End Development</span>
                <span class="badge">Full Stack Development</span>
                <span class="badge">Test Case Development</span>
                <span class="badge">Object Oriented Programming (OOP)</span>
                <span class="badge">Java</span>
                <span class="badge">TypeScript</span>
                <span class="badge">Spring Boot</span>
                <span class="badge">Firebase</span>
                </div>
            </div>

            <div class="padding"/>

            <div class="card">
                <div class="title">
                    Three Card Poker
                </div>
                <div class="date">
                    October 2024
                </div>
                <div class="padding"/>

                <div class="description">
                    Developed a two-player game, utilizing common design patterns and best software engineering practices
                    while incorporating test driven development methodologies.
                    <hr class="space"/>
                    Integrated data structures, to maintain player states and data and implement key game play features.
                </div>

                <div class="padding"/>


                <span class="badge">JavaFX</span>
                <span class="badge">CSS</span>
                <span class="badge">Java</span>
                <span class="badge">Front End Development</span>
                <span class="badge">Back End Development</span>
                <span class="badge">Cascading Style Sheets (CSS)</span>

            </div>

            <div class="padding"/>

            <div class="card">
                <div class="card-body-left">
                    <div class="title">
                        Digital Portfolio
                    </div>
                    <div class="date">
                        Jul. 2025
                    </div>
                    <div class="padding"/>

                    <div class="description">
                        Developed a fully responsive and visually appealing digital portfolio, utilizing JavaScript for interactive
                        elements and Tailwind CSS for modern styling.
                        <hr class="space"/>
                        Integrated the use of third-party APIs to dynamically display Spotify and discord content based on real-
                        time data, such as songs and availability providing a personalized user experience.
                    </div>


                    <span class="badge">Svelte</span>
                    <span class="badge">Front End Development</span>


                </div>

            </div>
        </section>



    </div>




    <div class="container">
        <section class="skills">
            <h4 class="section-header">
                👨‍💻 SKILLS
            </h4>
            <div class="card">
                <div class="card-body-right">
                    <span class="badge"> Front End Developement </span>
                    <span class="badge"> Git </span>
                    <span class="badge"> Version Control </span>
                    <span class="badge"> React.js </span>
                    <span class="badge"> Node.js </span>
                    <span class="badge"> Next.js </span>
                    <span class="badge"> React </span>
                    <span class="badge"> Python </span>
                    <span class="badge"> C++ </span>
                    <span class="badge"> C </span>
                    <span class="badge"> JavaScript </span>
                    <span class="badge"> TypeScript </span>
                    <span class="badge"> Firebase </span>
                    <span class="badge"> APIs </span>
                    <span class="badge"> Problem-solving </span>
                </div>

            </div>
        </section>

        <hr class="divider" />

        <section class="education">
            <h4 class="section-header">
                🎓 Education
            </h4>
            <div class="card">
                <div class="card-body-right">
                <div class="title">
                    B.S in Computer Science & Linguistics
                </div>
                <div class="company">
                    University of Illinois at Chicago
                </div>

                <div class="date">
                    Aug. 2022 - May 2026 · Chicago, Illinois
                </div>
                </div>
            </div>
        </section>

        <hr class="divider"/>
    </div>
</div>

<style>

    .card-container{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .holder {
        justify-content: center;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0 0 3rem;

    }
    .container {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section-header{
        color: #1a1a1a;
        font-weight: bolder;
        font-size: 19px;
    }

    .experience{
        padding: 1px 24px;
    }

    .skills{
        padding: 1px 24px;
        gap: 1px;

    }




    .card{
        background: #d8cec3;
        padding: 16px;
        border-radius: 6px;
        box-shadow: 0px 1px 7px rgba(0,0,0,0.3);
    }

    .card-body-left{
        width: 699px;
        gap: 1px;
    }

    .card-body-right{

        width: 508px;
        gap: 1px;
    }

    .padding{
        padding: 10px;
    }

    .description{
        width: 699px;
        font-size: x-small;
        font-weight: normal;
        color: black;
    }

    .divider{
        margin: 24px 0px 16px;
        border: none;
        border-top: 1px solid #8c8b8b;
        width: 489px;
    }

    .space{
        margin: 6px 0px 6px;
        border: none;
        border-top: 1px solid #8c8b8b;
        width: 699px;
        align-content: center;
    }

    .badge{
        font-size: x-small;
        font-weight: bolder;
        border: none;
        background: #bfb5ad;
        padding: 4.2px 7.8px;
        color: black;
    }


    @media(max-width: 1050px){
        .holder{
            flex-direction: column;
            align-items: center;
            padding: 0 1rem;

        }
    }

    @media(max-width: 750px) {
        .card,
        .card-body-left,
        .card-body-right,
        .title,
        .company,
        .date,
        .description,
        .space {
            width: 400px ;
            max-width: 100% ;
            box-sizing: border-box;
            word-break: break-word;
        }
    }

</style>