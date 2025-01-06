//Author VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		event.remove({id: 'mekanism:metallurgic_infuser'})
	}

	function addRecipes() {
		event.shaped('mekanism:metallurgic_infuser', [
		    'RFR',
			'OSO',
			'RFR'
		], {
			R: 'minecraft:redstone',
			F: 'minecraft:furnace',
			O: 'mekanism:ingot_osmium',
			S: 'mekanism:steel_casing'
		})
		
		event.custom({
			"type": "mekanism:nucleosynthesizing",
			"duration": 30000,
			"gasInput": {
				"amount": 5000,
				"gas": "mekanism:antimatter"
			},
			"itemInput": {
				"ingredient": {
					"item": "draconicevolution:large_chaos_frag"
				}
			},
			"output": {
				"item": "kubejs:pellet_exoticmatter"
			}
		})
	}

	removeRecipes()
	addRecipes()
})
