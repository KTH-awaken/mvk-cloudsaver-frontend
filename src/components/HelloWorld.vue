<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        message: {
            type: String,
            required: true
        }
    }
}
</script>


