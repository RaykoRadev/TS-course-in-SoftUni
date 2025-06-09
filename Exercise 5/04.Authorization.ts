class MockAuthrizationService {
    constructor(
        private userRole: "Guest" | "PersonalDataAdministrator" | "Admin"
    ) {}

    canViewData(property: string) {
        switch (this.userRole) {
            case "Admin":
                return true;
            case "PersonalDataAdministrator":
                return ["name", "age"].includes(property);
            default:
                return false;
        }
    }
}

class User2 {
    _name: string;
    _age: number;
    _getCardNumber: string;

    constructor(name: string, age: number, getCardNumber: string) {
        this._name = name;
        this._age = age;
        this._getCardNumber = getCardNumber;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get getCardNumber() {
        return this._getCardNumber;
    }
}
