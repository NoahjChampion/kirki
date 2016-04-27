wp.customize.controlConstructor['kirki-toggle'] = wp.customize.Control.extend({

	ready: function() {

		var control = this,

		// Get the initial value
		    checkboxValue = control.setting._value;

		// Save the value
		this.container.on( 'change', 'input', function() {
			checkboxValue = ( jQuery( this ).is( ':checked' ) ) ? true : false;
			control.setting.set( checkboxValue );
		});

	}

});
