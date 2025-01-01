"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
class ITBook extends book_1.default {
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
exports.default = ITBook;
