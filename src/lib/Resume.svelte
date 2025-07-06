<script>

import ExperienceCard from "./ExperienceCard.svelte";
import EducationCard from "./EducationCard.svelte";
import SkillsCard from "./SkillsCard.svelte";
import ProjectCard from "./ProjectCard.svelte";
import CertificationCard from "./CertificationCard.svelte";

</script>

<div class="holder">
    <div class="container">

        <section class="experience" id="experience">
            <h4 class="section-header">
                💼 EXPERIENCE
            </h4>
            <div class="card-container">
                <ExperienceCard company="Driving Forward" title="Consulting Intern" date="Jan. 2023 - March 2023"/>
                <ExperienceCard company="JetBrite" title="Sales Representative" date="Jun. 2022 - Sept. 2022"/>
            </div>
        </section>

        <hr class="divider"/>

        <section class="projects" id="projects">
            <h4 class="section-header">
                💻 Projects
            </h4>

            <ProjectCard name="Competitive Minesweeper" date="Jan. 2025" description="Developed a multiplayer Minesweeper game with real-time competitive leaderboard using Firestore as a
                    non-relational database and leveraged spring web sockets for seamless player interaction." description2="Utilized Java for backend game logic, for efficient mine generation, game state management,
                    matchmaking between players." skills={["Back End Development", "Front End Development", "Full Stack Development", "Test Case Developmet", "Object Oriented Programming (OOP)", "Java", "TypeScript", "Spring Boot", "FireBase"]}
                    link="https://github.com/VandanSonani/Minesweeper"/>

            <div class="padding"/>

            <ProjectCard name="Three Card Poker" date="Oct. 2024" description="Developed a two-player game, utilizing common design patterns and best software engineering practices
                    while incorporating test driven development methodologies." description2="Integrated data structures, to maintain player states and data and implement key game play features."
                    skills={["JavaFX", "CSS", "Java","Front End Development", "Back End Development", "Cascading Style Sheets (CSS)"]}
                    link="https://github.com/VandanSonani/Personal-Project-2"/>

            <div class="padding"/>


            <ProjectCard name="Digital Portfolio" date="Jul. 2025" description="Developed a fully responsive and visually appealing digital portfolio, utilizing JavaScript for interactive
                        elements and Tailwind CSS for modern styling." description2="Integrated the use of third-party APIs to dynamically display Spotify and discord content based on real-
                        time data, such as songs and availability providing a personalized user experience." skills={["Svelte", "Front End Development"]}
                        link="https://github.com/VandanSonani/VandanSonani-Portfolio"/>

        </section>
        <hr class="divider"/>
    </div>




    <div class="container">
        <section class="skills">
            <h4 class="section-header">
                👨‍💻 SKILLS
            </h4>

            <SkillsCard skill={["Front End Development", "Git", "Version Control", "React.js", "Node.js", "Next.js", "React", "Python", "C++", "C", "JavaScript", "TypeScript", "Java", "Firebase", "APIs", "Problem-solving"]} />
        </section>

        <hr class="divider" />

        <section class="education" id="education">
            <h4 class="section-header">
                🎓 Education
            </h4>

            <EducationCard university="University of Illinois at Chicago" major="B.S. in Computer Science & Linguistics" date="Aug. 2022 = May 2026 · Chicago, Illinois"/>

        </section>

        <hr class="divider"/>

        <section class="certifications" id="certification">
            <h4 class="section-header">
                📃 Certifications
            </h4>


            <CertificationCard certificate="AWS Certified Developer – Associate" date="Issued Jul 2020 — Expired Jul 2020" location="AWS Services" link="/"/>
        </section>
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

    .padding{
        padding: 10px;
    }






    .divider{
        margin: 24px 0 16px;
        border: none;
        border-top: 1px solid #8c8b8b;
        width: 489px;
    }



    @media(max-width: 1050px){
        .holder{
            flex-direction: column;
            align-items: center;
            padding: 0 1rem;

        }
    }

</style>