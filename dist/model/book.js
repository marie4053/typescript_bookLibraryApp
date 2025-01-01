"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(bno, title, writer, _owner) {
        this.bno = bno;
        this.title = title;
        this.writer = writer;
        this._owner = _owner;
    }
    get owner() {
        return this._owner;
    }
    set owner(newOwner) {
        this._owner = newOwner;
    }
}
exports.default = Book;
