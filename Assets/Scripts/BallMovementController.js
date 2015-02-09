#pragma strict

var rotationSpeed = 100;
var jumpHeight = 5;

private var isFalling = false;

function Update () {

	//CONTROLLING BALL MOVEMENT FORWARD OR BACKWARD
	/*var rotation : float = Input.GetAxis("Vertical") * rotationSpeed;
	rotation *= Time.deltaTime;
	rigidbody.AddRelativeTorque(Vector3.back * rotation);*/
	
	var moveHorizontal = Input.GetAxis("Horizontal");
	var moveVertical = Input.GetAxis("Vertical");
	rigidbody.AddForce(Vector3(moveHorizontal, 0.0f, moveVertical) * rotationSpeed * Time.deltaTime);
	
	
	//CONTROLLING BALL JUMPING
	if(Input.GetKeyDown(KeyCode.Space) && isFalling==false){
		
		rigidbody.velocity.y += jumpHeight;
	}
	isFalling = true;
	
}


function OnCollisionStay(){
	isFalling = false;
}