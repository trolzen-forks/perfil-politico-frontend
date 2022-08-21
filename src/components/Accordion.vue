<template>
<div class="c-accordion" id="accordion-collapse" data-accordion="collapse">
    <div class="mb-4 rounded-xl shadow-md">
        <h2 id="accordion-collapse-heading-1">
            <button
                type="button"
                class="bg-background-white flex items-center justify-between w-full p-5 font-regular text-left text-xl border border-gray-200 rounded-t-xl"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-1">
                <span>{{ title }}</span>
                <span data-accordion-icon class="material-symbols-outlined w-6 h-6 rotate-180 shrink-0">
                    expand_more
                </span>
            </button>
        </h2>
        <div
        id="accordion-collapse-body-1"
        aria-labelledby="accordion-collapse-heading-1">
        <div
            class="p-5 font-light border border-gray-200 bg-background-white rounded-b-xl">
            <p class="mb-2 text-gray-500">
                <slot />
            </p>
        </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
export default {
    props: ['title'],
}
</script>