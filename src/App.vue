<template>
  <div class="flex flex-col w-full p-4">
    <div class="mx-auto space-y-1 my-10">
      <h1
        class="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#41B883] to-[#34495E] text-transparent bg-clip-text">
        vue-ui-component-lib</h1>
    </div>
    <div class="space-y-6 pb-12 p-4 mx-auto max-w-2xl text-slate-900">
      <div class="space-y-1">
        <h3 class="font-medium text-sm text-center">Buttons</h3>
        <div class="flex items-center space-x-2 p-2 border-dashed border-gray-300 border bg-white">
          <div class="space-y-2 w-full">
            <div
              class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-center sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-end sm:justify-center">
              <VButton text="Primary"></VButton>
              <VButton text="Outlined" outlined></VButton>
              <VButton text="Shadow" shadow></VButton>
              <VButton text="Rounded" rounded></VButton>
              <VButton text="Loading" loading></VButton>
            </div>
            <div
              class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-center sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-end sm:justify-center">
              <VButton text="Primary" disabled></VButton>
              <VButton text="Outlined" disabled outlined></VButton>
              <VButton text="Shadow" disabled shadow :rounded="false"></VButton>
              <VButton text="Rounded" disabled rounded></VButton>
              <VButton text="Loading" disabled loading></VButton>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-1">
        <h3 class="font-medium text-sm text-center">Text fields</h3>
        <div class="flex items-center space-x-2 p-2 border-dashed border-gray-300 border bg-white">
          <div class="space-y-2 w-full">
            <div
              class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-center sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-end sm:justify-center">
              <VTextField label="Correo electrónico"></VTextField>
              <!-- <VButton text="Primary"></VButton>
              <VButton text="Outlined" outlined></VButton>
              <VButton text="Shadow" shadow></VButton>
              <VButton text="Rounded" rounded></VButton>
              <VButton text="Loading" loading></VButton> -->
            </div>
            <div
              class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-center sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-end sm:justify-center">
              <VButton text="Primary" disabled></VButton>
              <VButton text="Outlined" disabled outlined></VButton>
              <VButton text="Shadow" disabled shadow :rounded="false"></VButton>
              <VButton text="Rounded" disabled rounded></VButton>
              <VButton text="Loading" disabled loading></VButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background: #F3F4F6;
  transition: color 0.5s, background-color 0.5s;
  font-family: 'Manrope', sans-serif;
}
</style>