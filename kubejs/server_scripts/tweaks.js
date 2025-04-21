//Author: VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		//IronFurnace Generator Augment
		event.remove({output: 'ironfurnaces:augment_generator'})
		
		//AlexMobs Transmutation table
		event.remove({id: 'alexsmobs:transmutation_table'})		
	}

	function addRecipes() {
		//Update existing eccentric tomes
		event.shapeless(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{ad_astra:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"ad_astra:astrodux"}}},advancedperipherals:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}}},alexsmobs:{0:{Count:1b,id:"alexsmobs:animal_dictionary"}},apotheosis:{0:{Count:1b,id:"patchouli:guide_book",tag:{Enchantments:[],"patchouli:book":"apotheosis:apoth_chronicle"}}},ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},bloodmagic:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bloodmagic:guide"}}},botania:{0:{Count:1b,id:"botania:lexicon"}},buildinggadgets2:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}}},electrodynamics:{0:{Count:1b,id:"electrodynamics:guidebook"}},elementalcraft:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"elementalcraft:element_book"}}},extendedcrafting:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"extendedcrafting:guide"}}},industrialforegoing:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}}},integrateddynamics:{0:{Count:1b,id:"integrateddynamics:on_the_dynamics_of_integration"}},irons_spellbooks:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}}},mffs:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"mffs:handbook"}}},modonomicon:{0:{Count:1b,id:"modonomicon:modonomicon",tag:{"modonomicon:book_id":"theurgy:the_hermetica"}}},modularrouters:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"modularrouters:book"}}},mysticalagriculture:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"mysticalagriculture:guide"}}},pneumaticcraft:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}}},productivebees:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"productivebees:guide"}}},securitycraft:{0:{Count:1b,id:"securitycraft:sc_manual"}},simplyswords:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"simplyswords:runic_grimoire"}}},solcarrot:{0:{Count:1b,id:"solcarrot:food_book",tag:{Enchantments:[]}}},sushigocrafting:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"sushigocrafting:sushigocrafting"}}},twilightdelight:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"twilightdelight:twilight_guide"}}},unusualprehistory:{0:{Count:1b,id:"unusualprehistory:encyclopedia"}}},"eccentrictome:version":1}'), Item.of('eccentrictome:tome'))

		//Easy Wool gin
		event.replaceInput({id: 'projectred_exploration:wool_gin'}, 'projectred_core:iron_coil', '#forge:ingots/iron')

		//Convert back Dragon Mounts Eggs to Vanilla Eggs
		event.shapeless('minecraft:dragon_egg', Item.of('dragonmounts:dragon_egg'))

		//Nametag
		event.shaped('minecraft:name_tag', [
			' IS',
			' PI',
			'P  '
		], {
			I: 'minecraft:iron_ingot',
			S: 'minecraft:string',
			P: 'minecraft:paper'
		})

		//IronFurnace Augment Factory
		event.remove({output: 'ironfurnaces:augment_factory'})
		event.shaped('2x ironfurnaces:augment_factory', [
			' C ',
			'GSG',
			' C '
		], {
			C: 'minecraft:cobblestone',
			G: 'thermal:steel_gear',
			S: 'mekanism:energized_smelter'
		})

		//BiggerReactor Casing
		event.remove({output: 'biggerreactors:reactor_casing'})
		event.shaped('4x biggerreactors:reactor_casing', [
			'SLS',
			'LGL',
			'SLS'
		], {
		    S: 'thermal:steel_plate',
		    L: 'thermal:lead_ingot',
		    G: 'biggerreactors:graphite_block'
		})
		
		//Charging Station
		event.remove({output: 'charginggadgets:charging_station'})
		event.shaped('charginggadgets:charging_station', [
			' C ',
			'GFG',
			' D '
		], {
			C: 'thermal:rf_coil',
			G: 'thermal:iron_gear',
			F: 'thermal:machine_frame',
			D: 'thermal:dynamo_stirling'
		})
		
		//Create Chunk Loader
		event.remove({output: 'createchunkloading:chunk_loader'})
		event.shaped('createchunkloading:chunk_loader', [
			' G ',
			'GLG',
			' G '
		], {
		    G: 'create:framed_glass',
			L: 'chickenchunks:chunk_loader'
		})
		
		event.shapeless('chickenchunks:chunk_loader', 'createchunkloading:chunk_loader')
		
		//Easy Spot Loader
		event.remove({id: 'chickenchunks:spot_loader'})
		event.shapeless('9x chickenchunks:spot_loader', 'chickenchunks:chunk_loader')
		
		event.shaped('chickenchunks:chunk_loader', [
			'SSS',
			'SSS',
			'SSS'
		], {
		    S: 'chickenchunks:spot_loader'
		})
		
		//Unpack resonating plates
		event.shapeless('9x deepresonance:resonating_plate', 'deepresonance:resonating_plate_block')
		
		//MobGrindingUtils looting upgrade
		event.remove({id: 'mob_grinding_utils:recipe_saw_upgrade_looting'})
		event.shaped('mob_grinding_utils:saw_upgrade_looting', [
			'GDG',
			'DBD',
			'GDG'
		], {
		    G: '#forge:nuggets/gold',
		    D: '#forge:dyes/blue',
		    B: [Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1).strongNBT(), Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2).strongNBT(), Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3).strongNBT()]
		})
		
		//Explorer Compass
		event.remove({id: 'explorerscompass:explorers_compass'})
		event.shaped('explorerscompass:explorerscompass', [
			' S ',
			'NCN',
			' N '
		], {
		    S: 'bloodmagic:demonslate',
		    N: 'minecraft:netherite_ingot',
		    C: 'naturescompass:naturescompass'
		})
		
		//Time In A Bottle
		event.remove({id: 'tiab:time_in_a_bottle'})
		event.shaped('tiab:time_in_a_bottle', [
			'SUS',
			'ABA',
			'MDM'
		], {
		    S: 'mysticalagriculture:speed_iii_augment',
		    U: 'productivebees:upgrade_time',
		    A: 'forbidden_arcanus:arcane_crystal_dust',
			B: 'minecraft:glass_bottle',
			M: 'forbidden_arcanus:mundabitur_dust',
			D: 'forbidden_arcanus:deorum_ingot'
		})
		
		//Phantom Spawn Egg
		event.custom({
			"type": "bloodmagic:altar",
			"altarSyphon": 5000,
			"consumptionRate": 5,
			"drainRate": 5,
			"input": {
				"item": "minecraft:bat_spawn_egg"
			},
			"output": {
				"item": "minecraft:phantom_spawn_egg"
			},
			"upgradeLevel": 0
		})

		//Point blank villager workstation
		event.shaped('pointblank:workstation', [
			'SSS',
			' M ',
			'MCM'
		], {
		    S: 'minecraft:smooth_stone_slab',
		    M: 'pointblank:gunmetal_ingot',
		    C: 'pointblank:processor'
		})
		
		//Mana Cell Mythic Botany compat
		event.custom({
			"type": "mythicbotany:infuser",
			"fromColor": 255,
			"group": "infuser",
			"ingredients": [
				{
					"item": "appbot:mana_cell_housing"
				},
				{
					"item": "botania:mana_pearl"
				},
				{
					"item": "botania:mana_diamond"
				},
				{
					"item": "ae2:sky_dust"
				},
				{
					"item": "ae2:quartz_vibrant_glass"
				}
			],
			"mana": 2000000,
			"output": {
				"count": 1,
				"item": "megacells:mega_mana_cell_housing"
			},
			"toColor": 65280
		})
		
		//Blue Bomb
		event.custom({
			type: 'botania:mana_infusion',
			input: {
				item: 'supplementaries:bomb'
			},
			output: {
				item: 'supplementaries:bomb_blue'
			},
			mana: 10000
		})
	}

	removeRecipes()
	addRecipes()
})
