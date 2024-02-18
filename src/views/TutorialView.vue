<script lang="ts">
import LayoutContainer from '@/components/LayoutContainer.vue';
import { defineComponent,ref } from 'vue'
import CopyCommandBox from '@/components/CopyCommandBox.vue';
import Terminal from '@/assets/YourCloudVmTerminal.png';
import GlasCard from '@/components/GlasCard.vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    components: {
        LayoutContainer,
        CopyCommandBox,
        GlasCard,
    },
    data(){
        return{
            TerminalImg: Terminal,
        }
    },
    setup() {
    const step = ref(1);
    const router = useRouter();

    function nextStep() {
        if (step.value < 3){
            step.value++;
        }else{
            router.push('/overview');
        }


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
                <div v-if="step === 3">Name your cloud resource</div>
            </div>
           <!-- stepper -->

               <div class="stepper-container" style="margin-bottom: 20px;">
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
            <div class="h-[680px]">
                <!-- Your step content goes here -->
                <div v-if="step === 1">
                    <GlasCard class="container2">

                        <CopyCommandBox title="Deploy on Virtual Machine" line1="docker pull marcusokodugha/my-flask-app:tag" line2="docker run -it -p 8080:8080 --name cloudsaver-container marcusokodugha/my-flask-app:tag"></CopyCommandBox>
                        <div class="middle-text w-full p-4">Or</div>
                        <CopyCommandBox title="Deploy using Deployment" line1="marcusokodugha/my-flask-app:tag" line2=""></CopyCommandBox>
                    </GlasCard>    
                </div>
                <div v-if="step === 2">
                    <GlasCard class="container2">
                        <div class="medium-text">Run on Virtual Machine</div>
                        <div class="pb-2 small-text">Run the copied commands on a virtual machine command line interface inside your cloud</div>
                        <img style="width: 100%;" src="@/assets/YourCloudVmTerminal.png">
                        <div class="middle-text w-full pt-3 -mb-2">Or</div>
                            <div class="medium-text pb-2">Create a Deployment</div>
                            <div class="small-text">If your cloud supports creating a deployment using docker images. Paste the previously copied img</div>
                        </GlasCard>
                </div>
                <div v-if="step === 3">
                    <div class="pt-48">
                        <GlasCard class="">
                            <div class="medium-text">Name your cloud resource</div>
                            <div class="small-text">Name the resource you want to monitor on your cloud</div>
                            <input class="input-name" type="text" placeholder="Resource Name">
                        </GlasCard>
                    </div>
                </div>
            </div>
            <div class="bottom-buttons pl-6 pr-6">
                <button @click="prevStep" class="bg-transparent hover:bg-primary-dark hover:text-white text-primary p-2 outline outline-1 hover:outline-none rounded-md button">Previous</button>
                <button @click ="nextStep" class="bg-primary-dark text-white p-2 rounded-md w-1 button hover:bg-primary">{{ step < 3 ? 'Next' : 'Finish' }}</button>
            </div>
    </div>
    </LayoutContainer>

</template>

<style scoped>

.input-name{
    margin-top: 40px;
    width: 100%;
    outline: solid 3px var(--primary-dark);
    padding: 20px;
    border-radius: 10px;
    
    
    background: transparent;

}
::placeholder {
  color: var(--primary-dark);
  opacity: 1; 
}
.container2{
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
}


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
    text-align: center;
}
.medium-text{
    font-weight: bold;
    font-size: 22px; 
    color: var(--primary-dark);
    font-family: 'Source Sans Pro', sans-serif;
    text-align: start;
    width: 100%;
}
.small-text{
    text-align: start;
    width: 100%;
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