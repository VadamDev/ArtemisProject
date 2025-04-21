//Author: VadamDev

ServerEvents.recipes(event => {
	const quantumCompressorRecipe = (input, count, result) => {
		event.custom({
			"type": "extendedcrafting:compressor",
			"powerCost": 1500000000,
			"inputCount": count,
			"ingredient": {
			  "item": input
			},
			"catalyst": {
			  "item": "extendedcrafting:ultimate_catalyst"
			},
			"result": {
			  "item": result
			}
		})
	}

	quantumCompressorRecipe('draconicevolution:chaos_shard', 128, 'kubejs:chaotic_singularity')
})
