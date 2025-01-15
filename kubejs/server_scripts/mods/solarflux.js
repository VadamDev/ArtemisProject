//Author: VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		event.remove({output: 'solarflux:mirror'})
	}

	function addRecipes() {
		event.shaped('3x solarflux:mirror', [
			'GGG',
			'SSS'
		], {
			G: '#forge:glass',
			S: 'thermal:silver_ingot'
		})
		
		event.shaped('solarflux:photovoltaic_cell_1', [
			'LLL',
			'MMM',
			'RRR'
		], {
			L: 'minecraft:lapis_lazuli',
			M: 'solarflux:mirror',
			R: 'create:polished_rose_quartz'
		})
		
		event.shaped('solarflux:photovoltaic_cell_2', [
			'LLL',
			'MCM',
			'PPP'
		], {
			L: 'minecraft:lapis_lazuli',
			M: 'solarflux:mirror',
			C: 'solarflux:photovoltaic_cell_1',
			P: 'thermal:electrum_plate'
		})
		
		event.shaped('solarflux:photovoltaic_cell_3', [
			'LLL',
			'CSC',
			'GGG'
		], {
			L: '#forge:glass',
			C: 'solarflux:photovoltaic_cell_2',
			S: 'create:sturdy_sheet',
			G: 'minecraft:glowstone_dust'
		})
		
		event.shaped('solarflux:sp_2', [
			'SSS',
			'SMS',
			'SSS'
		], {
			S: 'solarflux:sp_1',
			M: 'thermal:rf_coil'
		})
	}

	removeRecipes()
	addRecipes()
})
