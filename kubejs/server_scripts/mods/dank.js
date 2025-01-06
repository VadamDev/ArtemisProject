//Author VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		/*
		   Danks
		*/
		
		event.remove({id: 'dankstorage:dank_1'})
		event.remove({id: 'dankstorage:dank_2'})
		event.remove({id: 'dankstorage:dank_3'})
		event.remove({id: 'dankstorage:dank_4'})
		event.remove({id: 'dankstorage:dank_5'})
		event.remove({id: 'dankstorage:dank_6'})
		event.remove({id: 'dankstorage:dank_7'})
		
		/*
		   Danks Upgrades
		*/
		
		event.remove({id: 'dankstorage:1_to_2'})
		event.remove({id: 'dankstorage:2_to_3'})
		event.remove({id: 'dankstorage:3_to_4'})
		event.remove({id: 'dankstorage:4_to_5'})
		event.remove({id: 'dankstorage:5_to_6'})
		event.remove({id: 'dankstorage:6_to_7'})
	}

	function addRecipes() {
		/*
		   Danks
		*/
		
		event.shaped('dankstorage:dank_1', [
			'FFF',
			'BCB',
			'FFF'
		], {
			F: 'fluxnetworks:flux_dust',
			B: 'minecraft:barrel',
			C: 'ae2:cell_component_1k'
		})
		
		event.shaped('dankstorage:dank_2', [
			'RRR',
			'CDC',
			'RRR'
		], {
			R: 'minecraft:redstone',
			C: 'ae2:cell_component_4k',
			D: 'dankstorage:dank_1'
		})
		
		event.shaped('dankstorage:dank_3', [
			'FGF',
			'CDC',
			'FGF'
		], {
			F: 'redstone_arsenal:flux_plating',
			G: 'minecraft:gold_nugget',
			C: 'ae2:cell_component_16k',
			D: 'dankstorage:dank_2'
		})
		
		event.shaped('dankstorage:dank_4', [
			'EFE',
			'CDC',
			'EVE'
		], {
			E: 'minecraft:emerald',
			F: 'ae2:fluix_dust',
			C: 'ae2:cell_component_16k',
			D: 'dankstorage:dank_3',
			V: 'ae2:cell_component_4k'
		})
		
		event.shaped('dankstorage:dank_5', [
			'AAA',
			'BDB',
			'FCF'
		], {
			A: 'thermal:diamond_dust',
			B: 'minecraft:diamond_block',
			D: 'dankstorage:dank_4',
			F: 'ae2:fluix_dust',
			C: 'ae2:cell_component_64k'
		})
		
		event.shaped('dankstorage:dank_6', [
			'POP',
			'CDC',
			'POP'
		], {
			P: 'ae2:fluix_pearl',
			O: 'mekanism:dust_refined_obsidian',
			C: 'ae2:cell_component_256k',
			D: 'dankstorage:dank_5'
		})
		
		event.shaped('dankstorage:dank_7', [
			'PSP',
			'DCD',
			'NBN'
		], {
			P: 'megacells:accumulation_processor',
			S: 'ae2:singularity',
			D: 'dankstorage:dank_6',
			C: 'megacells:cell_component_256m',
			N: 'minecraft:nether_star',
			B: 'extendedcrafting:nether_star_block'
		})
		
		/*
		   Danks Upgrades
		*/
		
		event.shaped('dankstorage:1_to_2', [
			'RRR',
			'C C',
			'RRR'
		], {
			R: 'minecraft:redstone',
			C: 'ae2:cell_component_4k'
		})
		
		event.shaped('dankstorage:2_to_3', [
			'FGF',
			'C C',
			'FGF'
		], {
			F: 'redstone_arsenal:flux_plating',
			G: 'minecraft:gold_nugget',
			C: 'ae2:cell_component_16k'
		})
		
		event.shaped('dankstorage:3_to_4', [
			'EFE',
			'C C',
			'EVE'
		], {
			E: 'minecraft:emerald',
			F: 'ae2:fluix_dust',
			C: 'ae2:cell_component_16k',
			V: 'ae2:cell_component_4k'
		})
		
		event.shaped('dankstorage:4_to_5', [
			'AAA',
			'B B',
			'FCF'
		], {
			A: 'thermal:diamond_dust',
			B: 'minecraft:diamond_block',
			F: 'ae2:fluix_dust',
			C: 'ae2:cell_component_64k'
		})
		
		event.shaped('dankstorage:5_to_6', [
			'POP',
			'C C',
			'POP'
		], {
			P: 'ae2:fluix_pearl',
			O: 'mekanism:dust_refined_obsidian',
			C: 'ae2:cell_component_256k'
		})
		
		event.shaped('dankstorage:6_to_7', [
			'PCP',
			'SDS',
			'NBN'
		], {
			P: 'megacells:accumulation_processor',
			C: 'megacells:cell_component_256m',
			S: 'ae2:singularity',
			D: 'dankstorage:dank_6',
			N: 'minecraft:nether_star',
			B: 'extendedcrafting:nether_star_block'
		})
	}

	removeRecipes()
	addRecipes()
})
