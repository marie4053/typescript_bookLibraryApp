"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComicBook = exports.CookBook = exports.ITBook = exports.Book = void 0;
class Book {
    constructor(_bno, title, writer, _owner) {
        this._bno = _bno;
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
    get bno() {
        return this._bno;
    }
}
exports.Book = Book;
class ITBook extends Book {
    constructor(bno, title, writer, owner, language) {
        super(bno, title, writer, owner);
        this.language = language;
    }
    info() {
        return `${this.bno}, ITBook, ${this.title}, ${this.writer}, ${this.language}`;
    }
    getLanguage() {
        return this.language;
    }
}
exports.ITBook = ITBook;
class CookBook extends Book {
    constructor(bno, title, writer, owner, coupon = false) {
        super(bno, title, writer, owner);
        this.coupon = coupon;
    }
    info() {
        return `${this.bno}, CookBook, ${this.title}, ${this.writer}, ${this.coupon ? '요리쿠폰 없음' : '요리쿠폰 있음'}`;
    }
    getCoupon() {
        return this.coupon;
    }
    useCoupon() {
        this.coupon = true;
    }
}
exports.CookBook = CookBook;
class ComicBook extends Book {
    constructor(bno, title, writer, owner, durability) {
        super(bno, title, writer, owner);
        this.durability = durability;
    }
    info() {
        return `${this.bno}, ComicBook, ${this.title}, ${this.writer}, 내구도: ${this.durability}`;
    }
    minusDurability() {
        this.durability--;
    }
    getDurability() {
        return this.durability;
    }
}
exports.ComicBook = ComicBook;
