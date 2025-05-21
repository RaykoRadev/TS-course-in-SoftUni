type StatusType = "Logged" | "Started" | "InProgress" | "Done";

interface Tasks {
    status: StatusType;
    title: string;
    daysRequired: number;
    assignedTo: Users | undefined;
    changeStatus(newStatus: StatusType): void;
}

interface Users {
    username: string;
    signupDate: Date;
}

function assignTask(user: Users, task: Tasks) {
    if (task.assignedTo == undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}

let user = {
    username: "Margaret",
    signupDate: new Date(2022, 1, 13),
    passwordHash: "random",
};
let task1: Tasks = {
    status: "Logged",
    title: "Need assistance",
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: "Logged" | "Started" | "InProgress" | "Done") {
        this.status = newStatus;
    },
};

let task2 = {
    status: <"Logged" | "Started" | "InProgress" | "Done">"Done",
    title: "Test",
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus: "Logged" | "Started" | "InProgress" | "Done") {
        this.status = newStatus;
    },
    moreProps: 300,
    evenMore: "wow",
};

assignTask(user, task1);
assignTask(user, task2);
