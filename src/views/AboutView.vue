<template>
  <div class="border-primary border-b-2 pb-20">
    <div class="flex flex-col lg:flex-row justify-between items-center">
      <div class="lg:w-[540px]">
        <h2 class="text-6xl font-medium text-primary hidden lg:block">
          Hello, I’m <br />Nam Tran Hoang, <br />
          a front-end developer.
        </h2>
        <h2 class="text-3xl font-medium text-primary lg:hidden">
          Hello, I’m Nam Tran Hoang,
          a front-end developer.
        </h2>
        <div class="mt-16 space-y-10">
          <p class="text-secondary lg:text-3xl leading-9 tracking-tighter">
            My work is mainly focused on front-end development. I have developed and shipped
            applications in fields such as blockchain, fintech, and e-commerce.
          </p>
          <p class="text-secondary lg:text-3xl leading-9 tracking-tighter">
            I have been working with ReactJS, VueJS, TypeScript and Tailwindcss for four years now
            and I hope we can connect and collaborate!
          </p>
        </div>
      </div>
      <figure class="lg:w-[421px] mt-10 lg:mt-0">
        <img src="/images/profile.png" alt="Tran Hoang Nam" title="Tran Hoang Nam" />
      </figure>
    </div>
    <div class="flex space-x-16 mt-12 lg:mt-32">
      <p class="lg:text-lg font-medium leading-5 tracking-tight underline text-primary">Techstack:</p>
      <p class="lg:text-lg leading-5 tracking-tight text-primary">
        ReactJS, VueJS, TypeScript and Tailwindcss
      </p>
    </div>
    <div class="flex space-x-16 mt-10 lg:mt-20">
      <p class="lg:text-lg font-medium leading-5 tracking-tight underline text-primary">Development tools:</p>
      <p class="lg:text-lg leading-5 tracking-tight text-primary">
        Macbook M1, VSCode, Figma, Adobe Photoshop
      </p>
    </div>
  </div>

  <div class="mt-10 lg:mt-20 flex flex-col lg:flex-row justify-between">
    <div class="hidden lg:block">
      <p class="text-[32px] leading-9 tracking-tighter">I am thrilled to answer to</p>
      <div class="flex space-x-4 items-center">
        <p class="text-[32px] leading-9 tracking-tighter">your next project</p>
        <img class="h-[24px] rotate-[270deg]" src="../assets/icons/ic-arrow.svg" alt="ic-arrow-svg" />
      </div>
    </div>
    <p class="lg:text-[32px] leading-9 tracking-tighter lg:hidden">I am thrilled to answer to your next project</p>
    <div>
      <a href="mailto:namtrhg@gmail.com" class="lg:text-[32px] leading-9 tracking-tighter">namtrhg@gmail.com</a>
      <p class="mt-6"><a href="https://www.overleaf.com/read/gpngygrzrnyr#69c764">View
          resume</a></p>
    </div>
  </div>
</template>
