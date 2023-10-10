<script setup lang="ts">
import { addLeadingZero } from '../../utils/number'

export interface ProjectCardProps {
  index: number
  name?: string
  description?: string
  techStack?: string
  projectUrl?: string
  imgUrl?: string
}

defineProps<ProjectCardProps>()
</script>

<template>
  <div
    class="flex flex-col lg:flex-row lg:justify-between pb-10 lg:pb-28 border-b-2 border-primary mb-10 lg:mb-28 space-y-4 lg:space-y-0">
    <div class="w-[356px] flex flex-col justify-between">
      <div>
        <h3 class="uppercase text-lg font-medium text-primary tracking-[-0.54px] leading-5">
          {{ addLeadingZero(index + 1) }} / {{ name }}
        </h3>
        <p class="mt-[25px] text-lg font-normal leading-5 tracking-[-0.54px] text-primary text-justify">
          {{ description }}
        </p>
        <p class="text-sm leading-4 tracking-[-0.42px] text-secondary mt-6">
          {{ techStack }}
        </p>
      </div>
      <a :href="projectUrl" target="_blank" class="text-lg text-primary font-medium leading-5 underline">Find out more on
        this project ↗</a>
    </div>
    <figure class="lg:w-[640px] lg:h-[364px] bg-slate-600">
      <img :src="imgUrl" :alt="name" />
    </figure>
  </div>
</template>
