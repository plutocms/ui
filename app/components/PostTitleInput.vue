<script setup lang="ts">
interface Props {
  placeholder?: string
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<Props>()

const model = defineModel<string>()
</script>

<template>
  <div class="group relative grow bg-transparent">
    <input
      v-model="model"
      v-bind="$attrs"
      v-autofocus
      :placeholder="props.placeholder || 'Add title'"
      type="text"
      class="light:text-zinc-600 cursor-pointer focus:cursor-text h-full w-full px-8 pt-8 text-4xl font-bold outline-0 dark:text-zinc-400 dark:focus:text-white placeholder:text-zinc-500 focus:placeholder:text-zinc-400"
    />

    <Icon
      name="lucide:edit"
      class="absolute right-4 top-1/2 text-2xl pointer-events-none opacity-100 group-focus-within:opacity-0"
    />
  </div>
</template>
