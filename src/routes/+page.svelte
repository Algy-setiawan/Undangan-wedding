<script>
import Home from '../componnet/HomeView.svelte'
import Doa from '../componnet/DoaView.svelte'
import ProfileView from '../componnet/ProfileView.svelte';
import InfoView from '../componnet/InfoView.svelte';
import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
import CarouselView from '../componnet/CarouselView.svelte';
import Music from '../componnet/Music.svelte';

</script>
<Music/>
<CarouselView/>
<section use:scrollRef={'Home'}>
  <div class='bg-[url("../../../src/assets/ground.png")] object-cover bg-cover bg-center'>
<Home/>
  </div>
</section>
<section use:scrollRef={'Profile'}>
<ProfileView/>
</section>
<section use:scrollRef={'Info'}>
<InfoView/>
</section>
<section use:scrollRef={'Doa'}>
  <div class='bg-[url("../../../src/assets/ground.png")] object-cover bg-cover bg-center'>
<Doa/>
</div>
</section>

    
    <div class="btm-nav mb-2 rounded-xl px-2 font-['sofiaregular'] z-40">
        <button class= "bg-base-100"  use:scrollTo={{ ref: 'Home', offset: -10 }}>
     
          <span class="material-icons md-36">home</span>
          <span class="btm-nav-label">Home</span>
        </button>
        <button class="bg-base-100 "use:scrollTo={{ ref: 'Profile', offset: -10 }}>
          <span class="material-icons md-36">favorite</span>
          <span class="btm-nav-label">Couple</span>
        </button>
        <button class="bg-base-100" use:scrollTo={{ ref: 'Info', offset: -10 }}>
          <span class="material-icons md-36">place</span>
          <span class="btm-nav-label">Info</span>
        </button>
        <button class="bg-base-100" use:scrollTo={{ ref: 'Doa', offset: -10}}>
       
          <span class="material-icons md-36">volunteer_activism</span>
          <span class="btm-nav-label">Doa</span>
        </button>
      </div>
