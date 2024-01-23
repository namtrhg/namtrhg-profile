<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ProjectCard from '../components/ProjectCard/ProjectCard.vue'
import { formatTimeWithDate } from '../utils/time'

const projectList = [
{
    id: 1,
    name: 'Lexus Safety',
    description:
      'A landing page for Lexus Japan featuring all safety measure of each car model.',
    techStack: 'JavaScript | HTML | CSS',
    projectUrl: 'https://lexus.jp/safety/',
    imgUrl: '/images/lexus.png'
  },
  {
    id: 2,
    name: 'Suntory Wellness Club',
    description:
      'An online and mail-order service of SUNTORY that suggests products and services to individuals and provides products suited to their personal needs.',
    techStack: 'JavaScript | HTML |Babel | SCSS',
    projectUrl: 'https://www.suntory-kenko.com/suntory-wellness-club/',
    imgUrl: '/images/swc.png'
  },
  {
    id: 3,
    name: 'FieldFlex',
    description:
      'The FieldFLEX ecosystem, not only includes powerful mobile apps for Maximo and TRIRIGA, but several other key technologies that are crucial to your success: FieldFLEX FXV Platform, Mobile Software Development Kit (SDK), and the FieldFLEX Vendor Platform.  Together, these provide an enterprise-ready mobile system that works for any organization.',
    techStack: 'JavaScript | Vue 2 | CSS',
    projectUrl: 'https://fieldflex.com/mobile-solutions-for-maximo-and-tririga/',
    imgUrl: '/images/ffx.png'
  },
  {
    id: 4,
    name: 'MStation',
    description:
      'The MStation is the first BSCS Metaverse blockchain game on Binance Smart Chain (BSC). Players can summon characters, complete daily mining missions, protect the MStation, loot rare items to play and earn.',
    techStack: 'TypeScript | NextJS | Tailwind',
    projectUrl: 'https://mstation.io/',
    imgUrl: '/images/mstation.png'
  },
]

const currentTime = ref(formatTimeWithDate(new Date()))

const updateClock = () => {
  currentTime.value = formatTimeWithDate(new Date())
}

// Update the clock every second
const clockInterval = setInterval(updateClock, 1000)

onMounted(() => {
  // Initial clock update
  updateClock()
})

onBeforeUnmount(() => {
  // Clear the interval when the component is destroyed
  clearInterval(clockInterval)
})
</script>

<template>
  <div class="home">
    <div class="flex flex-col lg:flex-row justify-between lg:h-[283px] mb-12 lg:mb-28">
      <div class="flex flex-row lg:flex-col lg:justify-between items-center lg:items-start space-y-10 space-x-10 lg:space-x-0">
        <h2 class="text-3xl lg:text-6xl font-medium text-primary">Hello, I’m <br />Nam Tran.</h2>
        <img class="h-24" src="/images/miso.jpg" alt="My dog Miso" />
        <img class="h-6 lg:h-[38px] animate-bounce" src="../assets/icons/ic-arrow.svg" alt="ic-arrow-svg" />
      </div>
      <div>
        <p class="text-2xl font-normal leading-[58.32px] text-secondary lg:w-[580px] text-justify">
          {{ currentTime }}
        </p>
        <p
          class="text-lg lg:text-[32px] font-normal lg:leading-[58.32px] lg:tracking-[-1.8px] text-secondary lg:w-[580px] text-justify">
          A front-end developer with four years of experience working with ReactJS, VueJS, TypeScript
          and Tailwindcss.
        </p>
      </div>
    </div>
    <ProjectCard v-for="(item, index) in projectList" :key="item.id" :index="index" v-bind="item" />
  </div>
</template>
