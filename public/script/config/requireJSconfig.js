var options =  {
	  baseUrl: "/public/script"
	, paths : {

		// lib
		"requireLib"			:	"lib/requirejs/require"
		, "async"				:	"lib/requirejs/plugin/async"
		, "text"				:	"lib/requirejs/plugin/text"
		, "i18n"				:	"lib/requirejs/plugin/i18n"
		, "domReady"			:	"lib/requirejs/plugin/domReady"
		, "jquery"				:	"lib/jquery/jquery"
		, "_"					:	"lib/underscore/underscore"
		, "backbone"			:	"lib/backbone/backbone"

		// modules
		, "main"				: 	"modules/main"

	  }
	, shim: {
		"backbone"				:	{
			"exports"			:	"backbone"
			, "deps"			:	[ "jquery", "underscore" ]	
		}
	  }
	//, urlArgs : "bust=" + ( new Date() ).getTime()

};

requirejs.config( options );
return options;
