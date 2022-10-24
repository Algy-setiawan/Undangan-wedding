<script>
	
	import { onMount } from 'svelte';
	import { copy } from 'svelte-copy';
	import AddLink from './AddLink.svelte'


let contactList = [];
let x;
let link;
let linknama;
// console.log(window.location.origin+"/?name");
let check = localStorage.getItem('listItem', JSON.stringify(contactList))
let showPopup = false;
// console.log(check)
if (check == null){
	localStorage.setItem('listItem', JSON.stringify(contactList))
	// console.log("No data")
}
else{
	// console.log("with Data")
}


// console.log(URL);


// let listItem = [];


    //method to get all data
    export const getDataTamu = async () =>{
            
            contactList = JSON.parse(localStorage.getItem('listItem'))	
			
			// let link = contactList;
			// let newStr = link.replaceAll(' ', '+');
			
            }
    export const show = async () =>{
			showPopup = true;
            
			
            }
        
	
function removeData(id){
        //get data from localstorage and store to contaclist array
        //we must to use JSON.parse, because data as string, we need convert to array
        contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
    
        contactList = contactList.filter(function(value){ 
            return value.id != id; 
        });
    
        // save array into localstorage
        localStorage.setItem('listItem', JSON.stringify(contactList))
    
        //get data again
        getDataTamu();
    }
	onMount(async() => {
    getDataTamu();
	
	
  })
  export const onPopupClose = (data) => {
      showPopup = false;
      console.log(data); 
      getDataTamu();
}  
	
	</script>
	<!-- Input -->
	<div class="md:container md:mx-auto mt-2">
	<button on:click={show} class="btn" type="submit">Tambah Data</button>

	<div class="divider">LINK UNDANGAN</div>
</div>
<!-- Table -->

<div class="md:container md:mx-auto mt-5 mb-20 bg-base-100 shadow-xl rounded-xl">

	<div class="overflow-x-auto">
		<table id="datatable" class="table table-compact w-full">
		  <thead>
			<tr >
			  <th>Nama Undangan</th> 
			  <th>Link</th> 
			  <th>Action</th> 
			</tr>
		  </thead> 
		  <!-- <tbody id="table">
		  </tbody> -->
		  <tbody>
			{#each contactList as data}
			<div class="hidden">
			{x = data.link}
			{link = x.replaceAll(' ', '+')}
			{linknama = link.replaceAll('+','%2B')}
			{console.log(linknama)}
			</div>
			
			<tr class="hover">
			  <td>{data.nama}</td> 
			  <td><label for = "" button on:click={window.open(data.link)} class="btn btn-outline btn-info btn-xs">Preview</label></td> 
			  <th>
				<a href="whatsapp://send?text=Dear *{data.nama}*,%0a %0a
				Bismillahirrahmanirrahim, %0a %0a ‎السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ 
				%0a %0a
				Maha suci Allah yang telah menjadikan segala sesuatu lebih indah dan sempurna.%0a %0a
				Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami:%0a %0a
				*Anggie %26 Bayu* %0a %0a
				Berikut link untuk info lengkap dari acara kami untuk mengantarkan Bapak/Ibu, teman, serta sahabat ketujuan :%0a %0a
				{linknama} %0a %0a
				Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.%0a %0a
				Mohon maaf perihal undangan hanya di bagikan melalui  pesan ini.%0a %0a
				‎وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
				%0a %0a
				Kami yang berbahagia %0a %0a
				*Anggie %26 Bayu*
				" 
				data-action="share/whatsapp/share" class="btn btn-success btn-outline btn-xs">Whatsapp</a>
				<label for = "" button use:copy={link} class="btn btn-outline btn-xs">Copy</label>
				<label for = "" button on:click={() => removeData( data.id )} class="btn btn-outline btn-error btn-xs">Delete</label>
			  </th>
			</tr>
			{/each}
			</tbody>
		</table>

	  </div>
	
	 
  </div>
  {#if showPopup == true}
  <AddLink open={showPopup} onClosed={(data) => onPopupClose(data)}></AddLink>
  {/if}
  
