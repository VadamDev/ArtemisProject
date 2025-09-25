//Author: VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
		//Anvil TNT
		event.remove({output: 'ballistix:anvil'})
		event.remove({output: 'ballistix:grenadeanvil'})
		event.remove({output: 'ballistix:minecartanvil'})

		//Rejuvination
		event.remove({output: 'ballistix:rejuvination'})
		event.remove({output: 'ballistix:minecartrejuvination'})

		//Antimatter
		event.remove({output: 'ballistix:antimatter'})

		//Large Antimatter
		event.remove({output: 'ballistix:largeantimatter'})

		//Dark Matter
		event.remove({output: 'ballistix:darkmatter'})
		event.remove({output: 'ballistix:minecartdarkmatter'})

		//Missiles
		event.remove({output: 'ballistix:missiletier1'})
	}

	function addRecipes() {
		/*
		  Machines
		*/

		//Control Panels
		event.replaceInput({output: 'ballistix:launchercontrolpaneltier1'}, 'minecraft:redstone', 'mekanism:basic_control_circuit')
		event.replaceInput({output: 'ballistix:launchercontrolpaneltier2'}, 'minecraft:gold_ingot', 'mekanism:advanced_control_circuit')
		event.replaceInput({output: 'ballistix:launchercontrolpaneltier3'}, 'minecraft:diamond', 'mekanism:elite_control_circuit')

		//Support Frame
		event.replaceInput({output: 'ballistix:launchersupportframetier3'}, 'minecraft:iron_ingot', '#forge:plates/steel')

		//Launch Platforms
		event.replaceInput({output: 'ballistix:launcherplatformtier1'}, 'minecraft:redstone', 'mekanism:basic_control_circuit')
		event.replaceInput({output: 'ballistix:launcherplatformtier2'}, 'minecraft:copper_ingot', 'mekanism:advanced_control_circuit')
		event.replaceInput({output: 'ballistix:launcherplatformtier3'}, 'minecraft:diamond', 'mekanism:elite_control_circuit')
		event.replaceInput({output: 'ballistix:launcherplatformtier3'}, 'minecraft:iron_ingot', '#forge:plates/steel')

		//Vertical Launch Silo
		event.replaceInput({output: 'ballistix:vls'}, 'minecraft:iron_ingot', '#forge:plates/steel')
		event.replaceInput({output: 'ballistix:vls'}, 'minecraft:redstone', 'mekanism:advanced_control_circuit')

		//Search Radar
		event.replaceInput({output: 'ballistix:radar'}, 'minecraft:redstone', 'mekanism:basic_control_circuit')

		//Fire Control Radar
		event.replaceInput({output: 'ballistix:firecontrolradar'}, 'minecraft:gold_ingot', 'mekanism:advanced_control_circuit')
		event.replaceInput({output: 'ballistix:firecontrolradar'}, 'minecraft:iron_ingot', '#forge:plates/steel')

		//ESM Tower
		event.replaceInput({output: 'ballistix:esmtower'}, 'minecraft:iron_block', 'mekanism:elite_control_circuit')

		//SAM Turret
		event.replaceInput({output: 'ballistix:samturret'}, 'minecraft:iron_ingot', '#forge:plates/steel')
		event.replaceInput({output: 'ballistix:samturret'}, 'minecraft:copper_ingot', 'mekanism:basic_control_circuit')

		//CIWS Turret
		event.replaceInput({output: 'ballistix:ciwsturret'}, 'minecraft:iron_ingot', '#forge:plates/steel')
		event.replaceInput({output: 'ballistix:ciwsturret'}, 'minecraft:copper_ingot', 'mekanism:basic_control_circuit')

		//Laser Turret
		event.replaceInput({output: 'ballistix:laserturret'}, 'minecraft:iron_ingot', '#forge:plates/steel')
		event.replaceInput({output: 'ballistix:laserturret'}, 'minecraft:copper_ingot', 'mekanism:basic_control_circuit')

		//Railgun Turret
		event.replaceInput({output: 'ballistix:railgunturret'}, 'minecraft:iron_ingot', '#forge:plates/steel')
		event.replaceInput({output: 'ballistix:railgunturret'}, 'minecraft:diamond', 'mekanism:elite_control_circuit')

		//Proximity Detector
		event.replaceInput({output: 'ballistix:proximitydetector'}, 'minecraft:iron_ingot', '#forge:plates/steel')
		event.replaceInput({output: 'ballistix:proximitydetector'}, 'minecraft:redstone', 'mekanism:basic_control_circuit')

		//Air Raid Siren
		event.replaceInput({output: 'ballistix:airraidsiren'}, 'minecraft:iron_ingot', '#forge:plates/steel')

		/*
		  Explosives
		*/

		//Incendiary
		event.replaceInput({output: 'ballistix:incendiary'}, 'minecraft:flint_and_steel', '#forge:dusts/sulfur')

		//Debilitation
		event.replaceInput({output: 'ballistix:debilitation'}, 'minecraft:spider_eye', '#forge:dusts/sulfur')

		//EMP
		event.replaceInput({output: 'ballistix:emp'}, 'minecraft:copper_ingot', 'mekanism:energy_tablet')

		//Nuclear
		event.replaceInput({output: 'ballistix:nuclear'}, 'minecraft:redstone', 'mekanism:elite_control_circuit')
		event.replaceInput({output: 'ballistix:nuclear'}, 'minecraft:netherite_scrap', 'mekanism:reprocessed_fissile_fragment')

		//Antimatter
		event.shaped('ballistix:antimatter', [
			'CAC',
			'ANA',
			'CAC'
		], {
			C: 'mekanism:ultimate_control_circuit',
			A: 'mekanism:pellet_antimatter',
			N: 'ballistix:nuclear'
		})

		//Large Antimatter
		event.shaped('ballistix:largeantimatter', [
			' A ',
			'NCN',
			' A '
		], {
			A: 'ballistix:antimatter',
			C: 'mekanism_extras:supreme_control_circuit',
			N: 'ballistix:nuclear'
		})
		
		//Missiles
		event.shaped('ballistix:missiletier1', [
			' P ',
			'SCS',
			'SGS'
		], {
			P: '#forge:plates/steel',
			S: '#forge:ingots/steel',
			C: 'mekanism:basic_control_circuit',
			G: 'minecraft:gunpowder'
		})

		event.replaceInput({output: 'ballistix:missiletier2'}, 'minecraft:gold_ingot', 'mekanism:advanced_control_circuit')
		event.replaceInput({output: 'ballistix:missiletier2'}, 'minecraft:iron_ingot', '#forge:plates/steel')

		event.replaceInput({output: 'ballistix:missiletier3'}, 'minecraft:diamond', 'mekanism:elite_control_circuit')
		event.replaceInput({output: 'ballistix:missiletier3'}, 'minecraft:iron_ingot', '#forge:plates/steel')

		event.replaceInput({output: 'ballistix:aamissile'}, 'minecraft:gold_ingot', 'mekanism:advanced_control_circuit')
		event.replaceInput({output: 'ballistix:aamissile'}, 'minecraft:iron_ingot', '#forge:plates/steel')

		event.replaceInput({output: 'ballistix:aamissilemk2'}, 'minecraft:diamond', 'mekanism:elite_control_circuit')
		event.replaceInput({output: 'ballistix:aamissilemk2'}, 'minecraft:iron_ingot', '#forge:plates/steel')

		/*
		  Misc
		*/

		//Bullet
		event.replaceInput({output: 'ballistix:bullet'}, 'minecraft:copper_ingot', '#forge:plates/bronze')

		//Rocket Launcher
		event.replaceInput({output: 'ballistix:rocketlauncher'}, 'minecraft:gold_ingot', 'mekanism_extras:absolute_control_circuit')

		//Radar Gun
		const poweredRadarGun = Item.of('ballistix:radargun', '{joules:1666666,maximumcapacity:1666666.0d}')

		event.replaceInput({output: 'ballistix:radargun'}, 'minecraft:redstone', 'mekanism:basic_control_circuit')
		event.replaceInput({output: 'ballistix:radargun'}, 'minecraft:diamond', 'mekanism:energy_tablet')
		event.replaceOutput({output: 'ballistix:radargun'}, 'ballistix:radargun', poweredRadarGun)

		event.shapeless(poweredRadarGun, [Item.of('ballistix:radargun')])

		//Tracker
		const poweredTracker = Item.of('ballistix:tracker', '{joules:1666666,maximumcapacity:1666666.0d}')

		event.replaceInput({output: 'ballistix:tracker'}, 'minecraft:iron_ingot', '#forge:plates/steel')
		event.replaceInput({output: 'ballistix:tracker'}, 'minecraft:diamond', 'mekanism:energy_tablet')
		event.replaceInput({output: 'ballistix:tracker'}, 'minecraft:gold_ingot', 'mekanism:advanced_control_circuit')
		event.replaceOutput({output: 'ballistix:tracker'}, 'ballistix:tracker', poweredTracker)

		event.shapeless(poweredTracker, [Item.of('ballistix:tracker')])

		//Jammer
		const poweredJammer = Item.of('ballistix:scanner', '{joules:1666666,maximumcapacity:1666666.0d}')

		event.replaceInput({output: 'ballistix:scanner'}, 'minecraft:diamond', 'mekanism:energy_tablet')
		event.replaceOutput({output: 'ballistix:scanner'}, 'ballistix:scanner', poweredJammer)

		event.shapeless(poweredJammer, [Item.of('ballistix:scanner')])

		//Laser Designator
		const poweredLaserDesignator = Item.of('ballistix:laserdesignator', '{joules:1666666,maximumcapacity:1666666.0d}')

		event.replaceInput({output: 'ballistix:laserdesignator'}, 'minecraft:gold_ingot', 'mekanism:elite_control_circuit')
		event.replaceInput({output: 'ballistix:laserdesignator'}, 'minecraft:diamond', 'mekanism:energy_tablet')
		event.replaceOutput({output: 'ballistix:laserdesignator'}, 'ballistix:laserdesignator', poweredLaserDesignator)

		event.shapeless(poweredLaserDesignator, [Item.of('ballistix:laserdesignator')])

		//Defuser
		const poweredDefuser = Item.of('ballistix:defuser', '{joules:1666666,maximumcapacity:1666666.0d}')

		event.replaceInput({output: 'ballistix:defuser'}, 'minecraft:diamond', 'mekanism:energy_tablet')
		event.replaceInput({output: 'ballistix:defuser'}, 'minecraft:redstone', 'mekanism:basic_control_circuit')
		event.replaceOutput({output: 'ballistix:defuser'}, 'ballistix:defuser', poweredDefuser)

		event.shapeless(poweredDefuser, [Item.of('ballistix:defuser')])

		/*
		  Replacing iron by steel, done after recipes changes since some recipes use iron ingots to replace steel plates
		*/

		event.replaceInput({mod: 'ballistix'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
		event.replaceInput({mod: 'ballistix'}, 'minecraft:iron_bars', '#forge:plates/steel')
		event.replaceInput({mod: 'ballistix'}, 'minecraft:redstone_block', 'mekanism:steel_casing')
	}

	removeRecipes()
	addRecipes()
})
