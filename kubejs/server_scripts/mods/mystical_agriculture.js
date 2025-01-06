//Author VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		event.remove({output: 'mysticalagriculture:infusion_altar'})
		event.remove({output: 'mysticalagriculture:infusion_pedestal'})
	}

	function addRecipes() {
		event.shaped('2x mysticalagriculture:infusion_pedestal', [
			'AWA',
			' S ',
			' S '
		], {
			A: 'mythicbotany:alfsteel_nugget',
			W: 'minecraft:red_wool',
			S: 'minecraft:stone'
		})
		
		event.shaped('mysticalagriculture:infusion_altar', [
			'GWG',
			' S ',
			'STS'
		], {
			G: 'minecraft:gold_ingot',
			W: 'minecraft:red_wool',
			S: 'minecraft:stone',
			T: 'botania:terrasteel_ingot'
		})
	}

	removeRecipes()
	addRecipes()
})
