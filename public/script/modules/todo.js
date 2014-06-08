/**
* @module		todo
* @moduleType	require
* @deps			jquery, _, backbone
* */
requirejs( [ "jquery", "_", "backbone" ], function( $, _, Backbone ) {

  "use strict";

  /**
  * todo model blueprint
  * @class Todo
  */
  var Todo = Backbone.Model.extend( {
  	defaults: {
  		title: ""
  		, completed: false
  	}
  	, validate: function( attr ) {
  		if( attr && attr.completed ) {
  			if( attr.completed !== true || attr.completed !== false ) {
  				return "completed must only take a boolean value"
  			}
  		}
  	}
  	, getTitle: function( ) {
  		return this.get( "title" );
  	}
  	, setTitle: function( val ) {
  		return this.set( {
  			"title": val
  		} );
  	}
  	, unsetAll: function( ) {
  		this.clear( );
  	}
  	, getAll: function( ) {
  		return this.toJSON( );
  	}
  } );

  // Todo model instance
  var myTodo = new Todo( {
  	title: "Check attributes property of the logged models in the console."
  } );

  console.log( myTodo.getTitle( ) ) ;

  /**
  * todo view
  * @class TodoView
  */
  var TodoView = Backbone.View.extend( {
  	tagName: "li"
  	, tmpl: _.template( $("#item-template").html( ) )
  	, events: {
  		"dblclick label": "edit"
  		, "keypress .edit": "updateOnEnter"
  		, "blur .edit": "close"
  	}
  	, initialize: function( ) {
  		this.$el = $("#todo")
  	}
  	, render: function( ) {
  		this.$el.html( this.tmpl( this.model.toJSON( ) ) );
  		this.input = this.$( ".edit" );
  		return this;
  	}
  	, edit: function( ) {
  		// executed when todo label is double clicked
  	}
  	, close: function( ) {
  		// executed when todo loses focus
  	}
  	, updateOnEnter: function( ) {
  		// executed on each keypress when in todo edit mode,
  		// but we wait for enter to get in action
  	}
  } );

  // Todo view instance
  var todoView = new TodoView( {
  	model: myTodo
  } );

  /**
  * todo collection
  * @class TodosCollection
  */ 
  var TodosCollection = Backbone.Collection.extend( {
    model: Todo
  } );

  var todos = new TodosCollection( myTodo );
  
} );
