<script>
import axios from "axios";
import { onMount } from 'svelte';

// import AddDoa from './AddDoa.svelte';

  let posts = [];
  let nama;
  let comment;
  let status = false;
  
//   let data_id = Math.floor(Math.random() * 10000);
  let showPopup = false;
  export let onClosed;

  // let helper = new Helper();
  // let FS = new fs();
  
      //method "fetchDataPosts"
      const fetchDataPosts = async () => {
        const headers = {
        'X-Master-Key': '$2b$10$Po83UsGbQrP2tDkHtl/24Oz2u/Mmqh3q5KJ4Cu8MhJfP7DUKMkwwq',
        }
          //fetch data from Rest API
          await axios.get('https://api.jsonbin.io/v3/b/63563da265b57a31e6a08dbd/latest ',{
            headers:headers
          })
          .then(response => {
  
              //assign response data to variable posts
              posts = response.data.record  
              console.log(posts);     
              
          })
          
      }

// ADD DATA
const addData = async () => {
let req = new XMLHttpRequest();
let data_id = Math.floor(Math.random() * 1000000);
posts.push({"id": data_id, "nama": nama, "status": status, "comment": comment});
    let dictstring = JSON.stringify(posts);
    console.log(dictstring);

req.onreadystatechange = async () => {
  if (req.readyState == XMLHttpRequest.DONE) {
	modalClose();
    fetchDataPosts();
  }
};

req.open("PUT", "https://api.jsonbin.io/v3/b/63563da265b57a31e6a08dbd", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", "$2b$10$Po83UsGbQrP2tDkHtl/24Oz2u/Mmqh3q5KJ4Cu8MhJfP7DUKMkwwq");
req.send(dictstring)
nama = "";
comment = "";
  }

  // delete
  const delData = async (id) => {
	let req = new XMLHttpRequest();
  function removeObjectWithId(posts, id) {
  return posts.filter((obj) => obj.id !== id);
  
}

let kode = parseInt(id)
console.log(kode);
const newArr = removeObjectWithId(posts, kode);
    let dictstring = JSON.stringify(newArr);
    console.log(dictstring);

    req.onreadystatechange = async () => {
  if (req.readyState == XMLHttpRequest.DONE) {

    fetchDataPosts();
  }
};

req.open("PUT", "https://api.jsonbin.io/v3/b/63563da265b57a31e6a08dbd", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", "$2b$10$Po83UsGbQrP2tDkHtl/24Oz2u/Mmqh3q5KJ4Cu8MhJfP7DUKMkwwq");
req.send(dictstring)  
  }

  // Update
  
  const update = async (id, status, nama, comment) => {
	let req = new XMLHttpRequest();
  function updateObjectWithId(posts, id) {
  return posts.filter((obj) => obj.id !== id);
}
 
let kode = parseInt(id)
let mod = posts.filter((obj) => obj.id == id);
let data_id = Math.floor(Math.random() * 1000000);
if (status == false){
posts.push({"id": data_id, "nama": nama, "status": true, "comment": comment});
}
else if (status == true){
posts.push({"id": data_id, "nama": nama, "status": false, "comment": comment});
}
console.log(mod);
const newArr = updateObjectWithId(posts, kode);
    let dictstring = JSON.stringify(newArr);
    console.log(dictstring);

    req.onreadystatechange = async () => {
  if (req.readyState == XMLHttpRequest.DONE) {

    fetchDataPosts();
  }
};

req.open("PUT", "https://api.jsonbin.io/v3/b/63563da265b57a31e6a08dbd", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", "$2b$10$Po83UsGbQrP2tDkHtl/24Oz2u/Mmqh3q5KJ4Cu8MhJfP7DUKMkwwq");
req.send(dictstring)  
  }
      //run hook "onMount"
      onMount(async () => {
  
          //call method "fetchDataPosts"
          fetchDataPosts();
      });

	  export const onPopupClose = (data) => {
      showPopup = false;
      console.log(data); 
      fetchDataPosts();
}  
		export const show = async () =>{
		showPopup = true;
            
			
            }
	const modalClose = (data) => {
		showPopup = false;
    if (onClosed) {
      onClosed(data); 
    } 
  }

    </script>

	<!-- Input -->
	<div class="md:container md:mx-auto mt-2">
	<button on:click={show} class="btn" type="submit">Tambah Data</button>
</div>



<!-- Table -->

<div class="md:container md:mx-auto mt-5 mb-20 shadow-xl rounded-xl bg-base-300">
  <div class="divider">KOTAK DOA</div>
	<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
		
		{#each posts as post}
		<div class="card lg:card-normal bg-base-100 shadow-xl">
			
			<div class="card-body">
			  <h2 class="card-title">{post.nama}</h2>
			  <p>{post.comment}</p>
			  <div class="card-actions justify-end">
				{#if post.status == true}
				<label for = "" button on:click={() => update(post.id,post.status,post.nama,post.comment)} class="btn btn-outline btn-xs">Disable</label>
				{:else if post.status == false}
				<label for = "" button on:click={() => update(post.id,post.status,post.nama,post.comment)} class="btn btn-outline btn-success btn-xs">Enable</label>
				{/if}
				<label for = "" button on:click={() => delData(post.id)} class="btn btn-outline btn-error btn-xs">Delete</label>
			  </div>
			</div>
		  </div>
			{/each}
			</div>
			</div>
		
		

  {#if showPopup == true}
  <!-- MODAL CREATE -->
<input type="checkbox" id="my-modal-3" class="modal-toggle" checked/>
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box ">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2"on:click={() => modalClose('close')}>✕</label>
    <h3 class="font-bold text-lg ">Tambah Data Doa</h3>
    <div class="divider"></div> 
    
    <!-- FORM TAMBAH -->
    <!-- <form on:submit|preventDefault={storePost}> -->
    <form on:submit|preventDefault={addData}>
    <div class="form-control w-full max-w-xs ">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="label"><span class="label-text">Nama Tamu</span></label>
      <input type="text" bind:value={nama} placeholder="Masukan nama Tamu" class="input input-bordered w-full max-w-xs form-control" required/>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="label"><span class="label-text">Doa</span></label>
	  <textarea class="textarea textarea-bordered" bind:value={comment} placeholder="Masukan Doa"></textarea>
      <!-- svelte-ignore a11y-label-has-associated-control -->
    <div class="divider"></div> 
    <div class="modal-action">
      <button type="submit"  class="btn">Submit</button>
      <button type="reset" class="btn">Reset</button>
    </div>
  </form>
    <!-- END FORM -->

  </div>
</div>
<!-- END MODAL -->
  {/if}
  