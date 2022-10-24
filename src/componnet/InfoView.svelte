<script>
    import TimerView from "./TimerView.svelte";
    import { fade, fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    let isInView;
    </script>
<div class="divider"><p class="text-4xl font-['sofiaregular']">INFORMASI</p></div>  
<div class="md:container md:mx-auto mt-5 mb-20 shadow-md shadow-current rounded-xl bg-base-300 ">
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
    
    <div
    class="wrapper"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
    >
    {#if isInView}
    <div in:fly="{{ x: -200, duration: 1000 }}">
      <div class="divider font-['sofiaregular'] text-2xl">WAKTU</div>
      <div class="card-body items-center text-center">
        <TimerView/>
        <p>Minggu 13 November 2022</p>
                      
            
            <p class="font-['sofiaregular']">Akad</p> 
            <p>Pukul 09:00 - 10:30</p>
                     
       
            <p class="font-['sofiaregular']">Resepsi</p> 
            <p>Pukul 11:00 - 14:00</p>
            <div class="divider"></div>
            
            <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak / Ibu /Saudara / i. berkenan hadir untuk memberikan do'a restunya kami ucapkan terimakasih</p>
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
    <div class="divider font-['sofiaregular'] text-2xl">LOKASI</div>         
        <div class="card-body items-center text-center">  
          <p>Jl. Kerkof No.21, Leuwigajah, Kec. Cimahi Sel., Kota Cimahi, Jawa Barat 40532</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8881870479186!2d107.5321081!3d-6.9039726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5a699b38c51%3A0x66562e246b39d91b!2sSentra%20Abiyoso!5e0!3m2!1sen!2sid!4v1664396003326!5m2!1sen!2sid" width="350" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
        </div>
        </div>
        {/if}
        </div>
        

 
         
</div>
</div>