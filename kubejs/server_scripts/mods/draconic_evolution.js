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
		
		/*
		   Dust Crushing
		*/
		
		event.custom({
			type: 'create:crushing',
        	ingredients: [{item: 'draconicevolution:draconium_ingot'}],
        	processingTime: 300,
        	results: [{item: 'draconicevolution:draconium_dust'}]
		})
		
		event.custom({
			type: 'create:crushing',
			ingredients: [{item: 'draconicevolution:awakened_draconium_ingot'}],
			processingTime: 300,
			results: [{item: 'draconicevolution:awakened_draconium_dust'}]
		})
		
		event.custom({
			type: 'thermal:pulverizer',
			ingredient: {item: 'draconicevolution:draconium_ingot'},
			result: [{item: 'draconicevolution:draconium_dust'}],
			experience: 0.1
		})
		
		event.custom({
			type: 'thermal:pulverizer',
			ingredient: {item: 'draconicevolution:awakened_draconium_ingot'},
			result: [{item: 'draconicevolution:awakened_draconium_dust'}],
			experience: 0.1
		})
		
		event.custom({
			type: 'mekanism:crushing',
        	input: {ingredient: {item: 'draconicevolution:draconium_ingot'}},
			output: {item: 'draconicevolution:draconium_dust'}
		})
		
		event.custom({
			type: 'mekanism:crushing',
			input: {ingredient: {item: 'draconicevolution:awakened_draconium_ingot'}},
			output: {item: 'draconicevolution:awakened_draconium_dust'}
		})
	}

	removeRecipes()
	addRecipes()
})
