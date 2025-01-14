//Author VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		event.remove({output: 'ad_astra:coal_generator'})
		event.remove({output: 'ad_astra_giselle_addon:gravity_normalizer'})
		
		//Modpack Progression
		
		//Crafting Tables
		event.remove({id: 'ad_astra:nasa_workbench'})
		event.remove({id: 'ad_astra:launch_pad'})
		
		//Rocket Parts
		event.remove({id: 'ad_astra:rocket_fin'})
		event.remove({id: 'ad_astra:rocket_nose_cone'})
		
		//Tanks
		event.remove({id: 'ad_astra:steel_tank'})
		event.remove({id: 'ad_astra:desh_tank'})
		event.remove({id: 'ad_astra:ostrum_tank'})
		event.remove({id: 'ad_astra:calorite_tank'})
		
		//Engines
		event.remove({id: 'ad_astra:engine_frame'})
		
		event.remove({id: 'ad_astra:steel_engine'})
		event.remove({id: 'ad_astra:desh_engine'})
		event.remove({id: 'ad_astra:ostrum_engine'})
		event.remove({id: 'ad_astra:calorite_engine'})
	}

	function addRecipes() {
		//Crafting Tables
		
		//Nasa Workbench
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				" AAAB",
				"ACDEA",
				"AFGHA",
				"AEICA",
				"KAJA "
			],
			"key": {
				"A": { "item": "thermal:steel_plate" },
				"B": { "item": "pneumaticcraft:assembly_laser" },
				"C": { "item": "thermal_extra:dragonsteel_gear" },
				"D": { "item": "pneumaticcraft:printed_circuit_board" },
				"E": { "item": "pneumaticcraft:pneumatic_cylinder" },
				"F": { "item": "ae2:engineering_processor" },
				"G": { "item": "megacells:mega_crafting_monitor" },
				"H": { "item": "mekanism:ultimate_control_circuit" },
				"I": { "item": "pneumaticcraft:programmer"  },
				"K": { "item": "pneumaticcraft:assembly_drill" },
				"J": { "item": "mekanism:block_steel" }
			},
			"result": {
				"item": "ad_astra:nasa_workbench"
			}
		})
		
		//Launch Pad
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"  A A  ",
				"  A AB ",
				" CA A  ",
				" DA AD ",
				" EA AE ",
				"FEGGGEF",
				"HEHIHEH"
			],
			"key": {
				"A": { "item": "tfmg:steel_scaffolding" },
				"B": { "item": "computercraft:wireless_modem_normal" },
				"C": { "item": "tfmg:steel_mechanism" },
				"D": { "item": "pneumaticcraft:safety_tube_module" },
				"E": { "item": "pneumaticcraft:advanced_pressure_tube" },
				"F": { "item": "mekanism:ultimate_control_circuit" },
				"G": { "item": "thermal:steel_plate" },
				"H": { "item": "mekanism:block_steel" },
				"I": { "item": "computercraft:computer_normal" }
			},
			"result": {
				"item": "ad_astra:launch_pad"
			}
		})
		
		//Rocket Parts
		
		//Rocket Fin
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"   A   ",
				"  ABA  ",
				" ACDEA ",
				"AFGHIFA",
				"AJEACJA",
				"AJA AJA",
				"AA   AA"
			],
			"key": {
				"A": { "item": "thermal:steel_plate" },
				"B": { "item": "pneumaticcraft:pneumatic_cylinder" },
				"C": { "item": "tfmg:steel_mechanism" },
				"D": { "item": "pneumaticcraft:printed_circuit_board" },
				"E": { "item": "create:precision_mechanism" },
				"F": { "item": "industrialforegoing:machine_frame_advanced" },
				"G": { "item": "enderio:z_logic_controller" },
				"H": {
					"type": "forge:nbt",
					"item": "industrialforegoing:processing_addon_2",
					"count": 1,
					"nbt": "{TitaniumAugment:{Processing:3.0f}}"
				},
				"I": { "item": "enderio:octadic_capacitor" },
				"J": { "item": "mekanism:block_steel" }
			},
			"result": {
				"item": "2x ad_astra:rocket_fin"
			}
		})
		
		//Rocket Nose Cone
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"  ABA  ",
				"  CDC  ",
				" ECFCE ",
				" CCFCC ",
				" CGHIC ",
				"ECJJJCE",
				"CCCCCCC"
			],
			"key": {
				"A": { "item": "thermal:copper_plate" },
				"B": { "item": "minecraft:lightning_rod" },
				"C": { "item": "mekanism:block_steel" },
				"D": { "item": "ad_astra:cable_duct" },
				"E": { "item": "thermal:steel_plate" },
				"F": { "item": "ad_astra:steel_cable" },
				"G": { "item": "thermal:upgrade_augment_3" },
				"H": { "item": "computercraft:computer_advanced" },
				"I": { "item": "thermal:redstone_servo" },
				"J": { "item": "thermal:blizz_powder"  }
			},
			"result": {
				"item": "ad_astra:rocket_nose_cone"
			}
		})
		
		//Tanks
		
		//Steel Tank
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"AAA  ",
				"ABC  ",
				"ADEF ",
				"ABC  ",
				"AAA  "
			],
			"key": {
				"A": { "item": "thermal:steel_plate" },
				"B": { "item": "mekanism:elite_control_circuit" },
				"C": { "item": "pneumaticcraft:advanced_pressure_tube" },
				"D": { "item": "mekanism:ultimate_chemical_tank"  },
				"E": { "item": "ad_astra:large_gas_tank" },
				"F": { "item": "ad_astra:steel_rod" }
			},
			"result": {
				"item": "ad_astra:steel_tank"
			}
		})
		
		//Desh Tank
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"AAA  ",
				"ABC  ",
				"ADEF ",
				"ABC  ",
				"AAA  "
			],
			"key": {
				"A": { "item": "ad_astra:desh_plate" },
				"B": { "item": "mekanism:ultimate_control_circuit" },
				"C": { "item": "ad_astra:steel_tank" },
				"D": { 
					"type": "forge:nbt",
					"item": "thermal:fluid_cell",
					"count": 1,
					"nbt": "{BlockEntityTag:{TankInv:[{Amount:0,Capacity:32000,FluidName:\"minecraft:empty\",Tank:0b}]}}"
				},
				"E": { "item": "enderio:vibrant_crystal" },
				"F": { "item": "ad_astra:steel_rod" }
			},
			"result": {
				"item": "ad_astra:desh_tank"
			}
		})
		
		//Ostrum Tank
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"AAA  ",
				"ABC  ",
				"ADEF ",
				"ABC  ",
				"AAA  "
			],
			"key": {
				"A": { "item": "ad_astra:ostrum_plate" },
				"B": { "item": "megacells:accumulation_processor" },
				"C": { "item": "ad_astra:desh_tank" },
				"D": { "item": "industrialforegoing:machine_frame_advanced" },
				"E": { "item": "ae2:spatial_cell_component_128" },
				"F": { "item": "ad_astra:steel_rod" }
			},
			"result": {
				"item": "ad_astra:ostrum_tank"
			}
		})
		
		//Calorite Tank
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"AAAA   ",
				"ABCD   ",
				"AEBFG  ",
				"AHID   ",
				"AEBF   ",
				"ABCDG  ",
				"AAAA   "
			],
			"key": {
				"A": { "item": "ad_astra:calorite_plate" },
				"B": { "item": "mekanism:pellet_antimatter" },
				"C": { "item": "mekanism:pellet_plutonium" },
				"D": { "item": "ad_astra:calorite_block" },
				"E": { "item": "extendedcrafting:crystaltine_block" },
				"F": { "item": "ad_astra:ostrum_tank" },
				"G": { "item": "ad_astra:steel_rod" },
				"H": {
					"type": "forge:nbt",
					"item": "extendedcrafting:singularity",
					"count": 1,
					"nbt": "{Id:\"extendedcrafting:redstone\"}"
				},
				"I": {  "item": "megacells:bulk_cell_component" }
			},
			"result": {
				"item": "ad_astra:calorite_tank"
			}
		})
		
		//Engines
		
		//Engine Frame
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"AABBBBBAA",
				"ACD    CA",
				"BDCEEEC B",
				"B ECFCE B",
				"B EGHGE B",
				"B ECICE B",
				"B CEEECDB",
				"AC    DCA",
				"AABBBBBAA"
			],
			"key": {
				"A": { "item": "mekanism:block_steel" },
				"B": { "item": "thermal:steel_plate" },
				"C": { "item": "ad_astra:steel_rod" },
				"D": { "item": "thermal:signalum_gear" },
				"E": { "item": "mekanism:dust_lithium" },
				"F": { "item": "rftoolscontrol:cpu_core_2000" },
				"G": { "item": "mekanism:ultimate_chemical_tank" },
				"H": { "item": "industrialforegoing:machine_frame_supreme" },
				"I": { "item": "rftoolscontrol:ram_chip" }
			},
			"result": {
				"item": "ad_astra:engine_frame"
			}
		})
		
		//Steel Engine
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"ABCDCBA",
				" ABEBA ",
				" ABEBA ",
				"AFGHGIA",
				"AGJKJGA",
				"ALGMGLA",
				" AGNGA "
			],
			"key": {
				"A": { "item": "thermal:steel_plate" },
				"B": { "item": "mekanism:block_steel" },
				"C": { "item": "industrialforegoing:plastic" },
				"D": { "item": "ad_astra:cable_duct" },
				"E": { "item": "ad_astra:steel_cable" },
				"F": { "item": "megacells:accumulation_processor" },
				"G": { "item": "pneumaticcraft:advanced_pressure_tube" },
				"H": { "item": "ad_astra:engine_frame" },
				"I": { "item": "appflux:energy_processor" },
				"J": { "item": "industrialforegoing:pink_slime_ingot" },
				"K": { "item": "pneumaticcraft:programmable_controller" },
				"L": { "item": "thermal:upgrade_augment_3" },
				"M": { "item": "pneumaticcraft:turbine_rotor" },
				"N": { "item": "ad_astra:fan" }
			},
			"result": {
				"item": "ad_astra:steel_engine"
			}
		})
		
		//Desh Engine
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"ABCDCBA",
				" ABEBA ",
				" AFEFA ",
				"AFGHGFA",
				"AIJKLIA",
				"AFMAMFA",
				" AN NA "
			],
			"key": {
				"A": { "item": "ad_astra:desh_plate" },
				"B": { "item": "ad_astra:desh_block" },
				"C": { "item": "industrialforegoing:plastic" },
				"D": { "item": "ad_astra:cable_duct" },
				"E": { "item": "ad_astra:steel_cable" },
				"F": { "item": "mekanism:alloy_reinforced" },
				"G": { "item": "tfmg:resistor" },
				"H": { "item": "mekanism:ultimate_energy_cube" },
				"I": { "item": "draconicevolution:draconium_core" },
				"J": { "item": "thermal_extra:upgrade_augment" },
				"K": { "item": "mekanism:isotopic_centrifuge" },
				"L": { "item": "ae2:logic_processor" },
				"M": { "item": "ad_astra:steel_engine" },
				"N": { "item": "ad_astra:fan" }
			},
			"result": {
				"item": "ad_astra:desh_engine"
			}
		})
		
		//Ostrum Engine
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"ABCDCBA",
				" ABEBA ",
				" AFGFA ",
				"AFHIHFA",
				"AJKLKJA",
				"AFAMAFA",
				" A N A "
			],
			"key": {
				"A": { "item": "ad_astra:ostrum_plate" },
				"B": { "item": "ad_astra:ostrum_block" },
				"C": { "item": "mekanism:hdpe_sheet" },
				"D": { "item": "ad_astra:cable_duct" },
				"E": { "item": "ad_astra:desh_cable" },
				"F": { "item": "mekanism:alloy_atomic" },
				"G": {
					"type": "forge:nbt",
					"item": "extendedcrafting:singularity",
					"count": 1,
					"nbt": "{Id:\"extendedcrafting:redstone\"}"
				},
				"H": { "item": "mekanism:advanced_induction_provider" },
				"I": { "item": "mekanism:elite_induction_cell" },
				"J": { "item": "draconicevolution:wyvern_core" },
				"K": { "item": "mekanism:pellet_antimatter" },
				"L": {
					"type": "forge:nbt",
					"item": "extendedcrafting:singularity",
					"count": 1,
					"nbt": "{Id:\"extendedcrafting:electrum\"}"
				},
				"M": { "item": "ad_astra:desh_engine" },
				"N": { "item": "ad_astra:fan" }
			},
			"result": {
				"item": "ad_astra:ostrum_engine"
			}
		})
		
		//Calorite Engine
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
				"ABBCDCBBA",
				" ABBEBBA ",
				" AFGEGFA ",
				"AHGIJIGHA",
				"AKLJMJLKA",
				"AHNIJINHA",
				" AOPQPOA ",
				" ARSSSRA ",
				"  ATTTA  "
			],
			"key": {
				"A": {  "item": "ad_astra:calorite_plate" },
				"B": { "item": "ad_astra:calorite_block" },
				"C": { "item": "mekanism:hdpe_sheet" },
				"D": { "item": "ad_astra:cable_duct" },
				"E": { "item": "ad_astra:desh_cable" },
				"F": { "item": "megacells:accumulation_processor" },
				"G": { "item": "mekanism:pellet_antimatter" },
				"H": { "item": "draconicevolution:awakened_core" },
				"I": { "item": "mekanism:ultimate_induction_provider" },
				"J": { "item": "mekanism:ultimate_induction_cell" },
				"K": { "item": "mythicbotany:alfsteel_block" },
				"L": { "item": "electrodynamics:platehslasteel" },
				"M": { "item": "mekanism:module_gravitational_modulating_unit" },
				"N": { "item": "kubejs:pellet_exoticmatter" },
				"O": { "item": "electrodynamics:ingothslasteel" },
				"P": { "item": "extendedcrafting:ultimate_singularity" },
				"Q": { "item": "draconicevolution:reactor_core" },
				"R": { "item": "nuclearscience:lifthf4uf4" },
				"S": { "item": "ad_astra:ostrum_engine" },
				"T": { "item": "ad_astra:fan" }
			},
			"result": {
				"item": "ad_astra:calorite_engine"
			}
		})
		
		//Globes
		event.shaped('ad_astra:mars_globe', [
			'M',
			'G',
			'A'
		], {
			M: 'ad_astra:mars_stone',
			G: 'ad_astra:moon_globe',
			A: 'rats:oratchalcum_ingot'
		})
		
		event.shaped('ad_astra:mercury_globe', [
			'M',
			'G',
			'A'
		], {
			M: 'ad_astra:mercury_stone',
			G: 'ad_astra:mars_globe',
			A: 'twilightforest:fiery_ingot'
		})
		
		event.shaped('ad_astra:venus_globe', [
			'M',
			'G',
			'A'
		], {
			M: 'ad_astra:venus_stone',
			G: 'ad_astra:mars_globe',
			A: 'cataclysm:ignitium_ingot'
		})
		
		event.shaped('ad_astra:glacio_globe', [
			'M',
			'G',
			'A'
		], {
			M: 'ad_astra:glacio_stone',
			G: 'ad_astra:venus_globe',
			A: 'mythicbotany:alfsteel_ingot'
		})
	}

	removeRecipes()
	addRecipes()
})
