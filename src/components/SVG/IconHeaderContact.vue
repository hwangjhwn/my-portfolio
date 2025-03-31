<template>
    <BaseSVG>
        <!-- BaseSVG 안에 있는 내용이 <slot> 내용으로 대체됨 -->
        <path d="M2,4v16h20V4H2z M20,8l-8,5L4,8V6l8,5l8-5V8z" />
    </BaseSVG>
</template>

<script setup>
import BaseSVG from '@/components/SVG/BaseSVG';
</script>
