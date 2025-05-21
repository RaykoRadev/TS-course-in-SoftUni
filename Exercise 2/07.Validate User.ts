type User = {
    id: number | string;
    username: string;
    passwordHash: string | string[];
    status: "Locked" | "Unlocked" | "Deleted";
    email?: string;
};

function validateUser(user: User): boolean {
    let istrue = true;

    if (typeof user.id === "number" && user.id > 100) {
        istrue = true;
    } else if (typeof user.id === "string" && user.id.length === 14) {
        istrue = true;
    } else {
        return false;
    }

    if (user.username.length >= 5 && user.username.length <= 10) {
        istrue = true;
    } else {
        return false;
    }

    if (
        typeof user.passwordHash === "string" &&
        user.passwordHash.length === 20
    ) {
        istrue = true;
    } else if (
        Array.isArray(user.passwordHash) &&
        user.passwordHash.length === 4 &&
        user.passwordHash.every((el) => el.length === 8)
    ) {
        istrue = true;
    } else {
        return false;
    }

    if (user.status === "Locked" || user.status === "Unlocked") {
        istrue = true;
    } else {
        return false;
    }
    return istrue;
}

console.log(
    validateUser({
        id: 120,
        username: "testing",
        passwordHash: "123456-123456-123456",
        status: "Deleted",
        email: "something",
    })
);
console.log(
    validateUser({
        id: "1234-abcd-5678",
        username: "testing",
        passwordHash: "123456-123456-123456",
        status: "Unlocked",
    })
);
console.log(
    validateUser({
        id: "20",
        username: "testing",
        passwordHash: "123456-123456-123456",
        status: "Deleted",
        email: "something",
    })
);
console.log(
    validateUser({
        id: 255,
        username: "Pesho",
        passwordHash: ["asdf1245", "qrqweggw", "123-4567", "98765432"],
        status: "Locked",
        email: "something",
    })
);
console.log(
    validateUser({
        id: "qwwe-azfg-ey38",
        username: "Someone",
        passwordHash: ["qwezz8jg", "asdg-444", "12-34-56"],
        status: "Unlocked",
    })
);
console.log(
    validateUser({
        id: 1344,
        username: "wow123",
        passwordHash: "123456-123456-1234567",
        status: "Locked",
        email: "something@abv.bg",
    })
);
