App = function()
{
    // this is where the WADE app is initialized
	this.init = function()
	{
        // load a scene
		wade.loadScene('scene0.wsc', true, function()
        {
            wade.preloadAudio('data/CCCC(K)C.wav', true, true);
            document.body.style.cursor = 'none';
        });
	};
};
