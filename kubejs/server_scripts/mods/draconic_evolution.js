//Author VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		//No DE generator
		event.remove({id: 'draconicevolution:machines/generator'})
		
		//Remove draconium core recipe
		event.remove({id: 'draconicevolution:components/draconium_core'})	
	}

	function addRecipes() {
		//New draconium core recipe, working with bloodmagic
		event.shaped('3x draconicevolution:draconium_core', [
			'GDG',
			'DHD',
			'GDG'
		], {
			G: '#forge:ingots/gold',
			D: 'draconicevolution:draconium_ingot',
			H: 'bloodmagic:ingot_hellforged'
		})
	}

	removeRecipes()
	addRecipes()
})
