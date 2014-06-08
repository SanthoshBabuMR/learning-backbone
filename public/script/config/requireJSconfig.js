/**
* set up requirejs config
* @function		
* @return		{object} configuration option
*/
( function( ) {
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
			, "todo"				:	"modules/todo"

		  }
		, shim: {
			"_"						: {
				"exports"			:	"_"
			}
			, "backbone"				:	{
				"exports"			:	"Backbone"
				, "deps"			:	[ "jquery", "_" ]
			}
		  }
		//, urlArgs : "bust=" + ( new Date() ).getTime()

	};

	// step: configure requirejs with the application's configuration option
	requirejs.config( options );

	return options;	
} )( );
