<script>
export let nama;
import Timer from './Timer.svelte';
import Music from './Music.svelte';

    import HomeView from './HomeView.svelte';
let status = false;

export const x = async () =>{
        status = true; 
    }
function dataa(){
x();
onRequest();
}
</script>
    
<!-- Put this part before </body> tag -->


<input type="checkbox" id="my-modal-5" class="modal-toggle" checked />

<div class="modal">
  <div class="image-full">
  <div class='modal-box bg-[url("../../../src/assets/modalfix.png")] items-center text-center w-screen h-screen max-h-screen max-w-screen-sm object-cover bg-cover bg-no-repeat bg-center md:w-screen md:h-screen md:max-h-screen md:max-w-screen-sm md:object-cover md:bg-cover md:bg-center md:bg-no-repeat'>
    
    <!-- <div class='bg-[url("src/assets/modal.jpg")] w-screen h-screen max-h-full max-w-full object-cover bg-cover bg-no-repeat bg-center md:object-cover md:bg-cover md:bg-center md:bg-no-repeat'>     -->

      <!-- <h3 class="font-bold text-xl ">UNDANGAN PERNIKAHAN</h3>
    <h3 class="font-bold text-xl mt-2">Anggie & Bayu</h3><br>
    <p>Minggu 13 November 2022</p>
    <div class="modal-action justify-center mb-5">
    <Timer/>
  </div>
  <div class="inset-x-0 bottom-0">
    <p>Kepada Yth Bapak/Ibu/Saudara/i</p>
    <h3 class="font-bold text-xl">{nama}</h3>
    <h5 class="font-bold text-xs">*mohon maaf apabila ada kesalahan nama dan gelar</h5>
    
    <div class="modal-action justify-center">
      <label for="my-modal-5" class="btn animate-bounce" on:click={() => x()}>Buka Undangan</label>
    </div>
    </div> -->
    
    <div class="modal-action justify-center mt-3">
        <Timer/>
        </div>
        <div class="font-bold text-4xl font-['sofiaregular'] mt-2">Anggie & Bayu</div>

      <div class="absolute inset-x-0 bottom-0 mb-8 backdrop-blur-sm">
        
        <p>Kepada Yth Bapak/Ibu/Saudara/i</p>
        <h3 class="font-bold text-xl">{nama}</h3>
        <h5 class="font-bold text-xs">*mohon maaf apabila ada kesalahan nama dan gelar</h5>
        <br>
        
        <label for="my-modal-5" class="btn animate-bounce" on:click={() => x()}>
        <span class="material-icons md-36">mail</span> Buka Undangan</label>
      </div>

  <!-- </div> -->

</div>
</div>
</div>

{#if status == true}
<Music sound = {status}></Music>
{/if}