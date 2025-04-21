//Author: VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		//New metallurgic Infuser recipe
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
		mekanismCrushing('minecraft:ender_pearl', 'thermal:ender_pearl_dust')
		mekanismCrushing('redstone_arsenal:flux_ingot', 'redstone_arsenal:flux_dust')
		mekanismCrushing('minecraft:dragon_head', 'thermal_extra:ancient_dust')
		mekanismCrushing('minecraft:amethyst_shard', 'thermal_extra:amethyst_dust')
		mekanismCrushing('thermal_extra:soul_infused_ingot', 'thermal_extra:soul_infused_dust')
		mekanismCrushing('thermal_extra:shellite_ingot', 'thermal_extra:shellite_dust')
		mekanismCrushing('thermal_extra:twinite_ingot', 'thermal_extra:twinite_dust')
		mekanismCrushing('thermal_extra:dragonsteel_ingot', 'thermal_extra:dragonsteel_dust')
		mekanismCrushing('thermal:coal_coke', 'tfmg:coal_coke_dust')
		
		const missingPlateAndIngotsCrushing = ['signalum', 'lumium', 'enderium', 'bronze', 'electrum', 'invar', 'constantan']
		missingPlateAndIngotsCrushing.forEach(material => {
			mekanismCrushing('thermal:' + material + '_plate', 'thermal:' + material + '_dust')
			mekanismCrushing('thermal:' + material + '_ingot', 'thermal:' + material + '_dust')
		})
		
		event.remove({id: 'mekanism:processing/bronze/dust/from_ingot'})
		
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
		
		//New metallurgic Infuser recipe
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
					"item": "kubejs:chaotic_wormhole"
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
