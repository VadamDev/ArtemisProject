StartupEvents.registry('item', event => {
	event.create('pellet_exoticmatter').texture('kubejs:item/pellet_exoticmatter').displayName('§fExotic Matter Pellet').fireResistant(true).rarity('epic').glow(true)
})

EnderIOEvents.conduits(event => {
	event.registerEnergyConduit("fe_conduit", "Energy Conduit", 1280)
	event.registerEnergyConduit("enhanced_fe_conduit", "Enhanced Energy Conduit", 5120)
	event.registerEnergyConduit("ender_fe_conduit", "Ender Energy Conduit", 20480)
})
