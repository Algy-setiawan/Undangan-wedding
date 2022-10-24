<script>
    export let open = false;
    export let onClosed;
    import axios from "axios";
    let posts = [];
    let nama;
    let comment;
    let data_id = Math.floor(Math.random() * 10000);
    let req = new XMLHttpRequest();
    const modalClose = (data) => {
    open = false;
    if (onClosed) {
      onClosed(data); 
    } 
  }
  const fetchDataPosts = async () => {
        const headers = {
        'X-Master-Key': '$2b$10$Gzyo7xOixRvq4Yes0N2WkO1Q5w9EFl8PRl9jS4psOfjkJ53MktDkK',
        }
          //fetch data from Rest API
          await axios.get('https://api.jsonbin.io/v3/b/632ae49de13e6063dcafd1cb/latest ',{
            headers:headers
          })
          .then(response => {
  
              //assign response data to variable posts
              posts = response.data.record       
              
          })
          
      }
  // ADD DATA
const addData = async () => {

posts.push({"id": data_id, "nama": nama, "comment": comment});
    let dictstring = JSON.stringify(posts);
    console.log(dictstring);

req.onreadystatechange = async () => {
  if (req.readyState == XMLHttpRequest.DONE) {

    fetchDataPosts();
  }
};

req.open("PUT", "https://api.jsonbin.io/v3/b/632ae49de13e6063dcafd1cb", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", "$2b$10$Gzyo7xOixRvq4Yes0N2WkO1Q5w9EFl8PRl9jS4psOfjkJ53MktDkK");
req.send(dictstring)
nama = "";
comment = "";
  }
    </script>
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
      <input type="text" bind:value={comment} placeholder="Masukan comment" class="input input-bordered w-full max-w-xs form-control" required/>
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