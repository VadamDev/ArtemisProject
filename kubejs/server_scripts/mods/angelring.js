//Author: VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		//Remove useless angel rings
		['energetic', 'leadstone', 'hardened', 'reinforced', 'resonant'].forEach(ring => {
			event.remove({output: 'angelring:' + ring + '_angel_ring'})
		})
		
		//Remove default angel ring recipe
		event.remove({output: 'angelring:angel_ring'})
		event.remove({output: 'angelring:diamond_ring'})
	}

	function addRecipes() {
		//New angel ring recipe
		event.shaped('angelring:angel_ring', [
			'F F',
			'RSR',
			'BIB'
		], {
			F: 'forbidden_arcanus:golden_feather',
			R: 'bloodmagic:reagentteleposition',
			S: 'bloodmagic:airsigil',
			B: 'minecraft:blaze_rod',
			I: 'bloodmagic:reagentbinding'
		})
	}

	removeRecipes()
	addRecipes()
})
