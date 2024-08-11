ServerEvents.recipes(event => {
	/*
	  Chunk Loader
	*/

	event.remove({output: 'createchunkloading:chunk_loader'})

	event.shapeless('createchunkloading:chunk_loader', 'chickenchunks:chunk_loader')
	event.shapeless('chickenchunks:chunk_loader', 'createchunkloading:chunk_loader')
})
