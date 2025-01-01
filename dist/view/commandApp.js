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
function runApp() {
    while (true) {
        try {
            printMenu();
            const input = readline_sync_1.default.question('> ');
            const menuNum = Number(input);
            switch (menuNum) {
                case 1:
                    login();
                    break;
                case 99:
                    return;
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
function printMenu() {
    console.log('<TodoList App>');
    console.log('1. 로그인');
    console.log('99. 종료하기');
}
function login() {
    try {
        const memberId = readline_sync_1.default.question(`아이디를 입력하세요.\n> `);
        const member = (0, memberApi_1.getMemberList)(memberId);
        const password = readline_sync_1.default.question(`비밀번호를 입력하세요.\n> `);
        if (password !== member.password) {
            console.log('로그인에 실패하였습니다.');
            return false;
        }
        console.log('로그인에 성공하였습니다.');
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        else {
            console.log('알 수 없는 오류가 발생했습니다.');
        }
        return false;
    }
    return true;
}
exports.default = runApp;
