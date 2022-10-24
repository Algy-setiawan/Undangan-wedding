<script>
    import { page } from '$app/stores';
    import Modal from './Modal.svelte';
    import { CarouselTransition } from 'flowbite-svelte';
    import { images } from './Image';

 
    let showThumbs=false
    let showCaptions=false
    let showIndicators=false
    let slideControls=false

    let name = '';   
    let getName = $page.url.search;
    let newStr = getName.replaceAll('+', " ").replace('?', "");
    let popup = false;
    
    if (getName != name){    
          // console.log("open")
          // console.log("Welcome "+newStr)  
          popup = true;
          
    }
    else if (getName == '') {
          // console.log("close")
          popup = false;
       
    }
    
      </script>
      {#if popup == true }
      <Modal nama={newStr}></Modal>
      {/if}
      
      <!-- <CarouselView/> -->

      
      <div class="md:container md:mx-auto mt-5 mb-20 shadow-md shadow-current rounded-xl select-none">
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5 ">
            <div class="text-center font-bold text-3xl font-['sofiaregular']">ِبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم</div>
            <div class="card lg:card-normal bg-base-200 shadow-xl">
                  <div class="card-body items-center text-center">  
                        
             <p>وَاللَّهُ جَعَلَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا وَجَعَلَ لَكُمْ مِنْ أَزْوَاجِكُمْ بَنِينَ وَحَفَدَةً وَرَزَقَكُمْ مِنَ الطَّيِّبَاتِ أَفَبِالْبَاطِلِ يُؤْمِنُونَ وَبِنِعْمَتِ اللَّهِ هُمْ يَكْفُرُونَ</p>
             <p class="italic">"Dan Allah menjadikan bagimu pasangan (suami atau istri) dari jenis kamu sendiri, menjadikan anak dan cucu bagimu dari pasanganmu, serta memberimu rezeki dari yang baik-baik. Mengapa mereka beriman kepada yang batil dan mengingkari nikmat Allah?"</p>
            <p>QS. An Nahl ayat 72</p>
            </div>
             </div>
             <div class="divider font-['sofiaregular']">Album</div>
                  <div class="relative rounded-xl overflow-auto ">
                        <div class="text-center rounded-lg overflow-hidden w-full sm:w-96 md:h-full mx-auto h-full">
                              <CarouselTransition {images} loop transitionType="fly" transitionParams="{{ duration: 1000 }}" showCaptions={false} showThumbs={false} duration="10000" />
                             

                        </div>
                      </div>
  
              
             
      </div>
      </div>

      
      
    
    
    
    
    