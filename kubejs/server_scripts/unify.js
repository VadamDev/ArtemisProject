// priority: 100

ServerEvents.tags('item', event => {
	/*
	  Cast Iron
	*/

	event.add('forge:storage_blocks/cast_iron', 'createbigcannons:cast_iron_block')
	
	/*
	   Netherite
	*/
	
	event.add('forge:nuggets/netherite', 'createdeco:netherite_nugget')
	
	/*
	  Silicon
	*/
	
	event.remove('forge:silicon', 'tinyredstone:silicon')
	event.remove('forge:silicon', 'enderio:silicon')
	
	/*
	   Coal Coke
	*/
	
	event.remove('forge:coal_coke', 'electrodynamics:coalcoke')
})

ServerEvents.recipes(event => {
	/*
	  Plates
	*/
	
	const metalsToUnify = ['iron', 'copper', 'lead', 'steel', 'bronze']
	
	metalsToUnify.forEach(plateName => {
		event.remove({id: 'electrodynamics:plate_' + plateName})
	})
	
	event.remove({id: 'tfmg:sequenced_assembly/heavy_plate'})
	
	/*
	  Gears
	*/
	
	metalsToUnify.forEach(gearName => {
		event.remove({id: 'electrodynamics:gear_' + gearName})
	})
	
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
	
	event.remove({id: 'electrodynamics:blasting/steel_ingot_from_iron_ingot'})
	event.remove({id: 'electrodynamics:blasting/steel_ingot_from_dust'})
	event.remove({id: 'electrodynamics:smelting/steel_ingot_from_dust'})
	
	event.remove({id: 'enderio:smelting/mffs/steel_ingot'})
	
	event.remove({id: 'tfmg:crafting/steel_from_block'})

	event.remove({output: 'tfmg:steel_helmet'})
	event.remove({output: 'tfmg:steel_chestplate'})
	event.remove({output: 'tfmg:steel_leggings'})
	event.remove({output: 'tfmg:steel_boots'})

	event.remove({output: 'tfmg:steel_axe'})
	event.remove({output: 'tfmg:steel_hoe'})
	event.remove({output: 'tfmg:steel_shovel'})
	event.remove({output: 'tfmg:steel_pickaxe'})
	event.remove({output: 'tfmg:steel_sword'})

	/*
	  Cast Iron
	*/

	event.remove({id: 'createbigcannons:cast_iron_block'})
	event.remove({id: 'createbigcannons:cast_iron_ingot_from_block'})

	event.remove({id: 'createbigcannons:compacting/iron_to_cast_iron_ingot'})
	event.remove({id: 'createbigcannons:compacting/iron_to_cast_iron_block'})

	/*
	  Bitumen
	*/

	event.replaceInput({id: 'tfmg:mixing/liquid_asphalt'}, 'tfmg:bitumen', 'thermal:bitumen')

	event.replaceOutput({id: 'tfmg:compacting/bitumen'}, 'tfmg:bitumen', 'thermal:bitumen')
	event.replaceOutput({id: 'tfmg:compacting/bitumen'}, 'tfmg:sulfur_dust', 'thermal:sulfur_dust')

	/*
	  Sulfur
	*/

	event.replaceInput({output: 'tfmg:zinc_grenade'}, 'tfmg:sulfur_dust', '#forge:dusts/sulfur')
	event.replaceInput({id: 'tfmg:mixing/gun_powder'}, 'tfmg:sulfur_dust', '#forge:dusts/sulfur')

	event.replaceOutput({id: 'tfmg:crushing/sulfur'}, 'tfmg:sulfur_dust', 'thermal:sulfur_dust')

	event.remove({id: 'tfmg:mixing/sulfuric_acid'})
	event.recipes.create.mixing(Fluid.of('tfmg:sulfuric_acid', 500), ['#forge:dusts/sulfur', 'tfmg:nitrate_dust', Fluid.water(500)])

	/*
	  Coke
	*/

	event.remove({id: 'tfmg:coking/coal_coke'})
	event.custom({
		"type": "tfmg:coking",
		"ingredients": [
		{
			"count": 1,
			"item": "minecraft:coal"
		}],
		"processingTime": 1000,
		"results": [
		{
			"count": 1,
			"item": "thermal:coal_coke"
		},
		{
			"fluid": "tfmg:creosote",
			"amount": 1
		}]
	})

	event.replaceInput({id: 'tfmg:crushing/coal_coke_dust'}, 'tfmg:coal_coke', 'thermal:coal_coke')
	event.remove({id: 'tfmg:crafting/coal_coke_block'})
	
	event.remove({output: 'electrodynamics:coalcoke'})
	
	/*
	   Copper
	*/
	
	event.remove({id: 'electrodynamics:copper_nuggets_to_copper_ingot'})
	event.remove({id: 'pneumaticcraft:copper_ingot_from_nugget'})
	
	/*
	  Bronze
	*/
	
	event.remove({id: 'silentgear:bronze_ingot'})
	event.remove({id: 'electrodynamics:dust_bronze'})
	
	/*
	  Silicon
	*/
	
	event.remove({output: 'tinyredstone:silicon'})
	
	event.remove({input: 'tinyredstone:silicon_compound'})
	event.remove({output: 'tinyredstone:silicon_compound'})
	
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
})
