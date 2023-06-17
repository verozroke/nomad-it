<template>
    <ul class="cards">
        <li class="card">
            <TeamInfoCard title="Дизайнеры" :coworkers="designerCoworkers"/>
        </li>
        <li  class="card">
            <TeamInfoCard title="СММ" :coworkers="SMMCoworkers"/>
        </li>
        <li  class="card">
            <TeamInfoCard title="Разработчики" :coworkers="DeveloperCoworkers"/>
        </li>
    </ul>
</template>

<script setup>
import TeamInfoCard from './TeamInfoCard.vue';

const designerCoworkers = [
    {
        title: 'Дексан',
        jobPosition: 'UI/UX Designer',
        text: 'Талантливый дизайнер, который принес большой вклад в нашу команду. Он обладает оригинальным стилем и креативным мышлением, что делает его работу уникальной и запоминающейся.',
        link: '#',
        imagePath: ''
    },
    {
        title: 'Алмас',
        jobPosition: 'UI/UX Designer',
        text: 'Алмас обладает ярким воображением и творческим мышлением. Он всегда полон идей и новаторских подходов к дизайну. Своим вдохновением он вносит свежий взгляд в проекты и способен предложить нестандартные идеи.',
        link: '#',
        imagePath: ''
    },
]


const SMMCoworkers = [
    {
        title: 'Саяхан',
        jobPosition: 'SMM Manager',
        text: 'Саю - талантливая смм-агентка, которая вносит значительный вклад в нашу команду. Она проявляет высокий профессионализм и демонстрирует умение эффективно управлять социальными медиа-платформами. ',
        link: '#',
        imagePath: ''
    },
    {
        title: 'Сухраб',
        jobPosition: 'SMM Manager',
        text: 'Сухраб - руководитель с яркой личностью и непревзойденной энергией. Его стиль работы отличается решительностью и смелостью, и он готов принимать сложные решения в непредсказуемых ситуациях.',
        link: '#',
        imagePath: '',
    },
]


const DeveloperCoworkers = [
    {
        title: 'Владислав',
        jobPosition: 'Full-stack Developer',
        text: 'Владислав Хан - талантливый full-stack разработчик, который принес много ценного вклада в нашу команду. Он обладает веселым и жизнерадостным характером, а также имеет корейские корни. Не обращайте внимания если он будет есть собак перед вами. Владислав отличается высоким профессионализмом и способностью работать как фронтендом, так и бэкендом, что делает его важным и универсальным членом нашей команды.',
        link: '#',
        imagePath: '',
    },
    {
        title: 'Ыдырыс',
        jobPosition: 'Senior CSS Developer',
        text: 'Ыдырыс Бостан - опытный Senior CSS Developer в нашей команде. Он обладает глубокими знаниями и навыками в области CSS разработки, что позволяет ему создавать эффективные и стильные пользовательские интерфейсы. С его помощью мы можем быть уверены в качестве визуального представления наших веб-проектов. В работе он проявляет профессионализм и преданность к достижению результатов.',
        link: '#',
        imagePath: '',
    },
    {
        title: 'Асхат',
        jobPosition: 'Неизвестно',
        text: 'хз кто',
        link: '#',
        imagePath: '',
    },
]

</script>

<style lang="scss" scoped>

.cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2em;

    width: 100%;
}

.card {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #000;
    width: 100%;;
}

</style>