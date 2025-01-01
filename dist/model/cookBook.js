"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
class CookBook extends book_1.default {
    constructor(bno, title, writer, owner, coupon = false) {
        super(bno, title, writer, owner);
        this.coupon = coupon;
    }
    info() {
        return `${this.bno}, CookBook, ${this.title}, ${this.writer}, ${this.coupon ? '요리쿠폰 있음' : '요리쿠폰 없음'}`;
    }
    getCoupon() {
        return this.coupon;
    }
    useCoupon() {
        this.coupon = true;
    }
}
exports.default = CookBook;
