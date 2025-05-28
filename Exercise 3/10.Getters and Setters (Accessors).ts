class User1 {
    private _username!: string;

    constructor(username: string) {
        this.username = username;
    }

    get username(): string {
        return this._username;
    }

    set username(newUsername: string) {
        if (newUsername.length < 3) {
            throw new Error("Username must be at least 3 characters long");
        }

        this._username = newUsername;
    }
}

const user1 = new User1("Martin");
user1.username = "johnDoe";
console.log(user1.username);
// const user1 = new User1("jo");
// const user1 = new User1("Martin");
// user1.username = "Do";
