JEIEvents.hideItems(event => {
	//TFMG
	event.hide(['tfmg:steel_helmet', 'tfmg:steel_chestplate', 'tfmg:steel_leggings', 'tfmg:steel_boots'])
	event.hide(['tfmg:steel_axe', 'tfmg:steel_hoe', 'tfmg:steel_shovel', 'tfmg:steel_pickaxe', 'tfmg:steel_sword'])
	
	event.hide(['tfmg:sulfur_dust', 'tfmg:bitumen', 'tfmg:coal_coke', 'tfmg:coal_coke_block'])
	
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
	
	//Disabled Items
	event.hide([
		'advancedperipherals:rs_bridge',
		'tinyredstone:silicon',
		'tinyredstone:silicon_compound',
		
		'twilightforest:uncrafting_table',
		
		'paraglider:heart_container',
		'paraglider:stamina_vessel',
		'paraglider:spirit_orb',
		'paraglider:anti_vessel',
		'paraglider:essence'
	])
})

JEIEvents.addItems(event => {
	event.add([
		Item.of('ae2:facade', '{item:"minecraft:stone"}'),
		Item.of('enderio:broken_spawner')
	])
})
