#pragma strict

function OnTriggerEnter(Info : Collider){
	if(Info.tag == "Player"){
		Destroy(gameObject);
	}
}