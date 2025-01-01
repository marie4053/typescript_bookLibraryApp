"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
class ComicBook extends book_1.default {
    constructor(bno, title, writer, owner, durability) {
        super(bno, title, writer, owner);
        this.durability = durability;
    }
    info() {
        return `${this.bno}, CookBook, ${this.title}, ${this.writer}, 내구도: ${this.durability}`;
    }
    minusDurability() {
        this.durability--;
    }
    getDurability() {
        return this.durability;
    }
}
exports.default = ComicBook;
