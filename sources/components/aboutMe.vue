<template>
    <section class="aboutMe">
        <div class="wrapper">

            <animatedLetters text="<about/>"/>

            <code>
                <p v-for="(line, index) in code" v-html="line.html" :class="line.identation" :lineNumber="index + 1"></p>
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
                    html: `<span class="lightblue">year</span>: <span class="red">1993</span>,`,
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
                    html: `<span class="lightblue">email</span>: <span class="green">'andregm_7@hotmail.com'</span>,`,
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
                    html: `<span class="green">'@ EDIT. - Disruptive Digital Education'</span>,`,
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
                    html: '<span class="yellow">workExperience</span><span class="purple">(</span>company, role, years, jobDescription<span class="purple">) {</span>',
                    identation: 'identation1'
                },
                {
                    html: `company <span class="orange">=</span> <span class="green">'Fullsix'</span>;`,
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
                    html: `projects <span class="orange">=</span> <span class="green">'Ageas Portugal'</span> <span class="orange">+</span> <span class="green">'Seguro Directo'</span> <span class="orange">+</span> <span class="green">'Galp Corporate Event'</span>;`,
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
                    html: '<span class="orange">if</span> <span class="yellow">(</span>needNewWebsite <span class="orange">===</span> <span class="red">true</span><span class="yellow">) hireMe()</span>;',
                    identation: null
                }
            ]
        }
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

$yellow: #ffc600;
$orange: #ff7200;
$red: #f44542;
$purple: #fb94ff;
$green: #a5ff90;
$lightblue: #9effff;

.aboutMe {
    width: 100%;
    display: flex;
    position: relative;
    padding: calc(#{$navHeight + 40}) 0 calc(#{$footerHeight + 40});

    .animatedLetters {
        @include fontXXL;
        font-weight: $fontBold;
        text-align: left;
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

            .yellow {
                color: $yellow;
            }

            .orange {
                color: $orange;
            }

            .red {
                color: $red;
            }

            .purple {
                color: $purple;
            }

            .green {
                color: $green;
            }

            .lightblue {
                color: $lightblue;
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