<script>
  import { copy } from 'svelte-copy';
  import { fade, fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';
    let isInView;
    let showPopup = false;
    export let onClosed;
      export const onPopupClose = (data) => {
        showPopup = false;
        console.log(data); 
        fetchDataPosts();
  }  
      export const showgift = async () =>{
      showPopup = true;
              
        
              }
    const modalClose = (data) => {
      showPopup = false;
      if (onClosed) {
        onClosed(data); 
      } 
    }
    </script>
<div class="divider"><p class="text-4xl font-['sofiaregular'] ">COUPLE</p></div>  
<div class="md:container md:mx-auto mt-5 mb-20 shadow-md shadow-current rounded-xl bg-base-300 ">
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 image-full">
    
    
    <div
    class="wrapper"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
    >
    {#if isInView}
    <div in:fly="{{ x: -200, duration: 1000 }}">
      <!-- <div class="divider font-['sofiaregular'] "></div>  -->
      
      <div class="card bg-base-200 shadow-xl rounded-xl w-auto h-auto text-center">
      <!-- <div class='bg-[url("src/assets/girl.png")] md:object-cover md:bg-cover bg-center '> -->
        <div class='bg-[url("../../../src/assets/left.png")] object-cover bg-cover bg-no-repeat bg-center md:object-cover md:bg-cover md:bg-center md:bg-no-repeat'>

      <!-- <div class='bg-[url("src/assets/400.png")] object-cover w-full bg-cover bg-center shadow-xl rounded-xl'> -->
      <div class="card-body items-center text-center"> 
       
        <div class="avatar">
          <div class="w-32 mask mask-squircle">
            <img src="src\assets\Profil\4.jpg" />
          </div>
        </div> 
          <button class="btn btn-ghost animate-pulse" onclick="location.href='https://www.instagram.com/anggienadhifa/';"><svg xmlns="http://www.w3.org/2000/svg" xmlns:svgjs="http://svgjs.com/svgjs" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path fill="#dca54c" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" class="color000 svgShape"/>
            </svg></svg> <h2>anggienadhifa</h2></button>
          
          
          <h2 class="card-title ">Anggie Nadhifa Salsabila</h2>
          <p>Putri bungsu dari</p>
          <p>Bapak Eddy Rochendy & Ibu Elis Rusmawati</p>
          </div>
          </div>
        </div>
    </div>
    {/if}
  </div>

    <div
    class="wrapper"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
    >
    {#if isInView}
    <div in:fly="{{ x: 200, duration: 1000 }}">
            <!-- <div class="divider font-['sofiaregular']"></div>     -->
            <div class="card bg-base-200 shadow-xl rounded-xl w-auto h-auto text-center">
              <div class='bg-[url("../../../src/assets/right.png")] object-cover bg-cover bg-no-repeat bg-center md:object-cover md:bg-cover md:bg-center md:bg-no-repeat'>     
            <div class="card-body items-center text-center "> 
              <div class="avatar">
                <div class="w-32 mask mask-squircle">
                  <img src="src\assets\Profil\IMG_20220930_220010.jpg" />
                </div>
                </div> 
                <button class="btn btn-ghost animate-pulse" onclick="location.href='https://www.instagram.com/_koebay/';"><svg xmlns="http://www.w3.org/2000/svg" xmlns:svgjs="http://svgjs.com/svgjs" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path fill="#dca54c" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" class="color000 svgShape"/>
                  </svg></svg> <h2> _koebay</h2></button>
                <h2 class="card-title">Bayu Rangga Pratama S.Kom</h2>
                <p>Putra pertama dari</p>
                <p>Bapak Prasetyadi & Ibu Yuyun Yuningsih</p>
                </div>
                </div>
              </div>
            </div>
              {/if}
          </div>
          
         
</div>
  <div class="md:container md:mx-auto -mt-10">
    <div class="card-body items-center text-center">
    <button class="btn animate-bounce"  on:click={() => showgift()}>Kirim Hadiah</button>
  </div>

  </div>
</div>
{#if showPopup == true}
<input type="checkbox" id="my-modal-6" class="modal-toggle" checked />
<div class="modal modal-bottom sm:modal-middle max-h-full">
  <div class="modal-box items-center text-center max-h-full">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2"on:click={() => modalClose('close')}>✕</label>
    <div class="card-body items-center text-center">  
    <img src="src\assets\bca.png" width="500" height="500">
    <input type="text" value="1390856811 a/n Anggie nadhifa sa" class="input input-bordered w-full max-w-xs form-control" readonly/>
    <label for = "" button use:copy={"1390856811"} class="btn btn-outline">Copy</label>
    </div>

  </div>
</div>
{/if}

<!-- <div
class="wrapper"
use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
on:change={({ detail }) => {
  isInView = detail.inView;
}}
>
{#if isInView}
  <div in:fly="{{ x: -200, duration: 1000 }}">
    <h3>Appears from nowhere</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
      adipisci nihil iste.
    </p>
  </div>
{/if}
</div> -->