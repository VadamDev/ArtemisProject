JEIEvents.hideItems(event => {
	/*
	  Unify
	*/

	event.hide([
		Item.of('mffs:steel_compound'),

		Item.of('tfmg:steel_helmet'),
		Item.of('tfmg:steel_chestplate'),
		Item.of('tfmg:steel_leggings'),
		Item.of('tfmg:steel_boots'),

		Item.of('tfmg:steel_axe'),
		Item.of('tfmg:steel_hoe'),
		Item.of('tfmg:steel_shovel'),
		Item.of('tfmg:steel_pickaxe'),
		Item.of('tfmg:steel_sword'),

		Item.of('tfmg:sulfur_dust'),
		Item.of('tfmg:bitumen'),
		Item.of('tfmg:coal_coke'),
		Item.of('tfmg:coal_coke_block'),

		Item.of('tfmg:polarizer')
	])

	//Random Tweaks
	event.hide([
		//.ignoreNBT is deprecated now
		Item.of('ae2:facade'),
		Item.of('enderio:filled_soul_vial'),
		Item.of('enderio:broken_spawner')
	])
})

JEIEvents.addItems(event => {
	event.add([
		Item.of('ae2:facade', '{item:"minecraft:stone"}'),
		Item.of('enderio:broken_spawner')
	])
})
