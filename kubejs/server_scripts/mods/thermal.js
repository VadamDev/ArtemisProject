//Author: VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
    //Thermal Machine Frame
    event.remove({id: 'thermal:machine_frame'})
	}

	function addRecipes() {
		//Thermal Machine Frame
		event.shaped('thermal:machine_frame', [
			'IGI',
			'GTG',
			'SGS'
		], {
		    I: '#forge:ingots/iron',
		    G: '#forge:glass',
		    T: '#forge:gears/tin',
			S: '#forge:ingots/steel'
		})

    //Modded Fluid Crystallizing
    const crystallizeFluidRecipe = (fluid, cost, result) => {
        event.custom({
            "type": "thermal:chiller",
            "ingredient": {
              "fluid": fluid,
              "amount": cost
            },
            "result": [
              {
                "item": result
              }
            ],
            "energy": 60000
        })
    
        event.custom({
            "type": "thermal:crucible",
            "ingredient": {
              "item": result
            },
            "result": [
              {
                "fluid": fluid,
                "amount": cost
              }
            ],
            "energy": 40000
        })
    }

    crystallizeFluidRecipe("voidscape:voidic_source", 1000, "kubejs:crystallized_voidic_source")
    crystallizeFluidRecipe("create_enchantment_industry:experience", 50, "kubejs:crystallized_experience")
    crystallizeFluidRecipe("create_enchantment_industry:hyper_experience", 50, "kubejs:crystallized_hyper_experience")
	}

	removeRecipes()
	addRecipes()
})
