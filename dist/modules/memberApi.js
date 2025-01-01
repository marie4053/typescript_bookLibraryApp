"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberListAll = getMemberListAll;
exports.getMemberList = getMemberList;
exports.removeBook = removeBook;
exports.getBookListAll = getBookListAll;
exports.getBookList = getBookList;
exports.borrowBook = borrowBook;
const member_1 = __importDefault(require("../model/member"));
const book_1 = require("../model/book");
const memberList = [
    new member_1.default(1, 'user1', '1234', '홍길동', [], ['C', 'Java']),
    new member_1.default(2, 'user2', '1234', '최길동', [], []),
    new member_1.default(3, 'user3', '1234', '박길동', [], ['C']),
];
const bookList = [
    new book_1.ITBook(100, '모던 자바스크립트', '이웅모', memberList[0], 'Javascript'),
    new book_1.ITBook(101, '자바의 정석', '남궁성', memberList[1], 'Java'),
    new book_1.ITBook(102, '열혈C언어', '윤성우', null, 'C'),
    new book_1.ITBook(103, '타입스크립트 교과서', '조현영', null, 'Typescript'),
    new book_1.ITBook(104, 'TheC++언어', '비야네스', memberList[1], 'C++'),
    new book_1.CookBook(200, '백종원의 조리비책', '백종원', memberList[0], false),
    new book_1.CookBook(203, '비벼야 산다', '유비빔', null, true),
    new book_1.CookBook(205, '얼마나 맛있게요', '이혜정', null, false),
    new book_1.ComicBook(300, '원피스-50년간 여행', '오다', memberList[0], 50),
    new book_1.ComicBook(301, '신의탑', '시우', memberList[2], 100),
    new book_1.ComicBook(302, '귀멸의 칼날', '악어', memberList[2], 0),
];
// console.log(`memberList[0].name: ${memberList[0].name}`);
function getMemberListAll() {
    return memberList;
}
function getMemberList(memberId) {
    const member = memberList.find((member) => member.memberId === memberId);
    if (!member) {
        throw new Error(`해당 아이디가 없습니다.`);
    }
    return member;
}
function removeBook(mIdex, bno) {
    console.log(memberList[mIdex].borrowBookList);
}
function getBookListAll() {
    return bookList;
}
function getBookList(memberId) {
    return bookList.filter((book) => {
        // 특정 회원의 책 목록을 가져오는 경우
        if (memberId) {
            return book.owner?.memberId === memberId;
        }
        // 대출 가능한 책 목록을 가져오는 경우
        return book.owner === null;
    });
}
function borrowBook(memberId, bno) {
    try {
        const bIndex = bookList.findIndex((book) => book.bno === bno);
        const mIndex = memberList.findIndex((member) => member.memberId === memberId);
        // 1) memberList - borrowBookList에 해당 책 넣어주기
        memberList[mIndex].borrowBookList.push(bookList[bIndex]);
        // 2) bookList - owner 추가해주기
        bookList[bIndex].owner = memberList[mIndex];
    }
    catch (error) {
        console.log('대출에 실패하였습니다.');
        return false;
    }
    console.log('대출이 완료되었습니다.');
    return true;
}
// export function returnBook(memberId: string, bno: number): boolean {
//   try {
//     const mIndex = memberList.findIndex(
//       (member) => member.memberId === memberId
//     );
//     const myBookList = memberList[mIndex].borrowBookList;
//     console.log(myBookList[0]);
//     const bIndex = bookList.findIndex((book) => book.bno === bno);
//     // const bookIndex = memberList[mIndex].borrowBookList.findIndex((book)=>)
//     // 1) memberList - borrowBookList에 해당 책 빼주기
//     // memberList[mIndex].borrowBookList.splice(bookList[bIndex]);
//     // 2) bookList - owner에 null
//     bookList[bIndex].owner = null;
//     console.log(`${bookList[mIndex]}이 반납되었습니다.`);
//   } catch (error) {
//     console.log('반납에 실패하였습니다.');
//     return false;
//   }
//   return true;
// }
