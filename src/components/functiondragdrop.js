import { Dropdown } from 'bootstrap';
import React from 'react'

let TaskList = document.getElementById("containerTaskList");
let DoneTasks = document.getElementById("containerDoneTasks");
let InProcess = document.getElementById("containerInProcess");

TaskList.addEventListener("dragOver", (ev) => allowDrop(ev));
TaskList.addEventListener("drop", (ev) => drop(ev));

DoneTasks.addEventListener("dragOver", (ev) => allowDrop(ev));
DoneTasks.addEventListener("drop", (ev) => drop(ev));

InProcess.addEventListener("dragOver", (ev) => allowDrop(ev));
InProcess.addEventListener("drop", (ev) => drop(ev));

for (let i = 0; i < TaskList.length; i++){
    TaskList[i].setAttribute("draggable", true);
    TaskList[i].setAttribute("id" + i + TaskList[i].parentNode.id);
    TaskList[i].addEventListener("dragstart", (ev) => startDrag(ev)) {

for (let i = 0; i < DoneTasks.length; i++){
    DoneTasks[i].setAttribute("draggable", true);
    DoneTasks[i].setAttribute("id" + i + DoneTasks[i].parentNode.id);
    DoneTasks[i].addEventListener("dragstart", (ev) => startDrag(ev)) {


for (let i = 0; i < InProcess.length; i++){
    InProcess[i].setAttribute("draggable", true);
    InProcess[i].setAttribute("id" + i + InProcess[i].parentNode.id);
    InProcess[i].addEventListener("dragstart", (ev) => startDrag(ev)) {

}}}




startDrag(ev) {
    ev.dataTransfer.setData("item.id", ev.target.id)
    console.log(ev.target.id)
}





function functiondragdrop() {
    return (
        <div>
            
        </div>
    )
}

export default functiondragdrop
