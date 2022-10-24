<script>
    
    import { onMount } from 'svelte';
    import Modal from './Modal.svelte';
    let audio;
    let status;
    let yes = false;
    
    export let timeout = 3000;
    export let sound = false;
    console.log("HAS "+sound);
    
    export const playAudio = async () =>{    
        audio.autoplay = true;
        audio.muted = false;
        audio.play(); 
    }
    export const SoundAudio = async () =>{
     
    }
    export const pauseAudio = async () =>{
        audio.pause(); 
    }
   if (sound == true) {
    onMount(() => {
        console.log("Sounded")
        playAudio();
  });
}
else{
    console.log("No sound")
}
        </script>

        <!-- MUSIC -->
        <audio bind:this={audio} muted playsinline loop>
            <!-- <audio controls autoplay muted loop> -->
                <source src="src/assets/Its-You.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
              </audio>
              
    <div class="relative">
        <div class="fixed top-2 right-2 z-40">
            <label class="swap swap-flip text-4xl animate-pulse">       
                <input type="checkbox" bind:checked={yes} style="display:none"/>              
                <div class="swap-on " on:click={() => playAudio()}>
                    <span class="material-icons text-4xl">music_note</span>
                </div>    
                <div class="swap-off" on:click={() => pauseAudio()}>
                    <span class="material-icons text-4xl">music_off</span>
                </div>
              </label>
        </div>
      </div>