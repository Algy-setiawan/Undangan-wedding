<script>

	import Doa from '../componnet/Doa.svelte';
	import Link from '../componnet/Link.svelte';


let page = 'Doa';
let tabDoa = 'active'
let tabLink = ''
let tabAlbum = ''
const clicked = (data) => {
	page = data;	

	if( data == "Doa"){
		tabDoa = "active";
		tabLink = "";
		tabAlbum = "";
	}
	else if (data == "Link"){
		tabDoa = "";
		tabLink = "active";
		tabAlbum = "";
	}
	else if (data == "Album"){
		tabDoa = "";
		tabLink = "";
		tabAlbum = "active";
	}
  }
	</script>

<!-- NAVBAR -->
<div class="navbar bg-base-100 rounded-xl">
	<div class="navbar-start">
	  <div class="dropdown">
		<label tabindex="0" class="btn btn-ghost lg:hidden">
		  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
		</label>
		<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
			<li><a on:click={() => clicked('Doa')}>Doa</a></li>
			<li><a on:click={() => clicked('Link')}>Link</a></li>
			<li><a on:click={() => clicked('Album')}>Album</a></li>
		</ul>
	  </div>
	  <a class="btn btn-ghost normal-case text-xl">AdminPanel</a>
	</div>
	<div class="navbar-center hidden lg:flex">
	  <ul class="menu menu-horizontal p-0">
		<li><a on:click={() => clicked('Doa')}>Doa</a></li>
		<li><a on:click={() => clicked('Link')}>Link</a></li>
		
	  </ul>
	</div>
	<div class="navbar-end">
	  <a class="btn">Logout</a>
	</div>
  </div>

  <!-- END NAVBAR -->
  
  <slot></slot>
  {#if page == "Doa"}

  <Doa></Doa>
  {:else if page == "Link"}

  <Link></Link>
  {:else}
 
  {console.log("Not Found")}
  {/if}


 
  
	


