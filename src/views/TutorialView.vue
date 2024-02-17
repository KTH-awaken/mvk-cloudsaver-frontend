<script lang="ts">
import LayoutContainer from '@/components/LayoutContainer.vue';
import { defineComponent,ref } from 'vue'
import CopyCommandBox from '@/components/CopyCommandBox.vue';

export default defineComponent({
    components: {
        LayoutContainer,
        CopyCommandBox,
    },
    setup() {
    const step = ref(1);

    function nextStep() {
      if (step.value < 4) step.value++;
    }

    function prevStep() {
      if (step.value > 1) step.value--;
    }

    return { step, nextStep, prevStep };
  },
})

</script>
<template>
    <LayoutContainer>
        <div class="flex items-center flex-col">
            <div class="h-10 top-text">
                <!-- Your step content goes here -->
                <div v-if="step === 1">Copy docker image</div>
                <div v-if="step === 2">Deploy image to your cloud</div>
                <div v-if="step === 3">Name you're cloud resource</div>
            </div>
           <!-- stepper -->
            <div class="stepper-container" style="margin-bottom: 50px;">
                <div class="stepper" :class="{ 'step-complete': step >= 1 }">
                    <div class="stepper-small-circle" :class="{ 'step-complete-small': step >= 1 }"></div>
                </div>
                <div class="line" :class="step>=2 ? 'line-after' : 'line-before' "></div>
                <div class="stepper" :class="{ 'step-complete': step >= 2 }">
                    <div class="stepper-small-circle" :class="{ 'step-complete-small': step >= 2 }"></div>
                </div>
                <div class="line" :class="step>=3 ? 'line-after' : 'line-before' "></div>
                <div class="stepper" :class="{ 'step-complete': step >= 3 }">
                    <div class="stepper-small-circle" :class="{ 'step-complete-small': step >= 3 }"></div>
                </div>
                
            </div>
            <!-- tutorial content -->
            <div class="h-[600px] ">
                <!-- Your step content goes here -->
                <div v-if="step === 1">
                    <CopyCommandBox title="Deploy on Virtual Machine" line1="docker pull marcusokodugha/my-flask-app:tag" line2="docker run -it -p 8080:8080 --name cloudsaver-container marcusokodugha/my-flask-app:tag"></CopyCommandBox>
                    <div class="middle-text w-full">Or</div>
                    <CopyCommandBox title="Deploy on Deployment" line1="marcusokodugha/my-flask-app:tag" line2=""></CopyCommandBox>
                </div>
                <div v-if="step === 2">
                    Step 2 Content
                </div>
                <div v-if="step === 3">
                    Step 3 Content
                </div>
            </div>
            <div class="bottom-buttons ">
                <button @click="prevStep" class="bg-transparent hover:bg-primary-dark hover:text-white text-primary p-2 outline outline-1 hover:outline-none rounded-md button">Previous</button>
                <button @click ="nextStep" class="bg-primary-dark text-white p-2 rounded-md w-1 button hover:bg-primary">Next</button>
            </div>
    </div>
    </LayoutContainer>

</template>

<style scoped>

.top-text{
    font-weight: bold;
    font-size: 35px; 
    color: var(--primary-dark);
    font-family: 'Source Sans Pro', sans-serif;
    padding-bottom: 70px;
}
.middle-text{
    font-weight: bold;
    font-size: 35px; 
    color: var(--primary-dark);
    font-family: 'Source Sans Pro', sans-serif;
    padding: 20px;
    text-align: center;
}
.bottom-buttons{
    display: flex;
    width: 800px;
    justify-content: space-between;
    padding-bottom: 20px;
}
.button{
    width: 15%;
}
.stepper-container {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  position: relative;
  width: 50%; 

}
.line { 
    width: 100%;
    height: 3px;
}
.line-before{
    background-color: hwb(116 64% 17%);
}
.line-after{
    background-color: var(--primary-dark);
}
 
/* small circle */
.stepper {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  /* background-color: #d1d5db; */
  position: relative; 
  z-index: 1; /* Ensures the circles are above the line */
  border: 3px solid hwb(116 64% 17%);
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
  justify-content: center;
}

.stepper-small-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: hwb(116 64% 17%);
  position: relative; /* Needed for z-index to work */
  z-index: 1; /* Ensures the circles are above the line */
}

/* This will create a single line under all the steps */
.stepper-container::before {
  /* content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #d1d5db; 
  z-index: 0; 
  transform: translateY(-50%); */
}

/* This changes the color of the steps that are complete */
.stepper.step-complete {
  border: 3px solid var(--primary-dark);
}
.step-complete-small{
    background-color: var(--primary-dark);
}
/* This will create a green line between completed steps */
.stepper.step-complete::after {
  /* content: '';
  position: absolute;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-dark); 
  z-index: 0; */
}

/* Extend the line to the next step */
.stepper.step-complete:not(:last-child)::after {
  right: calc(-50% + 12.5px);
  left: auto;
  width: 100%;
}

/* Adjust for the first step */
.stepper:first-child::after {
  display: none;
}

/* Adjust for the last step */
.stepper:last-child::after {
  right: 50%;
}
</style>