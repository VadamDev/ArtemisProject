//Author: VadamDev

ItemEvents.tooltip(event => {
	const addTooltip = (itemId, lineIndex, text, append, shouldShift) => insertLine(event, itemId, lineIndex, text, append, shouldShift);
	
	//MGU Eggs infos
	addTooltip('mob_grinding_utils:rotten_egg', 3, Text.of('Created from Cursed Chicken Feed').yellow().underlined(true))
	addTooltip('mob_grinding_utils:golden_egg', 3, Text.of('Created from Nutritious Chicken Feed').yellow().underlined(true))
	
	//AE Infinity Boosters infos
	addTooltip('aeinfinitybooster:infinity_card', 1, Text.of('Infinite range for AE2 wireless terminals').gray(), true)
	addTooltip('aeinfinitybooster:infinity_card', 2, Text.of('Only works in the same dimension !').gray().italic().underlined(true), true)
	
	addTooltip('aeinfinitybooster:dimension_card', 1, Text.of('Infinite range for AE2 wireless terminals').gray(), true)
	addTooltip('aeinfinitybooster:dimension_card', 2, Text.of('Works across dimensions !').gray().italic().underlined(true), true)
	
	//Paraglider statues
	event.add(
		['paraglider:goddess_statue', 'paraglider:kakariko_goddess_statue', 'paraglider:goron_goddess_statue', 'paraglider:rito_goddess_statue', 'paraglider:horned_statue'],
		['', Text.of('Decoration Only').red().italic().underlined(true), '']
	)
	
	//BHC
	addTooltip('bhc:red_heart', 1, Text.of('Dropped by hostile mobs').italic().red(), true)
	addTooltip('bhc:yellow_heart', 1, Text.of('Dropped by bosses').italic().yellow(), true)
	addTooltip('bhc:green_heart', 1, Text.of('Dropped by the Ender Dragon').italic().green(), true)
	addTooltip('bhc:blue_heart', 1, Text.of('Dropped by Wardens').italic().blue(), true)

	//TFMG
	event.add('tfmg:rotor', ['', '§c§nUse it to make the alternator from Create Craft & Additions', ''])
	event.add('tfmg:stator', ['', '§c§nUses them to make the alternator from Create Craft & Additions', ''])

	//Create Additions
	event.add('createaddition:connector', ['', '§c2048 FE/t', ''])
	event.add('createaddition:large_connector', ['', '§c8192 FE/t', ''])
	event.add('createaddition:modular_accumulator', ['', '§7Capacity: 1M FE per block', '§7Max Size: 5x5x7', ''])

	//Create
	event.add('create:chromatic_compound', ['', '§fA material used to create §7Shadow Steel §fand §7Refined Radiance§f.', ''])
	event.add('create:refined_radiance', ['', '§2A chromatic material forged from §aabsorbed light§2.', ''])
	event.add('create:shadow_steel', ['', '§2A chromatic material forged §ain the void§2.', ''])
	
	//TODO: add pipez ?
})

// itemId : id of the item
// lineIndex : Index of the line we want to append the tooltip
// text : Text to append
// append : false if the tooltip should be 1 line after the index (= leaves a empty space on the index)
// shouldShift : true if the player should shift to see the tooltip
function insertLine(event, itemId, lineIndex, text, inline, shouldShift) {	
	event.addAdvanced(itemId, (a, b, c) => {
		let index = lineIndex
		
		if(!inline)
			c.add(index++, " ")
		
		if(shouldShift && !event.shift) {
			c.add(index, [Text.of('Hold ').gray(), Text.of('Shift ').yellow().italic(), Text.of('to see more info').gray()])
			return;
		}
		
		c.add(index, text)
	})
}
