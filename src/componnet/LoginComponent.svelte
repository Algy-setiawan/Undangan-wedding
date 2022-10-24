<script>
	import { getUserDetails } from '../hooks/auth';
	import { store } from '../hooks/auth';

	let username = '';
	let password = '';
	let error = ''
	

	async function login() {
		const user = await getUserDetails( username, password )

		if ( user ) {
			console.log(user)
			$store = user
			
			
			if ( error ) error = ''
		}
		else {
			error = 'Incorrect username and password.'
			console.log("Incorrect username and password.")
		
		}

	}

</script>

<div class="md:container md:mx-auto mt-10">
	<div class="flex flex-col w-full ">
		<div class="card lg:card-side bg-base-200 shadow-xl mt-10">
			
			<div class="card-body items-center text-center ">
				<form on:submit|preventDefault={login} class="flex mx-auto col-6">
					<div class="form-control w-full max-w-xs mt-2">
						<h1 class="font-bold text-lg ">Admin Panel</h1>
						<div class="divider"></div> 
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label"><span class="label-text">Username</span></label>
						<input type="text" bind:value={username} placeholder="input username" class="input input-bordered w-full max-w-xs form-control" required/>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label"><span class="label-text">Password</span></label>
						<input type="password" bind:value={password} placeholder="input Password" class="input input-bordered w-full max-w-xs form-control" required/>
						<div class="divider"></div>
						<small>{error}</small> 
						<div class="modal-action justify-end">
							
						<button type="submit"  class="btn btn-outline">Submit</button>
						<button type="reset" class="btn btn-outline">Reset</button>
						</div>
					  </div>
				
				</form>
			</div>
		  
		</div>
	  </div>
  </div>