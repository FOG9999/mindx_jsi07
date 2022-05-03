import React, { Component } from 'react';
import './style.css'

class BoardGame extends Component {
    state = {}

    renderSymbolOnTd = (code) => {
        let symbol = '';
        switch (code) {
            case 0: break;
            case 1: {
                symbol = 'x';
                break;
            }
            default: {
                symbol = 'o';
                break;
            }
        }
        return symbol;
    }

    render() {
        return (
            <div className=" h-100 col-8 px-2">
                <div>
                    <table className='table' style={{ width: 'fit-content' }}>
                        <tbody>
                            <tr>
                                <td onClick={() => this.props.onClickCell(0, 1)} style={{ border: 'black 2px solid', width: '100px', height: '100px' }}>
                                    {
                                        this.renderSymbolOnTd(this.props.board[0])
                                    }
                                </td>
                                <td onClick={() => this.props.onClickCell(1, 1)} style={{ border: 'black 2px solid', width: '100px', height: '100px' }}>
                                    {
                                        this.renderSymbolOnTd(this.props.board[1])
                                    }
                                </td>
                                <td onClick={() => this.props.onClickCell(2, 1)} style={{ border: 'black 2px solid', width: '100px', height: '100px' }}>
                                    {
                                        this.renderSymbolOnTd(this.props.board[2])
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => this.props.onClickCell(3, 1)} style={{ border: 'black 2px solid', width: '100px', height: '100px' }}>
                                    {
                                        this.renderSymbolOnTd(this.props.board[3])
                                    }
                                </td>
                                <td onClick={() => this.props.onClickCell(4, 1)} style={{ border: 'black 2px solid', width: '100px', height: '100px' }}>
                                    {
                                        this.renderSymbolOnTd(this.props.board[4])
                                    }
                                </td>
                                <td onClick={() => this.props.onClickCell(5, 1)} style={{ border: 'black 2px solid', width: '100px', height: '100px' }}>
                                    {
                                        this.renderSymbolOnTd(this.props.board[5])
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => this.props.onClickCell(6, 1)} style={{ border: 'black 2px solid', width: '100px', height: '100px' }}>
                                    {
                                        this.renderSymbolOnTd(this.props.board[6])
                                    }
                                </td>
                                <td onClick={() => this.props.onClickCell(7, 1)} style={{ border: 'black 2px solid', width: '100px', height: '100px' }}>
                                    {
                                        this.renderSymbolOnTd(this.props.board[7])
                                    }
                                </td>
                                <td onClick={() => this.props.onClickCell(8, 1)} style={{ border: 'black 2px solid', width: '100px', height: '100px' }}>
                                    {
                                        this.renderSymbolOnTd(this.props.board[8])
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default BoardGame;