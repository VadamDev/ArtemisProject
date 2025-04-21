//Author: VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		[
			'light_bulb', 'rgb_light_bulb', 'traffic_light', 'segmented_display', 'copycat_cable_block', 'brass_cable_hub', 'copper_cable_hub', 'steel_cable_hub',
			'aluminum_cable_hub', 'steel_casing_cable_hub', 'heavy_cable_hub', 'cable_tube', 'neon_tube', 'diagonal_cable_block', 'capacitor', 'converter', 'voltmeter',
			'energy_meter', 'fuse_block', 'electric_pump', 'voltage_observer', 'transistor', 'electric_post', 'electric_diode', 'generator', 'galvanic_cell', 'cable_connector',
			'copper_cable', 'resistor', 'polarizer', 'magnetic_ingot', 'fuse', 'accumulator', 'lithium_charge'
		].forEach(item => event.remove({output: 'tfmg:' + item}))

		//Almost Unified already unfied TFMG Copper Cable recipes
		event.remove({id: 'tfmg:stonecutting/copper_wire'})

		//Replaced by TFMG Capacitor
		event.remove({output: 'createaddition:capacitor'})
		event.remove({output: 'createaddition:zinc_sheet'})

		//New Electric motor & Alternator Recipe
		event.remove({output: 'createaddition:modular_accumulator'})
		event.remove({id: 'createaddition:mechanical_crafting/electric_motor'})
		event.remove({id: 'createaddition:mechanical_crafting/alternator'})
	}

	function addRecipes() {
		//Replace TFMG Copper Cable by Create Additions Copper Spool
		event.replaceInput({mod: 'tfmg'}, 'tfmg:copper_cable', 'createaddition:copper_spool')

		//Replace Create Additions capacitor
		event.replaceInput({mod: 'createaddition'}, 'createaddition:capacitor', 'tfmg:capacitor_')

		//Due to polarizer crash, new magnetic ingot recipe
		event.recipes.createMixing('2x tfmg:magnetic_ingot', ['mekanism:ingot_steel', 'create:crushed_raw_iron', Fluid.of('tfmg:lubrication_oil', 50)]).heated()

		//New accumulator recipe
		event.shaped('2x createaddition:modular_accumulator', [
			'ILI',
			'IEI',
			'ISI'
		], {
			I: '#forge:ingots/lithium',
			L: '#forge:ingots/lead',
			E: 'tfmg:electric_casing',
			S: 'tfmg:sulfuric_acid_bucket'
		})

		event.shaped('4x createaddition:modular_accumulator', [
			'ILI',
			'IEI',
			'ZSC'
		], {
			I: '#forge:ingots/lithium',
			L: '#forge:ingots/lead',
			E: 'tfmg:electric_casing',
			Z: 'tfmg:zinc_sulfate',
			S: 'tfmg:sulfuric_acid_bucket',
			C: 'tfmg:copper_sulfate'
		})

		//New Electric Motor Recipe
		event.replaceOutput({id: 'tfmg:crafting/electric_motor'}, 'tfmg:electric_motor', 'createaddition:electric_motor')

		//New Alternator Recipe
		event.recipes.createMechanicalCrafting('createaddition:alternator', [
			'ESE',
			'SRS',
			'PSP'
		], {
			E: '#forge:ingots/steel',
			S: 'tfmg:stator',
			R: 'tfmg:rotor',
			P: 'tfmg:plastic_sheet'
		})
		
		//Testla Coil use Electric Casing instead of Brass Casing
		event.replaceInput({id: 'createaddition:mechanical_crafting/tesla_coil'}, 'create:brass_casing', 'tfmg:electric_casing')

		//Connector Uses Aluminum instead of Andesite Alloy
		event.replaceInput([{output: 'createaddition:connector'}, {output: 'createaddition:large_connector'}], 'create:andesite_alloy', '#forge:ingots/aluminum')

		//Missing flywheel recipes
		event.shaped('tfmg:lead_flywheel', [
		    'MMM',
			'MSM',
			'MMM'
		], {
			M: '#forge:ingots/lead',
			S: 'create:shaft'
		})
		
		event.shaped('tfmg:nickel_flywheel', [
		    'MMM',
			'MSM',
			'MMM'
		], {
			M: '#forge:ingots/nickel',
			S: 'create:shaft'
		})
	}

	removeRecipes()
	addRecipes()
})
