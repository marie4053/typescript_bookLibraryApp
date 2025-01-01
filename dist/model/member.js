"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Member {
    constructor(mno, memberId, password, name, borrowBookList, programLangList) {
        this.mno = mno;
        this.memberId = memberId;
        this.password = password;
        this.name = name;
        this.borrowBookList = borrowBookList;
        this.programLangList = programLangList;
    }
}
exports.default = Member;
