//Author: VadamDev

ServerEvents.recipes(event => {	
	//Remove minecraft recipe, productive bee's one is better
	event.remove({id: 'minecraft:beehive'})
		
	//Conflicts with Quark chests to vanilla chest
	event.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
	event.remove({id: 'functionalstorage:oak_drawer_alternate_x2'})
	event.remove({id: 'functionalstorage:oak_drawer_alternate_x4'})
	
	//Black Dye / Fire for Standing Torch
	event.remove({id: 'additional_lights:fire_for_standing_torch_s'})		 
	event.shaped('additional_lights:fire_for_standing_torch_s', [
		'W',
		'C'
	], {
		W: '#forge:rods/wooden',
		C: '#minecraft:coals'
	})
		
	//Structurize / Construction Wand
	const straightWandRecipe = (output, material) => {		
		event.shaped(output, [ 'SSM' ], {
			M: material,
			S: '#forge:rods/wooden'
		})
	}
	
	event.remove({id: 'structurize:sceptergold'})
	straightWandRecipe('structurize:sceptergold', '#minecraft:stone_crafting_materials')
	
	event.remove({id: 'minecolonies:shapetool'})
	straightWandRecipe('structurize:shapetool', '#forge:gems/emerald')
	
	event.remove({id: 'structurize:sceptersteel'})
	straightWandRecipe('structurize:sceptersteel', '#forge:ingots/iron')
	
	//Simply Swords / Construction Wand
	const reverseWandRecipe = (output, material) => {
		event.shaped(output, ['S  ', ' S ', '  M'], {
			S: '#forge:rods/wooden',
			M: material
		})
	}
	
	event.remove({id: 'simplyswords:iron_spear'})
	reverseWandRecipe('simplyswords:iron_spear', '#forge:ingots/iron')
	
	event.remove({id: 'simplyswords:gold_spear'})
	reverseWandRecipe('simplyswords:gold_spear', '#forge:ingots/gold')
	
	event.remove({id: 'simplyswords:diamond_spear'})
	reverseWandRecipe('simplyswords:diamond_spear', '#forge:gems/diamond')
	
	//Log to stick recipe but without Botania magic wood
	event.remove({id: 'enderio:stick'})
	event.shaped('16x minecraft:stick', [ 'L', 'L' ], {
		L: Ingredient.of('#minecraft:logs').subtract(Ingredient.of(['#botania:livingwood_logs', '#botania:dreamwood_logs']))
	})
	
	//Valhelsia Furniture chair / table conflicts with vanilla slabs
	const valhWoodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'cherry', 'dark_oak', 'mangrove', 'crimson', 'warped']
	
	valhWoodTypes.forEach(wood => {
		//Chair
		event.remove({id: 'valhelsia_furniture:' + wood + '_chair'})
		event.shaped('2x valhelsia_furniture:' + wood + '_chair', ['LPL'], {
			P: 'minecraft:' + wood + '_planks',
			L: 'minecraft:' + wood + '_log'
		})
		
		//Table
		event.remove({id: 'valhelsia_furniture:' + wood + '_table'})
		event.shaped('valhelsia_furniture:' + wood + '_table', ['PLP'], {
			P: 'minecraft:' + wood + '_planks',
			L: 'minecraft:' + wood + '_log'
		})
	})
})
