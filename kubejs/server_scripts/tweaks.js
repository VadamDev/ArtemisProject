//Author VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {		
		/*
		   Useless Wool Gin
		*/
		event.remove({input: 'projectred_exploration:wool_gin'})
		event.remove({output: 'projectred_exploration:wool_gin'})

		/*
		  Iron Furnace
		*/

		event.remove({output: 'ironfurnaces:augment_generator'})
		event.remove({output: 'ironfurnaces:augment_factory'})

		/*
		  Bigger reactor
		*/

		event.remove({output: 'biggerreactors:reactor_casing'})

		/*
		  Charging Gadgets
		*/

		event.remove({output: 'charginggadgets:charging_station'})

		/*
		  Chunk Loader
		*/

		event.remove({output: 'createchunkloading:chunk_loader'})
		
		/*
		   Mob Grinding Utils
		*/
		
		event.remove({id: 'mob_grinding_utils:recipe_saw_upgrade_looting'})

        /*
		   Explorer Compass
		*/
		
		event.remove({id: 'explorerscompass:explorers_compass'})
		
		/*
		   Transmutation table
		*/
		
		event.remove({id: 'alexsmobs:transmutation_table'})
		
		/*
		   Time In A Bottle
		*/
		
		event.remove({id: 'tiab:time_in_a_bottle'})
		
		/*
		   Thermal
		*/
		
		event.remove({id: 'thermal:machine_frame'})		
	}

	function addRecipes() {
		/*
		  Auto Andesite
		*/
		event.recipes.createSplashing('minecraft:andesite', 'minecraft:gravel')
		
		/*
		  Nametag
		*/
		event.shaped('minecraft:name_tag', [
			' IS',
			' PI',
			'P  '
		], {
			I: 'minecraft:iron_ingot',
			S: 'minecraft:string',
			P: 'minecraft:paper'
		})
		
		/*
		  Wool to string
		*/
		event.shapeless('4x minecraft:string', ['#minecraft:wool'])
		
		/*
		  Iron Furnace
		*/

		event.shaped('2x ironfurnaces:augment_factory', [
				' C ',
				'GSG',
				' C '
				], {
			        C: 'minecraft:cobblestone',
			        G: 'thermal:steel_gear',
			        S: 'mekanism:energized_smelter'
			    })

		/*
		  Bigger reactor
		*/

		event.shaped('4x biggerreactors:reactor_casing', [
				'SLS',
				'LGL',
				'SLS'
				], {
			        S: 'thermal:steel_plate',
			        L: 'thermal:lead_ingot',
			        G: 'biggerreactors:graphite_block'
			    })

		/*
		  Charging Station
		*/

		event.shaped('charginggadgets:charging_station', [
				' C ',
				'GFG',
				' D '
				], {
			        C: 'thermal:rf_coil',
			        G: 'thermal:electrum_gear',
			        F: 'thermal:machine_frame',
			        D: 'thermal:dynamo_stirling'
			    })

		/*
		  Chunk Loader
		*/

		event.shapeless('createchunkloading:chunk_loader', 'chickenchunks:chunk_loader')
		event.shapeless('chickenchunks:chunk_loader', 'createchunkloading:chunk_loader')
		
		/*
		  Unpack resonating plates
		*/
		event.shapeless('9x deepresonance:resonating_plate', 'deepresonance:resonating_plate_block')
		
		/*
		   Mob Grinding Utils upgrade
		*/
		
		event.shaped('mob_grinding_utils:saw_upgrade_looting', [
		        'GDG',
				'DBD',
				'GDG'
				], {
			        G: '#forge:nuggets/gold',
			        D: '#forge:dyes/blue',
			        B: [Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1).strongNBT(), Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2).strongNBT(), Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3).strongNBT()]
			    })
				
		/*
		   Explorer Compass
		*/
		
		event.shaped('explorerscompass:explorerscompass', [
		        ' S ',
				'NCN',
				' N '
				], {
			        S: 'bloodmagic:demonslate',
			        N: 'minecraft:netherite_ingot',
			        C: 'naturescompass:naturescompass'
				})
				
		/*
		   Time In A Bottle
		*/
		
		event.shaped('tiab:time_in_a_bottle', [
		        'SUS',
				'ABA',
				'IDI'
				], {
			        S: 'mysticalagriculture:speed_iii_augment',
			        U: 'productivebees:upgrade_time',
			        A: 'forbidden_arcanus:arcane_crystal_dust',
					B: 'minecraft:glass_bottle',
					I: 'eidolon:gold_inlay',
					D: 'forbidden_arcanus:deorum_ingot'
				})
				
		/*
		   Thermal
		*/
		
		event.shaped('thermal:machine_frame', [
		        'IGI',
				'GTG',
				'SGS'
				], {
			        I: '#forge:ingots/iron',
			        G: '#forge:glass',
			        T: '#forge:gears/tin',
					S: '#forge:ingots/steel'
				})

		/*
		  Blue Bomb
		*/
		event.custom({
			type: 'botania:mana_infusion',
			input: {
				item: 'supplementaries:bomb'
			},
			output: {
				item: 'supplementaries:bomb_blue'
			},
			mana: 100000
		})
	}

	removeRecipes()
	addRecipes()
})
