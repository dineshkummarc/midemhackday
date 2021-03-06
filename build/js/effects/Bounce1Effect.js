var Bounce1Effect = function ( mesh, volume ) {

	mesh.visible = false;

	var position = new THREE.Vector3();

	var path = [
		new THREE.Vector3( 0, 50, 0 ),
		new THREE.Vector3( 100, 50, 0 ),
		new THREE.Vector3( 18, 0, 0 )
	];

	switch ( volume ) {

		case 0:
			path[ 1 ] = new THREE.Vector3( 95, 45, 0 );
			break;
		case 2:
			path[ 1 ] = new THREE.Vector3( 105, 55, 0 );
			break;

	}


	this.show = function () {

		mesh.visible = true;

	};

	this.hide = function () {

		mesh.visible = false;

	};

	this.update = function ( progress ) {

		if ( progress < 0.5 ) {

			position.copy( path[ 1 ] );
			position.subSelf( path[ 0 ] );
			position.multiplyScalar( progress * 2 );
			position.addSelf( path[ 0 ] );

			position.y += Math.sin( Math.PI * progress * 2 ) * 25;

		} else {

			position.copy( path[ 2 ] );
			position.subSelf( path[ 1 ] );
			position.multiplyScalar( progress * 2 - 1 );
			position.addSelf( path[ 1 ] );

			position.y += Math.abs( Math.sin( Math.PI * ( progress * 2 - 1 ) ) ) * 20;

		}

		mesh.position.x = position.x;
		mesh.position.y = position.y;

	};

};
Bounce1Effect.prototype = new SequencerItem();
Bounce1Effect.prototype.constructor = Bounce1Effect;
