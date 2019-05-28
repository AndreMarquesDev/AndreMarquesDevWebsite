<template>
    <section class="aboutMe mainSection">
        <div class="wrapper">

            <animatedLetters text="<about/>"/>

            <code class="">
                <p v-for="(line, index) in code" v-html="line.html" :class="['scrollReveal', line.identation]" :lineNumber="index + 1"></p>
            </code>

        </div>
    </section>
</template>

<script>
import animatedLetters from './../components/animatedLetters.vue';

export default {
    name: 'aboutMe',
    components: {
        animatedLetters
    },
    data() {
        return {
            code: [
                {
                    html: '<span class="yellow">const hireMe <span class="orange">=</span> (</span>education, skills, workExperience<span class="yellow">) => {</span>',
                    identation: null
                },
                {
                    html: '',
                    identation: null
                },
                {
                    html: '<span class="orange">if</span> <span class="purple">(</span>skills <span class="orange">===</span> <span class="red">false</span><span class="purple">)</span> <span class="orange">return</span>;',
                    identation: 'identation1'
                },
                {
                    html: '',
                    identation: null
                },
                {
                    html: '<span class="yellow">const</span> aboutMe <span class="orange">=</span> <span class="purple">{</span>',
                    identation: 'identation1'
                },
                {
                    html: `<span class="lightblue">name</span>: <span class="green">'André Marques'</span>,`,
                    identation: 'identation2'
                },
                {
                    html: `<span class="lightblue">year</span>: <span class="red threeDHover">1993</span>,`,
                    identation: 'identation2'
                },
                {
                    html: `<span class="lightblue">city</span>: <span class="green">'Lisbon'</span>,`,
                    identation: 'identation2'
                },
                {
                    html: `<span class="lightblue">country</span>: <span class="green">'Portugal'</span>,`,
                    identation: 'identation2'
                },
                {
                    html: `<span class="lightblue">email</span>: <a href="mailto:andregm_7@hotmail.com" class="link"><span class="green">'andregm_7@hotmail.com'</span></a>,`,
                    identation: 'identation2'
                },
                {
                    html: `<span class="lightblue">role</span>: <span class="green">'Frontend Developer'</span>`,
                    identation: 'identation2'
                },
                {
                    html: '<span class="purple">}</span>',
                    identation: 'identation1'
                },
                {
                    html: '',
                    identation: null
                },
                {
                    html: '<span class="yellow">education</span><span class="purple">() {</span>',
                    identation: 'identation1'
                },
                {
                    html: '<span class="red">2016</span> <span class="orange">&&</span>',
                    identation: 'identation2'
                },
                {
                    html: `<span class="green">'Graduated in Law'</span>`,
                    identation: 'identation3'
                },
                {
                    html: '<span class="red">2017</span> <span class="orange">&&</span>',
                    identation: 'identation2'
                },
                {
                    html: `<span class="green">'Frontend and Responsive Web Development'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<a href="https://edit.com.pt/formacao/curso-frontend-development-lisboa" target="_blank" rel="noreferrer" aria-label="EDIT. website" class="link"><span class="green">'@ EDIT. - Disruptive Digital Education'</span></a>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'248h intensive course in HTML, CSS and JavaScript'</span>`,
                    identation: 'identation3'
                },
                {
                    html: '<span class="purple">}</span>',
                    identation: 'identation1'
                },
                {
                    html: '',
                    identation: null
                },
                {
                    html: '<span class="yellow">skills</span><span class="purple">() {</span>',
                    identation: 'identation1'
                },
                {
                    html: 'mainSkills <span class="orange">=</span> <span class="lightblue">[</span>',
                    identation: 'identation2'
                },
                {
                    html: `<span class="green">'JavaScript'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'Vue (including Vuex and Vue-Router)'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'HTML'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'CSS'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'jQuery'</span>`,
                    identation: 'identation3'
                },
                {
                    html: '<span class="lightblue">]</span>',
                    identation: 'identation2'
                },
                {
                    html: '',
                    identation: null
                },
                {
                    html: 'extras <span class="orange">=</span> <span class="lightblue">[</span>',
                    identation: 'identation2'
                },
                {
                    html: `<span class="green">'SASS'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'BEM'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'REST'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'Ajax'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'Axios'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'Progressive Web Apps'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'Webpack'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'Gulp'</span>,`,
                    identation: 'identation3'
                },

                {
                    html: `<span class="green">'Firebase'</span>,`,
                    identation: 'identation3'
                },

                {
                    html: `<span class="green">'Netlify'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'Slick.js'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'Flickity.js'</span>`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'FusionCharts.js'</span>`,
                    identation: 'identation3'
                },
                {
                    html: '<span class="lightblue">]</span>',
                    identation: 'identation2'
                },
                {
                    html: '',
                    identation: null
                },
                {
                    html: 'basicUnderstanding <span class="orange">=</span> <span class="lightblue">[</span>',
                    identation: 'identation2'
                },
                {
                    html: `<span class="green">'React'</span>,`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'Express'</span>`,
                    identation: 'identation3'
                },
                {
                    html: `<span class="green">'Shopify'</span>`,
                    identation: 'identation3'
                },
                {
                    html: '<span class="lightblue">]</span>',
                    identation: 'identation2'
                },
                {
                    html: '<span class="purple">}</span>',
                    identation: 'identation1'
                },
                {
                    html: '',
                    identation: null
                },
                {
                    html: '<span class="yellow">workExperience</span><span class="purple">(</span>company, role, years, jobDescription, projects<span class="purple">) {</span>',
                    identation: 'identation1'
                },
                {
                    html: `company <span class="orange">=</span> <a href="https://www.fullsix.pt" target="_blank" rel="noreferrer" aria-label="Fullsix website" class="link"><span class="green">'Fullsix Portugal'</span></a>;`,
                    identation: 'identation2'
                },
                {
                    html: `role <span class="orange">=</span> <span class="green">'Frontend Developer'</span>;`,
                    identation: 'identation2'
                },
                {
                    html: `years <span class="orange">=</span> <span class="red">2</span>;`,
                    identation: 'identation2'
                },
                {
                    html: `jobDescription <span class="orange">=</span> <span class="green">'I've been working at Fullsix for 2 years as a Frontend Developer. I'm used to deal with high profile clients, since this is one of Portugal's biggest digital agencies. We work in a team environment with constant communication with UI and UX teams, as well as the Backend developers.'</span>;`,
                    identation: 'identation2'
                },
                {
                    html: `projects <span class="orange">=</span> <a href="work" class="link innerLink"><span class="green">'Ageas Portugal'</span></a> <span class="orange">+</span> <a href="work" class="link innerLink"><span class="green">'Seguro Directo'</span></a> <span class="orange">+</span> <a href="work" class="link innerLink"><span class="green">'Galp Corporate Event'</span></a>;`,
                    identation: 'identation2'
                },
                {
                    html: '<span class="purple">}</span>',
                    identation: 'identation1'
                },
                {
                    html: '',
                    identation: null
                },
                {
                    html: '<span class="yellow">currentJob</span><span class="purple">(</span>company, role, from<span class="purple">) {</span>',
                    identation: 'identation1'
                },
                {
                    html: `company <span class="orange">=</span> <a href="https://aboutfarfetch.com" target="_blank" rel="noreferrer" aria-label="Farfetch about website" class="link"><span class="green">'Farfetch'</span></a>;`,
                    identation: 'identation2'
                },
                {
                    html: `role <span class="orange">=</span> <span class="green">'Frontend Developer'</span>;`,
                    identation: 'identation2'
                },
                {
                    html: `from <span class="orange">=</span> <span class="red">June 2019</span>;`,
                    identation: 'identation2'
                },
                {
                    html: '<span class="purple">}</span>',
                    identation: 'identation1'
                },
                {
                    html: '',
                    identation: null
                },
                {
                    html: '<span class="orange">return</span> education, skills, workExperience;',
                    identation: 'identation1'
                },
                {
                    html: '<span class="purple">}</span>',
                    identation: null
                },
                {
                    html: '',
                    identation: null
                },
                {
                    html: '<span class="orange">if</span> <span class="yellow">(</span>needNewWebsite <span class="orange">===</span> <span class="red">true</span><span class="yellow">) <a href="contact" class="link innerLink">hireMe()</a></span>;',
                    identation: null
                }
            ]
        }
    },
    mounted() {
        this.$el.querySelectorAll('.link.innerLink').forEach(manualLink => {
            manualLink.addEventListener('click', event => {
                event.preventDefault();

                const route = event.currentTarget.getAttribute('href');
                this.$router.push(route);
            });
        })
    }
}

// Code sample

// const hireMe = (education, skills, workExperience) => {

//     if (skills === false) return;

//     const aboutMe = {
//         name: 'André Marques',
//         year: 1993,
//         city: 'Lisbon',
//         country: 'Portugal',
//         email: 'andregm_7@hotmail.com',
//         role: 'Frontend Developer'
//     }

//     education() {
//         2016 &&
//             'Graduated in Law'
//         2017 &&
//             'Frontend and Responsive Web Development',
//             '@ EDIT. - Disruptive Digital Education',
//             '248h intensive course in HTML, CSS and JavaScript'
//     },

//     skills() {
//         mainSkills = [
//             'JavaScript',
//             'Vue (including Vuex and Vue-Router)',
//             'HTML',
//             'CSS',
//             'jQuery'
//         ]

//         extras = [
//             'SASS',
//             'BEM',
//             'Progressive Web Apps',
//             'Webpack',
//             'Gulp',
//             'Firebase',
//             'Netlify',
//             'Slick.js',
//             'Flickity.js'
//         ]

//         basicUnderstanding = [
//             'React',
//             'Shopify'
//         ]
//     }

//     workExperience(role, company, jobDescription) {
//         role = 'Frontend Developer';
//         company = 'Fullsix';
//         jobDescription = `I've been working at Fullsix for 2 years as a Frontend Developer. I'm used to deal with high profile clients, since this is one of Portugal's biggest digital agencies.
//                             We work in a team environment with constant communication with UI and UX teams, as well as the Backend developers.`;
//         projects = 'Ageas Portugal' + 'Seguro Directo' + 'Galp Corporate Event';
//     }

//     return education, skills, workExperience;
// }

// if (needNewWebsite === true) hireMe();

</script>

<style lang='scss'>
@import '../styles/variables.scss';

$identation1: 40px;
$identation2: #{$identation1 * 2};
$identation3: #{$identation1 * 3};

.aboutMe {

    .animatedLetters {
        @include fontXXL;
        font-weight: $fontBold;
        margin-bottom: 40px;
    }

    code {
        display: block;
        position: relative;
        @include fontM;
        margin-left: 60px;

        &:before {
            content: '';
            width: 5px;
            height: 100%;
            position: absolute;
            top: 0;
            left: -20px;
            background: $white;
        }

        p {
            min-height: 26px;
            position: relative;
            z-index: 1;

            &.identation1 {
                padding-left: $identation1;
            }

            &.identation2 {
                padding-left: $identation2;
            }

            &.identation3 {
                padding-left: $identation3;
            }

            &:before {
                content: attr(linenumber);
                position: absolute;
                top: 0;
                left: -50px;
                color: #aaa;
            }

            &:after {
                content: '';
                width: 1000vw;
                height: 100%;;
                position: absolute;
                top: 0;
                left: -100%;
                background: rgba($white, .1);
                opacity: 0;
                z-index: -1;
            }

            &:hover:after {
                opacity: 1;
            }

            .yellow {
                color: $aboutMeYellow;

                .link {
                    color: inherit;

                    &:before {
                        background: $aboutMeYellow;
                    }

                }
            }

            .orange {
                color: $aboutMeOrange;
            }

            .red {
                color: $aboutMeRed;
            }

            .purple {
                color: $aboutMePurple;
            }

            .green {
                color: $aboutMeGreen;
            }

            .lightblue {
                color: $aboutMeLightBlue;
            }

            .threeDHover:before {
                content: '25yo';
            }

        }

    }

    @include tablet {
        code {
            margin-left: 30px;

            &:before {
                left: -14px;
            }

            p:before {
                left: -40px;
            }

        }
    }

}
</style>