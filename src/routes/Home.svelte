<!-- <script>
import { page } from '$app/stores';
import Modal from '../componnet/Modal.svelte';

let name = '';   
let getName = $page.url.search;
let newStr = getName.replace(/%20/g, " ").replace('?', "");
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

<h1>HOME PAGE</h1>



 -->
