//Author: VadamDev

ServerEvents.recipes(event => {
	function removeRecipes() {
        
	}

	function addRecipes() {
        //Villager Workstation
		event.shaped('pointblank:workstation', [
			'SSS',
			' M ',
			'MCM'
		], {
		    S: 'minecraft:smooth_stone_slab',
		    M: 'pointblank:gunmetal_ingot',
		    C: 'pointblank:processor'
		})

        const ammoRecipe = (count, output, shape) => {
            event.shaped(count + 'x pointblank:' + output, shape, { C: 'minecraft:copper_ingot', G: 'minecraft:gunpowder' }).noMirror()
        }

        //1 Copper
        ammoRecipe(19, 'ammo9mm', [
            ' CG'
        ])

        ammoRecipe(19, 'ammo45acp', [
            ' C ',
            '  G'
        ])

        ammoRecipe(19, 'ammo57', [
            ' C ',
            ' G '
        ])

        ammoRecipe(19, 'ammo357', [
            ' C ',
            'G  '
        ])

        ammoRecipe(19, 'ammo50ae', [
            'GC '
        ])

        ammoRecipe(19, 'ammo46', [
            'G  ',
            ' C '
        ])

        //2 Copper
        ammoRecipe(17, 'ammo545', [
            'CC ',
            ' G '
        ])

        ammoRecipe(17, 'ammo556', [
            ' CC',
            ' G '
        ])

        ammoRecipe(17, 'ammo68', [
            '  C',
            ' GC'
        ])

        ammoRecipe(17, 'ammo762', [
            ' GC',
            '  C'
        ])

        ammoRecipe(10, 'ammo12gauge', [
            ' G ',
            ' CC'
        ])

        //3 Copper
        ammoRecipe(16, 'ammo762x51', [
            ' CC',
            ' GC'
        ])

        ammoRecipe(10, 'ammo338lapua', [
            'CG ',
            'CC '
        ])

        //4 Copper
        ammoRecipe(8, 'ammo50bmg', [
            'CCC',
            'GC '
        ])

        //Laser Charge
        event.shaped('5x pointblank:ammolasercharge', [
            '  C',
            'RRR',
            ' IC'
        ], {
            C: 'minecraft:copper_ingot',
            R: 'minecraft:redstone',
            I: 'minecraft:iron_ingot'
        })

        //Grenades
        event.shaped('pointblank:grenade20mm', [
            'CIT'
        ], {
            C: 'minecraft:copper_ingot',
            I: 'minecraft:iron_ingot',
            T: 'minecraft:tnt'
        })

        event.shaped('pointblank:grenade40mm', [
            'TIC'
        ], {
            T: 'minecraft:tnt',
            I: 'minecraft:iron_ingot',
            C: 'minecraft:copper_ingot'
        })

        event.shaped('pointblank:grenade', [
            ' M ',
            'MTM',
            ' M '
        ], {
            T: 'minecraft:tnt',
            M: 'pointblank:gunmetal_nugget'
        })
	}

	removeRecipes()
	addRecipes()
})
