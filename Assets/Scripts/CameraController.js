#pragma strict

var target : Transform;
var distance = 0;
var lift = 1.5;

function Update () {
	transform.position = target.position + Vector3(0,2,-5);
	//transform.LookAt(target);
}