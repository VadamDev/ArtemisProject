ServerEvents.recipes(event => {
	function removeRecipes() {
		event.remove({output: 'enderio:energy_conduit'})
	}

	function addRecipes() {
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
	}

	removeRecipes()
	addRecipes()
})
