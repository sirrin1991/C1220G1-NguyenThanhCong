class Customer {
    constructor (name, id, birth, email, address, customerType, discount, quantity, rentDay, serviceType, roomType) {
        this._name = name;
        this._id = id;
        this._birth = birth;
        this._email = email;
        this._address = address;
        this._customerType = customerType;
        this._discount = discount;
        this._quantity = quantity;
        this._rentDay = rentDay;
        this._serviceType = serviceType;
        this._roomType = roomType;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get birth() {
        return this._birth;
    }

    set birth(value) {
        this._birth = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get customerType() {
        return this._customerType;
    }

    set customerType(value) {
        this._customerType = value;
    }

    get discount() {
        return this._discount;
    }

    set discount(value) {
        this._discount = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get rentDay() {
        return this._rentDay;
    }

    set rentDay(value) {
        this._rentDay = value;
    }

    get serviceType() {
        return this._serviceType;
    }

    set serviceType(value) {
        this._serviceType = value;
    }

    get roomType() {
        return this._roomType;
    }

    set roomType(value) {
        this._roomType = value;
    }
}
