"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookListAll = getBookListAll;
exports.getBookList = getBookList;
exports.borrowBook = borrowBook;
exports.returnBook = returnBook;
const book_1 = require("../model/book");
const memberApi_1 = require("./memberApi");
const memberList = (0, memberApi_1.getMemberListAll)();
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
function returnBook(memberId, bno) {
    try {
        // 1) 회원 찾기
        const member = memberList.find((member) => member.memberId === memberId);
        if (!member) {
            console.log('해당 회원을 찾을 수 없습니다.');
            return false;
        }
        const bIndex = bookList.findIndex((book) => book.bno === bno);
        const mIndex = memberList.findIndex((member) => member.memberId === memberId);
        // 1) memberList - borrowBookList에 해당 책 빼주기
        // memberList[mIndex].borrowBookList.pop(bookList[bIndex]);
        // 2) bookList - owner에 null
        bookList[bIndex].owner = null;
        console.log(`${bookList[mIndex]}이 반납되었습니다.`);
    }
    catch (error) {
        console.log('반납에 실패하였습니다.');
        return false;
    }
    return true;
}
