//Author VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		/*
		   RFTools
		*/
		
		event.remove({id: 'deepresonance:machine_frame'})
		
		event.remove({id: 'rftoolsbuilder:builder'})
		
		/*
		   RFTools Dim,
		   Endgame stuff
		*/
		
		event.remove({id: 'rftoolsdim:empty_dimension_tab'})
		
		event.remove({id: 'rftoolsdim:dimension_editor'})
		event.remove({id: 'rftoolsdim:enscriber'})
		event.remove({id: 'rftoolsdim:dimension_builder'})
	}

	function addRecipes() {
		//New machine frame recipes that respect modpack progression
		event.replaceInput({id: 'rftoolsbase:machine_frame'}, '#c:iron_ingots', '#forge:ingots/steel')
		
		event.shaped('deepresonance:machine_frame', [
			'IPI',
			'PFP',
			'IPI'
		], {
			I: '#forge:ingots/iron',
			P: 'deepresonance:resonating_plate',
			F: 'rftoolsbase:machine_frame'
		})
		
		//New, harder recipe for the rftools builder
		event.shaped('rftoolsbuilder:builder', [
			'BPB',
			'GFG',
			'BCB'
		], {
			B: 'minecraft:bricks',
			P: 'rftoolsbase:infused_enderpearl',
			G: 'thermal:enderium_gear',
			F: 'rftoolsbase:machine_frame',
			C: 'thermal:upgrade_augment_2'
		})
		
		/*
		  RFTools Dim,
		  Endgame Stuff
		*/
		
		event.shaped('rftoolsdim:empty_dimension_tab', [
			' PC',
			'PSP',
			'CP '
		], {
			P: 'enderio:black_paper',
			C: 'appflux:charged_redstone',
			S: 'ae2:spatial_cell_component_128'
		})
		
		event.shaped('rftoolsdim:dimension_editor', [
			' R ',
			'PFP',
			'UUU'
		], {
			R: 'ae2:wireless_receiver',
			P: 'ae2:fluix_pearl',
			F: 'rftoolsbase:machine_frame',
			U: 'mekanism:pellet_plutonium'
		})
		
		event.shaped('rftoolsdim:enscriber', [
			'PSP',
			'AFA',
			'PCP'
		], {
			P: 'minecraft:paper',
			S: 'megacells:bulk_cell_component',
			A: 'megacells:accumulation_processor',
			F: 'rftoolsbase:machine_frame',
			C: 'mekanism:supercharged_coil'
		})
		
		event.shaped('rftoolsdim:dimension_builder', [
			' S ',
			'CFC',
			'AOA'
		], {
			S: 'extendedcrafting:ultimate_singularity',
			C: 'mekanism:ultimate_control_circuit',
			F: 'rftoolsbase:machine_frame',
			A: 'mekanism:pellet_antimatter',
			O: 'draconicevolution:large_chaos_frag'
		})
	}

	removeRecipes()
	addRecipes()
})
