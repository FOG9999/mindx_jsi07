import React, { Component } from "react";
import BoardGame from "./BoardGame";
import User from "./User";
import { buildWinCondition } from "./WinCondition";

class GameWrapper extends Component {
    state = {
        user: {
            name: "Nguyễn Văn An",
            avatar: "https://www.w3schools.com/w3images/avatar2.png",
        },
        gameIsStarted: false,
        board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        codeUserOnFirstTurn: 1,
        winCondition: {
            horizontal: [],
            vertical: [],
            diagonal: [[], []], // [[left->right], [right->left]]
        },
        codeWin: 0,
        gameOver: false,
        currentCodeTurn: 1, // lưu lại code của user trong turn hiện tại
    };

    onClickStartGame = () => {
        let randomNumber = Math.round(Math.random() * 100);
        let winCondition = buildWinCondition(3);
        this.setState({
            gameIsStarted: true,
            codeUserOnFirstTurn: randomNumber % 2,
            currentCodeTurn: randomNumber % 2,
            winCondition,
        });
    };

    onClickCell = (index) => {
        if (this.state.gameIsStarted && this.state.board[index] === 0 && !this.state.gameOver) {
            // update giá trị tại ô được click
            this.updateBoardArr(index);
            setTimeout(() => {
                if (!this.state.gameOver) this.doMachineTurn();
            }, 1000);
        }
    };

    doMachineTurn = () => {
        // tìm index những ô chưa được đánh trong mảng board
        let unfilledCellIndexes = [];
        this.state.board.forEach((ele, index) => {
            if (ele === 0) {
                unfilledCellIndexes.push(index);
            }
        });
        // pick random một index của ô chưa được điền
        let length = unfilledCellIndexes.length;
        let rdIndexInunfilled = Math.floor(Math.random() * length);
        this.updateBoardArr(unfilledCellIndexes[rdIndexInunfilled]);
    };

    checkIfGameIsOver = () => {
        // ? one user win
        let checkResult = this.checkWinCondition();
        if (checkResult.codeWin > 0) {
            this.setState(checkResult);
            console.log(this.state.codeWin === 2 ? "Bạn đã thắng" : "Bạn đã thua");
            return true;
        }
        // all cells are fiiled
        let allCellsAreFilled = true;
        this.state.board.forEach((ele) => {
            if (ele === 0) {
                allCellsAreFilled = false;
            }
        });
        if (allCellsAreFilled === true) {
            this.setState({
                gameIsStarted: false,
                gameOver: true,
            });
            return true;
        }
    };

    checkWinCondition = () => {
        let userTicks = [];
        let machineTicks = [];
        this.state.board.forEach((cell, ind) => {
            if (cell === 1) userTicks.push(ind);
            if (cell == 2) machineTicks.push(ind);
        });
        let isWin = false;
        let directions = ["horizontal", "vertical", "diagonal"];
        for (let direction of directions) {
            for (let i = 0; i < this.state.winCondition[direction].length; i++) {
                if (this.state.currentCodeTurn === 2) {
                    isWin = this.state.winCondition[direction][i].every((ele) => userTicks.indexOf(ele) >= 0);
                } else isWin = this.state.winCondition[direction][i].every((ele) => machineTicks.indexOf(ele) >= 0);
                if (isWin) {
                    return {
                        codeWin: this.state.currentCodeTurn === 1 ? 2 : 1,
                        gameOver: true,
                    };
                }
            }
        }
        return {
            codeWin: 0,
            gameOver: false,
        };
    };

    updateBoardArr = (index) => {
        let arr = this.state.board;
        arr[index] = this.state.currentCodeTurn;

        let newCode = this.state.currentCodeTurn === 1 ? 2 : 1; // switch giá trị nếu = 2 thì cho =1, nếu bằng 1 thì cho = 2

        this.setState(
            {
                board: [...arr], // clone array arr ra một giá trị mới, một con trỏ mới -> React có thể hiểu là cập nhật state
                currentCodeTurn: newCode,
            },
            () => {
                this.checkIfGameIsOver();
            }
        );
    };

    render() {
        return (
            <div>
                <div className="text-center header py-2">
                    <button className="btn btn-primary" disabled={this.state.gameIsStarted} onClick={this.onClickStartGame}>
                        Start
                    </button>
                </div>
                <div className="game-main mt-3">
                    <div className="row">
                        <User user={this.state.user} />
                        <BoardGame board={this.state.board} onClickCell={this.onClickCell} />
                    </div>
                </div>
                <div className="result">Bạn đã chiến thắng</div>
            </div>
        );
    }
}

export default GameWrapper;
