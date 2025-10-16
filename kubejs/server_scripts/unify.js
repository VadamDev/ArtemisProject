// priority: 100
//Author VadamDev

ServerEvents.tags('item', event => {
	//Cast Iron
	event.add('forge:storage_blocks/cast_iron', 'createbigcannons:cast_iron_block')
	
	//Netherite
	event.add('forge:nuggets/netherite', 'createdeco:netherite_nugget')
	
	//Silicon
	event.remove('forge:silicon', 'enderio:silicon')
	
	//Thallasium
	event.remove('forge:ingots/iron', 'betterend:thallasium_ingot')
	
	//BHC x Ice and Fire necrotic bones compat
	event.add('forge:wither_bones', 'iceandfire:witherbone')
})

ServerEvents.recipes(event => {
	/*
	  Dusts
	*/

	const thermalPulverizer = (input, output) => {
		event.custom({
			type: 'thermal:pulverizer',
			ingredient: {item: input},
			result: [{item: output}],
			experience: 0.1
		})
	}
	
	thermalPulverizer('minecraft:coal', 'mekanism:dust_coal')
	thermalPulverizer('minecraft:charcoal', 'mekanism:dust_charcoal')

	/*
	  Plates
	*/
	
	event.replaceInput({mod: 'createdeco'}, 'create:copper_sheet', '#forge:plates/copper')
	event.replaceInput({mod: 'createdeco'}, 'create:copper_nugget', '#forge:nuggets/copper')
	event.replaceInput({mod: 'createdeco'}, 'create:iron_sheet', '#forge:plates/iron')

	event.remove({id: 'createaddition:pressing/electrum_ingot'})
	
	const missingThermalPlates = ['signalum', 'lumium', 'enderium', 'tin', 'lead', 'silver', 'nickel', 'bronze', 'electrum', 'invar', 'constantan']
	missingThermalPlates.forEach(metal => {
		event.recipes.createPressing('thermal:' + metal + '_plate', 'thermal:' + metal + '_ingot')
	})
	
	event.remove({id: 'createdeco:pressing/netherite_sheet'})
	event.recipes.createPressing('thermal:netherite_plate', 'minecraft:netherite_ingot')

	event.recipes.createPressing('thermal:steel_plate', 'mekanism:ingot_steel')

	event.recipes.createPressing('thermal:iron_plate', 'minecraft:iron_ingot')
	event.recipes.createPressing('thermal:gold_plate', 'minecraft:gold_ingot')
	event.recipes.createPressing('thermal:copper_plate', 'minecraft:copper_ingot')
	
	const missingThermalExtraPlates = ['soul_infused', 'shellite', 'twinite', 'dragonsteel', 'abyssal']
	missingThermalExtraPlates.forEach(metal => {
		event.recipes.createPressing('thermal_extra:' + metal + '_plate', 'thermal_extra:' + metal + '_ingot')
	})
	
	const thermalPress = (input, output) => {
		event.custom({
			"type": "thermal:press",
			"ingredient": {
				"item": input
			},
			"result": [{
				"item": output
			}]
		})
	}
	
	thermalPress('create:brass_ingot', 'create:brass_sheet')
	thermalPress('create:andesite_alloy', 'createdeco:andesite_sheet')
	thermalPress('create:zinc_ingot', 'createdeco:zinc_sheet')
	thermalPress('createdeco:industrial_iron_ingot', 'createdeco:industrial_iron_sheet')
	
	/*
	  Gears
	*/
	
	event.remove({id: 'industrialforegoing:iron_gear'})
	event.remove({id: 'industrialforegoing:gold_gear'})
	event.remove({id: 'industrialforegoing:diamond_gear'})
	
	event.remove({id: 'enderio:iron_gear'})
	
	/*
	  Steel
	*/

	event.remove({input: 'mffs:steel_compound'})
	event.remove({output: 'mffs:steel_compound'})

	event.remove({id: 'thermal:machines/smelter/smelter_alloy_steel'})

	event.remove({id: 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals'})
	event.remove({output: 'ad_astra:etrionic_blast_furnace'})
	
	event.remove({id: 'ad_astra:steel_ingot'})
	event.remove({id: 'ad_astra:steel_ingot_from_steel_block'})
	event.remove({id: 'ad_astra:steel_block'})
	
	event.remove({id: 'enderio:smelting/mffs/steel_ingot'})

	/*
	  Cast Iron
	*/

	event.remove({id: 'createbigcannons:cast_iron_block'})
	event.remove({id: 'createbigcannons:cast_iron_ingot_from_block'})

	event.remove({id: 'createbigcannons:compacting/iron_to_cast_iron_ingot'})
	event.remove({id: 'createbigcannons:compacting/iron_to_cast_iron_block'})
	
	/*
	   Copper
	*/
	
	event.remove({id: 'pneumaticcraft:copper_ingot_from_nugget'})
	
	/*
	  Bronze
	*/
	
	event.remove({id: 'silentgear:bronze_ingot'})
	
	/*
	   Uranium
	*/
	
	event.remove({id: 'biggerreactors:compat/mekanism/enriching/enrichment_uranium_chunk'})
	event.remove({id: 'alexscaves:block_of_uranium'})
	
	/*
	  Silicon
	*/
	
	event.replaceOutput({mod: 'enderio'}, 'enderio:silicon', 'ae2:silicon')
	
	event.remove({id: 'enderio:sag_milling/clay'})
	event.custom({
		"type": "enderio:sag_milling",
		"energy": 2400,
		"input": {
			"item": "minecraft:clay"
		},
		"outputs": [
		{
			"chance": 1.0,
			"item": {
				"count": 2,
				"item": "minecraft:clay_ball"
			},
			"optional": false
		},
		{
			"chance": 0.1,
			"item": {
				"item": "minecraft:clay_ball"
			},
			"optional": false
		},
		{
			"chance": 0.8,
			"item": {
				"count": 2,
				"item": "ae2:silicon"
			},
			"optional": false
		}]
	})
	
	event.remove({id: 'enderio:sag_milling/redstone_ore'})
	event.custom({
		"type": "enderio:sag_milling",
		"energy": 2400,
		"input": {
			"tag": "forge:ores/redstone"
		},
		"outputs": [
		{
			"chance": 1.0,
			"item": {
				"count": 8,
				"item": "minecraft:redstone"
			},
			"optional": false
		},
		{
			"chance": 0.2,
			"item": {
				"item": "minecraft:redstone"
			},
			"optional": false
		},
		{
			"chance": 0.8,
			"item": {
				"item": "ae2:silicon"
			},
			"optional": false
		},
		{
			"chance": 0.15,
			"item": {
				"item": "minecraft:cobblestone"
				},
			"optional": false
		}]
	})
	
	/*
	   Thallasium
	*/
	
	event.smelting('minecraft:iron_ingot', 'betterend:thallasium_ingot')
})
