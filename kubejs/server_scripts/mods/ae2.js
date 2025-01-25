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
		
		//New infinity booster recipes
		event.remove({id: 'aeinfinitybooster:infinity_card'})
		event.remove({id: 'aeinfinitybooster:dimension_card'})
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
		
		//New infinity booster recipes
		event.shaped('aeinfinitybooster:infinity_card', [
			'DRD',
			'CNC',
			'SSS'
		], {
			D: 'ae2:sky_dust',
			R: 'ae2:wireless_receiver',
			C: 'ae2:wireless_booster',
			N: 'minecraft:nether_star',
			S: 'megacells:sky_steel_ingot'
		})
		
		event.shaped('aeinfinitybooster:dimension_card', [
			'CPC',
			'ANA',
			'CPC'
		], {
			C: 'aeinfinitybooster:infinity_card',
			P: 'ae2:fluix_pearl',
			A: 'megacells:accumulation_processor',
			N: 'minecraft:netherite_ingot'
		})
	}

	removeRecipes()
	addRecipes()
})
