<script>
  import axios from "axios";
  import { onMount } from 'svelte';
  import Avatar from "./Avatar.svelte";
  import Validasi from "./Validasi.svelte";

  
  // import AddDoa from './AddDoa.svelte';
  
    let posts = [];
    let active = [];
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
                function updateObjectWithId(posts, status) {
                 return posts.filter((obj) => obj.status == status);
                 } 
                
                 const newArr = updateObjectWithId(posts, true);
                 let dictstring = JSON.stringify(newArr);
                 active = newArr
                console.log(active);
                     
                
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
      show();
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

  
  <!-- Table -->
<!-- <img src="src\assets\border.png"> -->
<div class="divider"><p class="text-4xl font-['sofiaregular']">DOA</p></div>

<div class="md:container md:mx-auto mt-5 mb-20 shadow-md shadow-current rounded-xl ">
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
    
    <div>
    <div class="divider font-['sofiaregular']">KOTAK DOA</div>         
    <div class="overflow-y-scroll h-96 relative max-w-3xl mx-auto mb-2 shadow-lg bg-base-200 rounded-xl">
  
      <!-- <div class="overflow-y-scroll h-72 relative max-w-sm mx-auto bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5"> -->
        {#each active as post}
        <div class="flex items-center gap-4 p-4 ">
          <div class="avatar">
            <div class="w-12 mask mask-squircle">
              <Avatar width=32 round={false} userFullName="{post.nama}" />
            </div>
          </div>
          <div class="flex flex-col ">
            <p class="font-bold">{post.nama}</p>
            <span class="text-sm font-medium ">{post.comment}</span>
          </div>
        </div>
        {/each}
      </div>
        </div>
        

        <div>
            <div class="divider font-['sofiaregular']">KIRIM DOA</div>         
            <div class="card-body items-center text-center bg-base-200 shadow-xl rounded-xl">    
              <form on:submit|preventDefault={addData}>
                <div class="form-control w-full max-w-xs ">
                  <!-- svelte-ignore a11y-label-has-associated-control -->
                  <label class="label"><span class="label-text">Nama</span></label>
                  <input type="text" bind:value={nama} placeholder="Masukan nama" class="input input-bordered w-full max-w-xs form-control" required/>
                  <!-- svelte-ignore a11y-label-has-associated-control -->
                  <label class="label"><span class="label-text">Doa</span></label>
                  <textarea class="textarea textarea-bordered" bind:value={comment} placeholder="Masukan Doa" required></textarea>
                  <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="divider"></div> 
                <div class="modal-action">
                  <button type="submit" class="btn btn-outline">Kirim Doa</button>
                  <button type="reset" class="btn btn-outline">Reset</button>
                </div>
              </form>
                </div>
                </div>      
</div>
</div>
{#if showPopup == true}
<input type="checkbox" id="my-modal-6" class="modal-toggle" checked />
<div class="modal modal-bottom sm:modal-middle max-h-full">
  <div class="modal-box items-center text-center max-h-full">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2"on:click={() => modalClose('close')}>✕</label>
    <h3 class="font-bold text-xl">Terima Kasih</h3>
    <h3 class="font-bold text-xl">Doa Telah Terkirim</h3>
    <p>Mohon tunggu untuk validasi</p>
    <div class="modal-action justify-center">
      <label for="my-modal-6" class="btn" on:click={() => modalClose('close')}>Kembali</label>
    </div>
  </div>
</div>
{/if}
      
  