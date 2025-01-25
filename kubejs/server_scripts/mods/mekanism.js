//Author: VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		//New metllurgic Infuser recipe
		event.remove({id: 'mekanism:metallurgic_infuser'})
	}

	function addRecipes() {
		const mekanismCrushing = (input, output) => {
			event.custom({
				"type":"mekanism:crushing",
				"input": {
					"ingredient": {
						"item": input
						}
					},
					"output": {
						"item": output
					}
				})
		}
		
		//Obsidian dust recipe
		mekanismCrushing('minecraft:obsidian', 'mekanism:dust_obsidian')
		
		//Missing crusher recipes that exists in thermal
		mekanismCrushing('thermal:apatite', 'thermal:apatite_dust')
		mekanismCrushing('thermal:cinnabar', 'thermal:cinnabar_dust')
		mekanismCrushing('thermal:niter', 'thermal:niter_dust')
		mekanismCrushing('thermal:sulfur', 'thermal:sulfur_dust')
		mekanismCrushing('minecraft:quartz', 'thermal:quartz_dust')
		
		//Silver duplication
		mekanismCrushing('thermal:silver_ingot', 'thermal:silver_dust')
		
		event.custom({
			"type": "mekanism:enriching",
			"input": {
				"ingredient": {
					"tag": "forge:ores/silver"
				}
			},
			"output": {
				"count": 2,
				"item": "thermal:silver_dust"
			}
		})
		
		event.custom({
			"type": "mekanism:enriching",
			"input": {
				"amount": 3,
				"ingredient": {
					"tag": "forge:raw_materials/silver"
				}
			},
			"output": {
				"count": 4,
				"item": "thermal:silver_dust"
			}
		})
		
		//Nickel Duplication
		mekanismCrushing('thermal:nickel_ingot', 'thermal:nickel_dust')
		
		event.custom({
			"type": "mekanism:enriching",
			"input": {
				"ingredient": {
					"tag": "forge:ores/nickel"
				}
			},
			"output": {
				"count": 2,
				"item": "thermal:nickel_dust"
			}
		})
		
		event.custom({
			"type": "mekanism:enriching",
			"input": {
				"amount": 3,
				"ingredient": {
					"tag": "forge:raw_materials/nickel"
				}
			},
			"output": {
				"count": 4,
				"item": "thermal:nickel_dust"
			}
		})
		
		//New metllurgic Infuser recipe
		event.shaped('mekanism:metallurgic_infuser', [
		    'RFR',
			'OSO',
			'BFB'
		], {
			R: 'minecraft:redstone',
			F: 'minecraft:furnace',
			O: 'mekanism:ingot_osmium',
			S: 'mekanism:steel_casing',
			B: 'mekanism:block_steel'
		})
		
		//Endgame antimatter
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
