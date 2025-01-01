"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const memberApi_1 = require("../modules/memberApi");
// import {} from '../modules/Api';
// 윈도우에서 한글 입력 안되는 경우 chcp 65001
readline_sync_1.default.setDefaultOptions({ encoding: 'utf8' });
function runApp2(member) {
    while (true) {
        try {
            printMenu(member);
            const input = readline_sync_1.default.question('> ');
            const menuNum = Number(input);
            switch (menuNum) {
                case 1:
                    console.log(`\n<전체 도서 리스트>`);
                    const bookListAll = (0, memberApi_1.getBookListAll)();
                    showBookList(bookListAll);
                    break;
                case 2:
                    console.log(`\n<내가 대여한 도서 보기>`);
                    const myBookList = (0, memberApi_1.getBookList)(member.memberId);
                    showBookList(myBookList, member);
                    break;
                case 3:
                    console.log(`\n<대출 가능한 도서 리스트>`);
                    const availableBookList = (0, memberApi_1.getBookList)();
                    showBookList(availableBookList);
                    const bno = Number(readline_sync_1.default.question('빌릴 책을 입력하세요.\n> '));
                    (0, memberApi_1.borrowBook)(member.memberId, bno);
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 99:
                    return 99;
                default:
                    break;
            }
            console.log('');
        }
        catch (error) {
            console.error(error);
            console.log('잘못된 입력입니다.');
        }
    }
}
function printMenu(member) {
    console.log('');
    console.log('<도서 관리 프로그램>');
    console.log(`로그인이 되었습니다. (${member.memberId}, 보유책 : ${member.borrowBookList.length}권)`);
    console.log('1. 전체 도서 리스트 보기');
    console.log('2. 내가 대여한 도서 보기');
    console.log('3. 도서 대여하기');
    console.log('4. 도서 반납하기');
    console.log('5. 도서 기증하기');
    console.log('6. 사용자 정보 보기');
    console.log('99. 종료하기');
}
function showBookList(bookList, member) {
    if (!member) {
        const result = bookList
            .map((book) => `${book.info()}, ${book.owner
            ? `대출불가(소유자: ${book.owner.memberId}, ${book.owner.name})`
            : '대출 가능'}`)
            .join('\n');
        console.log(result);
    }
    else {
        const result = bookList.map((book) => book.info()).join('\n');
        console.log(result);
    }
}
exports.default = runApp2;
