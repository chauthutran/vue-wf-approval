<template>
    <div class="bg-white shadow-sm p-2 flex flex-wrap items-center gap-4">
      <div class="flex gap-2 w-full flex-wrap">
        <SelectorPeriod />
        <SelectorLocation />

        <SelectorClear />

        <div class="ml-auto">
          <SelectorDataEntryToggle />
        </div>
      </div>

    </div>
</template>

<script setup lang="ts">
import SelectorClear from './SelectorClear.vue';
import SelectorDataEntryToggle from './SelectorDataEntryToggle.vue';
import SelectorLocation from './SelectorLocation.vue';
import SelectorPeriod from './SelectorPeriod.vue';
</script>