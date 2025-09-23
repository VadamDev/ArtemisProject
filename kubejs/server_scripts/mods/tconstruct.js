//Author: VadamDev

ServerEvents.recipes(event => {
    function removeRecipes() {
        event.remove({id: 'tconstruct:smeltery/seared/grout_multiple'})
        event.remove({id: 'tconstruct:smeltery/seared/grout'})

        event.remove({output: 'tconstruct:smeltery_controller'})

        event.remove({output: 'craftingstation:crafting_station'})
        event.remove({output: 'craftingstation:crafting_station_slab'})
    }

    function addRecipes() {
        //Grout
        event.recipes.createMixing('2x tconstruct:grout', ['minecraft:clay_ball', '#minecraft:sand', 'minecraft:gravel']).heated()
        event.recipes.createMixing('8x tconstruct:grout', ['minecraft:clay', '4x #minecraft:sand', '4x minecraft:gravel']).heated()
        
        //Smeletery Controller
        event.custom({
            "type": "tconstruct:retextured_casting_basin",
            "cast": {
              "tag": "tconstruct:smeltery_bricks"
            },
            "cast_consumed": true,
            "cooling_time": 100,
            "fluid": {
              "amount": 360,
              "tag": "forge:molten_copper"
            },
            "result": "kubejs:smeltery_controller_frame"
        })

        const incompleteSmeltery = "kubejs:incomplete_smeltery_controller"
        event.recipes.createSequencedAssembly(
            'tconstruct:smeltery_controller',
            'kubejs:smeltery_controller_frame',
            [
                event.recipes.createFilling(incompleteSmeltery, [incompleteSmeltery, Fluid.of('minecraft:lava', 1000)]),
                event.recipes.createDeploying(incompleteSmeltery, [incompleteSmeltery, 'mekanism:dust_obsidian']),
                event.recipes.createDeploying(incompleteSmeltery, [incompleteSmeltery, 'minecraft:iron_block']),
                event.recipes.createPressing(incompleteSmeltery, incompleteSmeltery),
                event.recipes.createDeploying(incompleteSmeltery, [incompleteSmeltery, 'minecraft:glass']),
            ]
        ).transitionalItem(incompleteSmeltery).loops(1)

        //Steel Creation
        event.custom({
            "type": "tconstruct:alloy",
            "inputs": [
              {
                "amount": 270,
                "tag": "forge:molten_iron"
              },
              {
                "amount": 2000,
                "tag": "tconstruct:molten_clay"
              }
            ],
            "result": {
              "amount": 180,
              "tag": "tconstruct:molten_steel"
            },
            "temperature": 950
        })

        //Crafting station slab
        event.shapeless('2x craftingstation:crafting_station_slab', [Item.of('tconstruct:crafting_station')])
    }

    removeRecipes()
    addRecipes()
})