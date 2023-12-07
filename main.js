$(document).ready(function() {
    $("#taskList").on("click", "li", function() {
        completeTask($(this));
    });

    $("#taskForm").submit(function(event) {
        event.preventDefault();
        addTask();
    });

    $("#addTaskBtn").click(function() {
        addTask();
    });
});

function addTask() {
    var taskInput = $("#taskInput");
    var taskList = $("#taskList");

    if (taskInput.val() !== "") {
        var newTask = $("<li>").text(taskInput.val());
        taskList.append(newTask);
        taskInput.val("");
    }
}

function completeTask(task) {
    task.toggleClass("completed");
}