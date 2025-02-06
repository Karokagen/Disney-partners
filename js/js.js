let options = document.querySelectorAll(".option");
let dropzone = document.getElementById("dropzone");
let correctAnswer = "opt4"; // Rigtige svar
let slots = {
    "opt1": document.getElementById("slot1"),
    "opt2": document.getElementById("slot2"),
    "opt3": document.getElementById("slot3"),
    "opt4": document.getElementById("slot4")
};

options.forEach(option => {
    option.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", event.target.id);
    });
});

dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
});

dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(id);
    
    if (dropzone.children.length > 0) {
        const existingElement = dropzone.children[0];
        slots[existingElement.id].appendChild(existingElement);
    }
    
    dropzone.innerHTML = "";
    dropzone.appendChild(draggedElement);

    if (id === correctAnswer) {
        dropzone.style.borderColor = "green";
    } else {
        dropzone.style.borderColor = "red";
    }
});

function goNext() {
    window.location.href = "side2.html";
};

function goNext2() {
    window.location.href = "side3.html";
};

function goNext3() {
    window.location.href = "side4.html";
};

function goNext4() {
    window.location.href = "side5.html";
};

function goNext5() {
    window.location.href = "index.html";
};