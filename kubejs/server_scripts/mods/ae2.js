//Author: VadamDev

ServerEvents.recipes(event => {
	const thermalPulverizerRecipe = (output, input) => {
		event.custom({
			"type": "thermal:pulverizer",
			"ingredient": {
				"item": input
			},
			"result": [
				{
					"item": output,
					"count": 1
				}
			],
			"energy_mod": 0.5
		})
	}
	
	function removeRecipes() {
		//Remove press recipes from mystical
		event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/silicon_press'})
		event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/engineering_press'})
		event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/logic_press'})
		event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/calculation_press'})
		
		//Easy cable color clear
		event.remove({id: 'ae2:network/cables/glass_fluix_clean'})
		event.remove({id: 'ae2:network/cables/covered_fluix_clean'})
		event.remove({id: 'ae2:network/cables/smart_fluix_clean'})
		event.remove({id: 'ae2:network/cables/dense_covered_fluix_clean'})
		event.remove({id: 'ae2:network/cables/dense_smart_fluix_clean'})
		
		// Quantum bridge card
		event.remove({id: 'ae2wtlib:quantum_bridge_card'})

		//Modern AE2 Accelerators
		event.remove({id: 'mae2:network/crafting/4x_crafting_accelerator'})
		event.remove({id: 'mae2:network/crafting/16x_crafting_accelerator'})
		event.remove({id: 'mae2:network/crafting/64x_crafting_accelerator'})
		event.remove({id: 'mae2:network/crafting/256x_crafting_accelerator'})
	}

	function addRecipes() {
		//Pulverizer Compat
		thermalPulverizerRecipe('ae2:certus_quartz_dust', 'ae2:certus_quartz_crystal')
		thermalPulverizerRecipe('ae2:fluix_dust', 'ae2:fluix_crystal')
		thermalPulverizerRecipe('ae2:sky_dust', 'ae2:sky_stone_block')
		
		//Easier cable color clear
		event.shapeless('ae2:fluix_glass_cable', ['#ae2:glass_cable'])
		event.shapeless('ae2:fluix_covered_cable', ['#ae2:covered_cable'])
		event.shapeless('ae2:fluix_smart_cable', ['#ae2:smart_cable'])
		event.shapeless('ae2:fluix_covered_dense_cable', ['#ae2:covered_dense_cable'])
		event.shapeless('ae2:fluix_smart_dense_cable', ['#ae2:smart_dense_cable'])
		
		// New quantum bridge card recipe
		event.shaped('ae2wtlib:quantum_bridge_card', [
			'BRB',
			'PNP',
			'SSS'
		], {
			B: 'ae2:wireless_booster',
			R: 'ae2:wireless_receiver',
			P: 'megacells:accumulation_processor',
			N: 'minecraft:nether_star',
			S: 'megacells:sky_steel_ingot'
		})

		//Modern AE2 Accelerators
		event.shaped('mae2:16x_crafting_accelerator', [
			' UP',
			'USU',
			'PU '
		], {
			U: 'megacells:mega_crafting_accelerator',
			P: 'megacells:accumulation_processor',
			S: 'ae2:cell_component_4k'
		})

		event.shaped('mae2:64x_crafting_accelerator', [
			'EPE',
			'USU',
			'EUE'
		], {
			E: 'megacells:sky_steel_ingot',
			P: 'megacells:accumulation_processor',
			U: 'mae2:16x_crafting_accelerator',
			S: 'ae2:cell_component_16k'
		})

		event.shaped('mae2:256x_crafting_accelerator', [
			'EPE',
			'USU',
			'BUB'
		], {
			E: 'megacells:sky_steel_ingot',
			P: 'megacells:accumulation_processor',
			U: 'mae2:64x_crafting_accelerator',
			S: 'ae2:cell_component_64k',
			B: 'megacells:sky_steel_block'
		})
	}

	removeRecipes()
	addRecipes()
})
