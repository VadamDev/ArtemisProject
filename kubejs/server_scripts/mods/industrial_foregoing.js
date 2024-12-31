//Author VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		//Remove laserdrill default recipe
		event.remove({id: 'industrialforegoing:ore_laser_base'})
	}

	function addRecipes() {
		//New laser drill recipe that respects the modpack progression
		event.shaped('industrialforegoing:ore_laser_base', [
			'A A',
			'OMO',
			'GCG'
		], {
			A: '#forge:plastic',
			C: 'biggerreactors:cyanite_ingot',
			O: '#forge:ores/iron',
			M: 'industrialforegoing:machine_frame_advanced',
			G: '#forge:gears/abyssal'
		})
		
		//Easy menril with the fluid extractor
		event.custom({
			"type": "industrialforegoing:fluid_extractor",
			"breakChance": 0.01,
			"defaultRecipe": false,
			"input": {
				"item": "integrateddynamics:menril_log"
			},
			"output": "{Amount:2,FluidName:\"integrateddynamics:menril_resin\"}",
			"result": "integrateddynamics:menril_log_stripped"
		})
	}

	removeRecipes()
	addRecipes()
})
