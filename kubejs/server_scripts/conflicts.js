//Author VadamDev

ServerEvents.recipes(event => {
	//Useless tf book
	event.remove({output: Item.of('patchouli:guide_book', '{"patchouli:book":"twilightforest:guide"}')})
	
	//Remove minecraft recipe, productive bee's one is better
	event.remove({id: 'minecraft:beehive'})
		
	//Conflicts with Quark chests to vanilla chest
	event.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
	event.remove({id: 'functionalstorage:oak_drawer_alternate_x2'})
	event.remove({id: 'functionalstorage:oak_drawer_alternate_x4'})
	
	// Black Dye / Fire for Standing Torch
	event.remove({id: 'additional_lights:fire_for_standing_torch_s'})		 
	event.shaped('additional_lights:fire_for_standing_torch_s', [
		'W',
		'C'
	], {
		W: '#forge:rods/wooden',
		C: '#minecraft:coals'
	})
		
	// Structurize / Construction Wand
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
	
	// Quark log to stick recipe but without Botania magic wood
	event.remove({id: 'enderio:stick'})
	event.shaped('16x minecraft:stick', [
		'L',
		'L'
	], {
		L: Ingredient.of('#minecraft:logs').subtract(Ingredient.of(['#botania:livingwood_logs', '#botania:dreamwood_logs']))
	})
})
