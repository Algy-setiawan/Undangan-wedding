<script>
    import Countdown from 'svelte-countdown/src/index.js'
    </script>
<Countdown from="2022-11-13 00:00:00" dateFormat="YYYY-MM-DD H:m:s" zone="Indonesia/Jakarta" let:remaining>
    {#if remaining.done === false}
   
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div class="flex flex-col p-3 bg-base-200 rounded-box text-neutral-content">
          <span class="countdown font-mono text-4xl">
            <span style="--value:{remaining.days};"></span>
          </span>
          days
        </div> 
        <div class="flex flex-col p-3 bg-base-200 rounded-box text-neutral-content">
          <span class="countdown font-mono text-4xl">
            <span style="--value:{remaining.hours};"></span>
          </span>
          hours
        </div> 
        <div class="flex flex-col p-3 bg-base-200 rounded-box text-neutral-content">
          <span class="countdown font-mono text-4xl">
            <span style="--value:{remaining.minutes};"></span>
          </span>
          min
        </div> 
        <div class="flex flex-col p-3 bg-base-200 rounded-box text-neutral-content">
          <span class="countdown font-mono text-4xl">
            <span style="--value:{remaining.seconds};"></span>
          </span>
          sec
        </div>
      </div>
  {:else}
  <h2>The time has come!</h2>
  {/if}
</Countdown>
