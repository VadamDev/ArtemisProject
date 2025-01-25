//Author: VadamDev

//Add tags for easier tunnels recipes
ServerEvents.tags('item', event => {
	event.add('kubejs:pipes/item', 'pipez:item_pipe')
	event.add('kubejs:pipes/item', 'mekanism:basic_logistical_transporter')
	event.add('kubejs:pipes/item', 'enderio:item_conduit')
	
	event.add('kubejs:pipes/fluid', 'pipez:fluid_pipe')
	event.add('kubejs:pipes/fluid', 'mekanism:basic_mechanical_pipe')
	event.add('kubejs:pipes/fluid', 'enderio:fluid_conduit')
	
	event.add('kubejs:pipes/energy', 'pipez:energy_pipe')
	event.add('kubejs:pipes/energy', 'mekanism:basic_universal_cable')
	event.add('kubejs:pipes/energy', 'enderio:fe_conduit')
})

ServerEvents.recipes(event => {
	function removeRecipes() {
		//Remove compact machine wall recipe
		event.remove({output: 'compactmachines:wall'})
		
		//Remove tunnels recipes
		event.remove({id: 'compactmachines:tunnels/item'})
		event.remove({id: 'compactmachines:tunnels/fluid'})
		event.remove({id: 'compactmachines:tunnels/energy'})
	}

	function addRecipes() {
		//Cheaper compact machines
		event.replaceInput({output: 'compactmachines:machine_tiny'}, 'minecraft:copper_block', 'minecraft:copper_ingot')
		event.replaceInput({output: 'compactmachines:machine_small'}, 'minecraft:iron_block', 'minecraft:iron_ingot')
		event.replaceInput({output: 'compactmachines:machine_normal'}, 'minecraft:gold_block', 'minecraft:gold_ingot')
		event.replaceInput({output: 'compactmachines:machine_giant'}, 'minecraft:diamond_block', 'minecraft:diamond')
		event.replaceInput({output: 'compactmachines:machine_maximum'}, 'minecraft:netherite_block', 'minecraft:netherite_ingot')
		
		//New compact machine wall recipe
		event.shaped('8x compactmachines:wall', [
			'FFF',
			'FRF',
			'FFF'
		], {
			F: 'fluxnetworks:flux_dust',
			R: 'thermal:rf_coil'
		})
		
		//New tunnel recipes, using tags made above
		event.shapeless(Item.of('compactmachines:tunnel', 2, '{definition:{id:"compactmachines:item"}}'), [
			'#kubejs:pipes/item', 'fluxnetworks:flux_dust',
			'minecraft:redstone'
		])

		event.shapeless(Item.of('compactmachines:tunnel', 2, '{definition:{id:"compactmachines:fluid"}}'), [
			'#kubejs:pipes/fluid', 'fluxnetworks:flux_dust',
			'minecraft:redstone'
		])

		event.shapeless(Item.of('compactmachines:tunnel', 2, '{definition:{id:"compactmachines:energy"}}'), [
			'#kubejs:pipes/energy', 'fluxnetworks:flux_dust',
			'minecraft:redstone'
		])
	}

	removeRecipes()
	addRecipes()
})
