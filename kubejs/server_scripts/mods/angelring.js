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
			'PTP',
			'BRB'
		], {
			F: 'minecraft:feather',
			P: 'botania:pixie_dust',
			T: Item.of('botania:flight_tiara'),
			B: 'minecraft:blaze_rod',
			R: 'angelring:itemdiamondring'
		})
	}

	removeRecipes()
	addRecipes()
})
