<script>
    let contactList = [];
    let URL = window.location.origin;
    export let open = false;
    export let onClosed;
    
function save(){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //get last array to get last id
    //and store it into variable id
    var id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

    if(document.getElementById('id').value){

        //edit contactlist array based on value
        contactList.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.nama      = document.getElementById('nama').value
                value.link      = document.getElementById('link').value
            }
        });

        //remove hidden input
        document.getElementById('id').value = '',
        document.getElementById('link').value = '',
        document.getElementById('nama').value = ""
		

    }else{

        //save
        //get data from form
		let code = document.getElementById('nama').value;
        var item = {
            id        : id + 1, 
            nama      : document.getElementById('nama').value,
            link      : URL+("/?"+code)
        }

        //add item data to array contactlist
        contactList.push(item)
    }

    // save array into localstorage
    localStorage.setItem('listItem', JSON.stringify(contactList))

    //update table list
    modalClose();

}
const modalClose = (data) => {
    open = false;
    if (onClosed) {
      onClosed(data); 
    } 
  }
</script>
<!-- MODAL CREATE -->
<input type="checkbox" id="my-modal-3" class="modal-toggle" checked/>
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box ">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2"on:click={() => modalClose('close')}>✕</label>
    <h3 class="font-bold text-lg ">Tambah Data Tamu</h3>
    <div class="divider"></div> 
    
    <!-- FORM TAMBAH -->
    <!-- <form on:submit|preventDefault={storePost}> -->
    <form on:submit|preventDefault={save}>
    <div class="form-control w-full max-w-xs ">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="label"><span class="label-text">Nama Tamu</span></label>
      <input type="hidden" name="id" id="id">
      <input type="hidden" name="link" id="link">
      <input type="text" name="nama" id="nama" placeholder="Masukan nama Tamu" class="input input-bordered w-full max-w-xs form-control" required/>
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


