<script lang="ts">
import { defineComponent,ref } from 'vue'
import ContentCopy from 'vue-material-design-icons/ContentCopy.vue';

export default defineComponent({
    name: 'CopyCommandBox',
    components: {
      ContentCopy,
    },
    props: {
        title: String,
        line1: String,
        line2: String,
    },
    setup(props) {
        const copyToClipboard = () => {
            const fullText = `${props.line1}\n${props.line2}`;
            navigator.clipboard.writeText(fullText).then(() => {
                console.log('Text copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        };

        return { copyToClipboard };
    },

})
</script>

<template>
    <div class="container">
            <div class="medium-text">{{ title }}</div>
            <div>{{ line1 }}</div>
            <div>{{ line2 }}</div>
                <div class="flex w-full justify-end pt-6">
                    <button @click="copyToClipboard" class="flex justify-around bg-transparent hover:bg-primary-dark hover:text-white text-primary p-2 outline outline-1 hover:outline-none rounded-md button">
                        Copy
                        <ContentCopy></ContentCopy>
                    </button>
                </div>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        outline: solid 3px var(--primary-dark);
        padding: 20px;
        border-radius: 10px;

    }

    .medium-text{
    font-weight: bold;
    font-size: 22px; 
    color: var(--primary-dark);
    font-family: 'Source Sans Pro', sans-serif;
    padding-bottom: 20px;
    }
    .button{
    width: 15%;
    }
</style>
