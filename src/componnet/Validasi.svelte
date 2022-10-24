<script>
     const modalClose = (data) => {
      showPopup = false;
      if (onClosed) {
        onClosed(data); 
      } 
    }
  
    </script>
        
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-6" class="modal-toggle" checked />
    <div class="modal modal-bottom sm:modal-middle max-h-full">
      <div class="modal-box items-center text-center max-h-full">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2"on:click={() => modalClose('close')}>✕</label>
        <h3 class="font-bold text-xl">Doa Telah Terkirim</h3>
        <p>Mohon tunggu untuk validasi2</p>
        <div class="modal-action justify-center">
          <label for="my-modal-6" class="btn">Kembali</label>
        </div>
      </div>
    </div>