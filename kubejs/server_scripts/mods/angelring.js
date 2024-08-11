ServerEvents.recipes(event => {
	['energetic', 'leadstone', 'hardened', 'reinforced', 'resonant'].forEach(ring => {
		event.remove({output: 'angelring:' + ring + '_angel_ring'})
	})

	//TODO: make X mod usefull by adding angelring
	//event.remove({output: 'angelring:angel_ring'})
	//event.shaped('angelring:angel_ring', )
})
