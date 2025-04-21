//Author: VadamDev

StartupEvents.registry('item', event => {
	//Fake Singularities
	const createFakeSingularity = (id, name, colors) => {
		event.create(id + '_singularity')
			.textureJson({
				"layer0": "extendedcrafting:item/singularity",
				"layer1": "extendedcrafting:item/singularity_overlay"
			})
			.color(0, colors[1])
			.color(1, colors[0])
			.displayName(name + ' Singularity')
			.rarity('uncommon')
	}

	createFakeSingularity('chaotic', 'Chaotic', ["#552c2c", "#000000"])

	//Wormhole
	event.create('chaotic_wormhole')
		.texture('extendedcrafting:item/singularity_overlay')
		.color(0, "#562a2a")
		.displayName('Chaotic Wormhole')
		.fireResistant(true)
		.rarity('rare')
		.glow(true)

	//Exotic Matter
	event.create('pellet_exoticmatter')
		.texture('kubejs:item/pellet_exoticmatter')
		.displayName('§fExotic Matter Pellet')
		.fireResistant(true)
		.rarity('epic')
		.glow(true)
})

StartupEvents.registry('block', event => {
	const makeCrystallizedFluid = (id, name, texture, color) => {
		event.create(id)
			.opaque(false)
			.noValidSpawns(true)
			.suffocating(false)
			.redstoneConductor(false)
			.displayName(name)
			.hardness(0.3)
			.resistance(0.3)
			.lightLevel(1.0)
			.soundType('glass')
			.textureAll(texture)
			.mapColor(color)
	}

	makeCrystallizedFluid('crystallized_voidic_source', 'Crystallized Voidic Crystal', 'voidscape:block/fluid/voidic/still', 'color_purple')
	makeCrystallizedFluid('crystallized_experience', 'Crystallized Experience', 'create_enchantment_industry:fluid/experience_still', 'emerald')
	makeCrystallizedFluid('crystallized_hyper_experience', 'Crystallized Hyper Experience', 'create_enchantment_industry:fluid/hyper_experience_still', 'lapis')
})

EnderIOEvents.conduits(event => {
	event.registerEnergyConduit("fe_conduit", "Energy Conduit", 1280)
	event.registerEnergyConduit("enhanced_fe_conduit", "Enhanced Energy Conduit", 5120)
	event.registerEnergyConduit("ender_fe_conduit", "Ender Energy Conduit", 20480)
})
