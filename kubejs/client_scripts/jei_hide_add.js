//Author: VadamDev

JEIEvents.hideItems(event => {
	//KubeJS
	event.hide(['kubejs:incomplete_smeltery_controller', 'kubejs:blueskies_portal_mix', 'kubejs:bedrock'])

	//Ad Astra
	event.hide(['ad_astra:coal_generator', 'ad_astra_giselle_addon:gravity_normalizer'])
	
	//Draconic
	event.hide('draconicevolution:generator')
	
	//MFFS
	event.hide('mffs:steel_compound')
	
	//Angel Ring
	event.hide([
		'angelring:diamond_ring', 'angelring:energetic_angel_ring', 'angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring',
		'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring'
	])
	
	//Iron Furnaces
	event.hide(['ironfurnaces:augment_generator', 'ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_plating', 'ironfurnaces:million_furnace', 'ironfurnaces:rainbow_coal'])
	
	//Ender IO
	event.hide(['enderio:primitive_alloy_smelter', 'enderio:energy_conduit', 'enderio:silicon'])

	//Ballistix
	event.hide([
		'ballistix:anvil', 'ballistix:grenadeanvil', 'ballistix:minecartanvil', 'ballistix:rejuvination', 'ballistix:minecartrejuvination',
		'ballistix:darkmatter', 'ballistix:minecartdarkmatter'
	])
	
	//Repetitive Items
	event.hide(['tconstruct:potion_bucket', 'ae2:facade', 'evilcraft:dark_tank', 'enderio:filled_soul_vial', 'enderio:broken_spawner', 'reliquary:mob_charm_fragment'])
	
	//Random Disabled Items
	event.hide([
		'advancedperipherals:rs_bridge',
		'createdeco:netherite_sheet',
		
		'twilightforest:uncrafting_table',
		
		'paraglider:heart_container',
		'paraglider:stamina_vessel',
		'paraglider:spirit_orb',
		'paraglider:anti_vessel',
		'paraglider:essence',

		'createendertransmission:chunk_loader',
		'createendertransmission:item_transmitter',
		'createendertransmission:fluid_transmitter',

		'mae2:4x_crafting_accelerator',

		'craftingstation:crafting_station'
	])
})

JEIEvents.addItems(event => {
	//Add back legacy create magic items
	event.add(['create:chromatic_compound', 'create:refined_radiance', 'create:refined_radiance_casing', 'create:shadow_steel', 'create:shadow_steel_casing'])

	event.add([
		Item.of('ae2:facade', '{item:"minecraft:stone"}'),
		Item.of('enderio:broken_spawner'),
		Item.of('evilcraft:dark_tank')
	])
})

JEIEvents.information(event => {
	event.addItem('create:refined_radiance', ['A Chromatic material forged from absorbed light.'])
	event.addItem('create:shadow_steel', ['A Chromatic material forged in the void.'])
})
