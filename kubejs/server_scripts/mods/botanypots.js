//Author: VadamDev

ServerEvents.recipes(event => {
	event.forEachRecipe({type: 'botanypots:soil'}, recipe => {
		let json = recipe.json
		if(!json.has('growthModifier'))
			return

		let currentGrowthModifier = json.get('growthModifier').getAsDouble()
		json.addProperty('growthModifier', currentGrowthModifier * 0.1) // 10x
		event.custom(json).id(recipe.getId())
	})
})
