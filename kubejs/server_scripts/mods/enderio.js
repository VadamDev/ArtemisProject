//Author: VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		//Remove enderio infinite fe conduit
		event.remove({output: 'enderio:energy_conduit'})
		
		//Remove recipe required for modpack progression
		event.remove({output: 'enderio:primitive_alloy_smelter'})
		event.remove({output: 'enderio:void_chassis'})
	}

	function addRecipes() {
		//Add custom conduits their respective recipes
		const makeConduit = (output, material) => {
			event.shaped(output, [
				'BBB',
				'MMM',
				'BBB'
				], {
				B: 'enderio:conduit_binder',
				M: material
			})
		}

		makeConduit('8x enderio:fe_conduit', 'enderio:conductive_alloy_ingot')
		makeConduit('8x enderio:enhanced_fe_conduit', 'enderio:energetic_alloy_ingot')
		makeConduit('8x enderio:ender_fe_conduit', 'enderio:vibrant_alloy_ingot')
		
		//Fix alloy smelter recipe since primitive alloy smelter is removed
		event.replaceInput({id: 'enderio:alloy_smelter'}, 'enderio:dark_steel_ingot', '#forge:ingots/iron')
		
		//New void chassis recipe that respects modpack progression
		event.shaped('2x enderio:void_chassis', [
				'BVB',
				'BFB',
				'BVB'
			], {
				V: 'enderio:grains_of_infinity',
			    B: 'minecraft:iron_bars',
			    F: 'thermal:machine_frame'
		})
		
		//New ensouled chassis recipe that respects modpack progression
		event.replaceInput({id: 'enderio:ensouled_chassis'}, 'minecraft:quartz', 'enderio:void_chassis')
	}

	removeRecipes()
	addRecipes()
})
