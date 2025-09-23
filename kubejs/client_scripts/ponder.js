//Author: VadamDev

Ponder.registry(event => {
	//Seared Melter
	event.create("tconstruct:seared_melter").scene("seared_smelter_ponder", "Seared Smelter", (scene, util) => {
		scene.showStructure()
		scene.idle(10)

		scene.world.setBlock([2, 1, 2], "tconstruct:seared_heater", false)
		scene.world.setBlock([1, 1, 2], "tconstruct:seared_basin", false)
		scene.world.setBlock([2, 2, 2], "tconstruct:seared_melter", false)

		scene.world.setBlock([1, 2, 2], "tconstruct:seared_faucet", false)
		scene.world.modifyBlock([1, 2, 2], (state) => state.with("facing", "west"), false)

		scene.idle(10)

		scene.text(50, "The Seared Smelter is an early game smeltery. It can be used to melt metals", [2.5, 2.5, 2.5]).attachKeyFrame()
		scene.idle(55)

		scene.text(70, "You must provide a Heat source (with a Seared Heater)", [2.5, 1.5, 2.5]).attachKeyFrame()
		scene.showControls(30, [2.5, 1.5, 2.5], "down").rightClick().withItem("minecraft:coal")
		scene.idle(20)
		scene.world.modifyBlock([2, 1, 2], (state) => state.with("active", true), false)
		scene.idle(80)
	})

	//Smeltery
	event.create("tconstruct:smeltery_controller").scene("smeltery_ponder", "Smeltery", (scene, util) => {
		scene.showStructure()
		scene.scaleSceneView(0.9);
		scene.setSceneOffsetY(-1);

		scene.world.setBlocks([0, 1, 0, 5, 1, 5], "minecraft:grass_block", false)
		scene.world.setBlocks([1, 1, 1, 4, 1, 4], "tconstruct:seared_bricks", false)
		scene.world.setBlocks([4, 2, 1, 4, 3, 4], "tconstruct:seared_bricks", false)
		scene.world.setBlocks([4, 2, 4, 1, 3, 4], "tconstruct:seared_bricks", false)

		scene.idle(10)

		scene.world.setBlock([2, 2, 1], "tconstruct:smeltery_controller", false)
		scene.text(60, "The Smeltery Controller must be placed on a side", [2.5, 2.5, 1.5]).attachKeyFrame()
		scene.idle(65)

		scene.world.setBlock([3, 2, 1], "tconstruct:seared_fuel_tank", false)
		scene.text(70, "A heat source must be provided (with a Seared Fluid Tank)", [3.5, 2.5, 1.5]).attachKeyFrame()
		scene.idle(40)

		scene.showControls(20, [3.5, 2.5, 1.5], "down").rightClick().withItem("minecraft:lava_bucket")
		scene.idle(10)
		scene.world.modifyBlockEntityNBT([3, 2, 1], (nbt) => {
			nbt.tank = {
				Amount: 4000,
				FluidName: "minecraft:lava"
			}
        })
		scene.idle(30)

		scene.world.setBlocks([1, 2, 2, 1, 3, 4], "tconstruct:seared_bricks", false)
		scene.world.setBlock([1, 3, 2], "tconstruct:seared_drain", false)
		scene.world.setBlock([0, 2, 2], "tconstruct:seared_table", false)
		scene.world.setBlock([0, 3, 2], "tconstruct:seared_faucet", false)
		scene.world.modifyBlock([0, 3, 2], (state) => state.with("facing", "west"), false)

		scene.text(60, "A Seared Drain can be used to pull the liquified metal out", [1.5, 3.5, 2.5]).attachKeyFrame()
		scene.idle(65)
		scene.text(70, "The liquified metal can be molded in an casting table using a cast", [0.5, 2.5, 2.5]).attachKeyFrame()
		scene.world.modifyBlockEntityNBT([0, 2, 2], (nbt) => {
			nbt.Items = [
				{Count: 1, Slot: 0, id: "tconstruct:ingot_cast"}
			]
        })

		scene.idle(75)

		scene.world.setBlock([3, 3, 1], "tconstruct:seared_bricks", false)
		scene.idle(5)
		scene.world.setBlock([2, 3, 1], "tconstruct:seared_bricks", false)
		scene.idle(5)
		scene.world.setBlock([1, 3, 1], "tconstruct:seared_bricks", false)
		scene.world.setBlock([1, 2, 1], "tconstruct:seared_bricks", false)

		scene.world.modifyBlock([2, 2, 1], (state) => state.with("in_structure", true), false)
	})
})
