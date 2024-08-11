// priority: 1

ServerEvents.tags('item', event => {
	/*
	  Cast Iron
	*/

	event.add('forge:storage_blocks/cast_iron', 'createbigcannons:cast_iron_block')
})

ServerEvents.recipes(event => {
	/*
	  Steel
	*/

	event.remove({input: 'mffs:steel_compound'})
	event.remove({output: 'mffs:steel_compound'})

	event.remove({id: 'thermal:machines/smelter/smelter_alloy_steel'})

	event.remove({id: 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals'})
	event.remove({output: 'ad_astra:etrionic_blast_furnace'})

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

	/*
	  Magnetic
	*/

	event.remove({output: 'tfmg:polarizer'})
	event.shapeless('tfmg:magnetic_ingot', ['#forge:ingots/steel', '2x create:crushed_raw_iron'])
})
