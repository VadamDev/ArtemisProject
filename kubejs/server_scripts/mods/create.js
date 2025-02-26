//Author: VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		event.remove({id: 'thermal:compat/create/smelter_create_alloy_chromatic_compound'})

		//Create Ender Transmission
		event.remove({mod: 'createendertransmission'})
	}

	function addRecipes() {
		//Chromatic Compound recipe
		event.recipes.createMixing('create:chromatic_compound', ['3x minecraft:glowstone_dust', '3x mekanism:dust_obsidian', 'create:polished_rose_quartz']).superheated()

		//Reintroduce refined radiance
		event.shaped('4x create:refined_radiance_casing', [
			'PPP',
			'RGR',
			'PPP'
		], {
			P: '#minecraft:planks',
			R: 'create:refined_radiance',
			G: '#forge:glass'
		})

		event.replaceInput({id: 'create:mechanical_crafting/wand_of_symmetry'}, 'minecraft:ender_pearl', 'create:refined_radiance')

		//Reintroduce shadow steel
		event.shaped('4x create:shadow_steel_casing', [
			'PPP',
			'SOS',
			'PPP'
		], {
			P: '#minecraft:planks',
			S: 'create:shadow_steel',
			O: 'minecraft:obsidian'
		})

		/*
		  Create Ender Transmission
		*/

		event.recipes.createMechanicalCrafting('2x createendertransmission:energy_transmitter', [
			'CCSCC',
			'CRRMC',
			'CRPRC',
			'CMRRC',
			'CCSCC'
		], {
			C: 'create:shadow_steel_casing',
			S: 'create:shaft',
			R: 'create:refined_radiance',
			M: 'tfmg:steel_mechanism',
			P: 'ae2:fluix_pearl'
		})
	}

	removeRecipes()
	addRecipes()
})
