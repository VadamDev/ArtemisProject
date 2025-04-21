//Author: VadamDev

JEIEvents.hideItems(event => {
	//TFMG
	event.hide(['tfmg:steel_helmet', 'tfmg:steel_chestplate', 'tfmg:steel_leggings', 'tfmg:steel_boots'])
	event.hide(['tfmg:steel_axe', 'tfmg:steel_hoe', 'tfmg:steel_shovel', 'tfmg:steel_pickaxe', 'tfmg:steel_sword'])

	event.hide([
		//Unify
		'tfmg:sulfur_dust', 'tfmg:bitumen', 'tfmg:coal_coke', 'tfmg:coal_coke_block',

		//Electric Items
		'tfmg:light_bulb', 'tfmg:rgb_light_bulb', 'tfmg:traffic_light', 'tfmg:segmented_display', 'tfmg:copycat_cable_block', 'tfmg:brass_cable_hub', 'tfmg:copper_cable_hub', 
		'tfmg:steel_cable_hub', 'tfmg:aluminum_cable_hub', 'tfmg:steel_casing_cable_hub', 'tfmg:heavy_cable_hub', 'tfmg:cable_tube', 'tfmg:neon_tube', 'tfmg:diagonal_cable_block',
		'tfmg:capacitor', 'tfmg:converter', 'tfmg:voltmeter', 'tfmg:energy_meter', 'tfmg:fuse_block', 'tfmg:electric_pump', 'tfmg:voltage_observer', 'tfmg:transistor',
		'tfmg:electric_post', 'tfmg:electric_diode', 'tfmg:generator', 'tfmg:galvanic_cell', 'tfmg:cable_connector', 'tfmg:copper_cable', 'tfmg:resistor', 'tfmg:polarizer',
		'tfmg:fuse', 'tfmg:accumulator', 'tfmg:electric_motor', 'tfmg:creative_generator', 'tfmg:debug_source', 'tfmg:debug_electric_block', 'tfmg:lithium_charge'
	])

	//Create Additions
	event.hide(['createaddition:capacitor', 'createaddition:zinc_sheet'])
	
	//Ad Astra
	event.hide(['ad_astra:coal_generator', 'ad_astra_giselle_addon:gravity_normalizer'])
	
	//Draconic
	event.hide(['draconicevolution:generator'])
	
	//MFFS
	event.hide('mffs:steel_compound')
	
	//Angel Ring
	event.hide(['angelring:diamond_ring', 'angelring:energetic_angel_ring', 'angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring'])
	
	//Iron Furnaces
	event.hide(['ironfurnaces:augment_generator', 'ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_plating', 'ironfurnaces:million_furnace', 'ironfurnaces:rainbow_coal'])
	
	//Ender IO
	event.hide(['enderio:primitive_alloy_smelter', 'enderio:energy_conduit', 'enderio:silicon'])
	
	//Repetitive Items
	event.hide(['ae2:facade', 'enderio:filled_soul_vial', 'enderio:broken_spawner'])
	
	//Random Disabled Items
	event.hide([
		'advancedperipherals:rs_bridge',
		'tinyredstone:silicon',
		'tinyredstone:silicon_compound',
		'createdeco:netherite_sheet',
		
		'twilightforest:uncrafting_table',
		
		'paraglider:heart_container',
		'paraglider:stamina_vessel',
		'paraglider:spirit_orb',
		'paraglider:anti_vessel',
		'paraglider:essence',

		'createendertransmission:chunk_loader',
		'createendertransmission:item_transmitter',
		'createendertransmission:fluid_transmitter'
	])
})

JEIEvents.addItems(event => {
	//Add back legacy create magic items
	event.add(['create:chromatic_compound', 'create:refined_radiance', 'create:refined_radiance_casing', 'create:shadow_steel', 'create:shadow_steel_casing'])

	event.add([
		Item.of('ae2:facade', '{item:"minecraft:stone"}'),
		Item.of('enderio:broken_spawner')
	])
})

JEIEvents.information(event => {
	event.addItem('create:refined_radiance', ['A Chromatic material forged from absorbed light.'])
	event.addItem('create:shadow_steel', ['A Chromatic material forged in the void.'])
})
