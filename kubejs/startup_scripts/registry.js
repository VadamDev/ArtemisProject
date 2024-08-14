Platform.mods.kubejs.name = "Artemis: Project"

EnderIOEvents.conduits(event => {
	const transferRates = [
		1280,
		5120,
		20480
	]

	event.registerEnergyConduit("fe_conduit", "Energy Conduit", transferRates[0])
	event.registerEnergyConduit("enhanced_fe_conduit", "Enhanced Energy Conduit", transferRates[1])
	event.registerEnergyConduit("ender_fe_conduit", "Ender Energy Conduit", transferRates[2])
})
