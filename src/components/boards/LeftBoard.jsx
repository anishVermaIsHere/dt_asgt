import React from 'react'

const LeftBoard = ({
    arr,
    boardToggle,
    handleLeftBoard
}) => {
    return (
        <aside className={boardToggle ? "left-board left" : "left-board"}>
            <div className="top-bar">
                <p className="left-board-title mb-0">Journey Board</p>
                <span className={boardToggle ? "open arrow-left" : "open"} onClick={handleLeftBoard}>
                    <svg className="svg-icon" style={{ width: '34px', height: '34px', verticalAlign: 'middle', fill: '#ffff', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M725.333333 512v-3.84a37.546667 37.546667 0 0 0-2.56-11.946667 30.72 30.72 0 0 0-4.693333-8.106666 42.666667 42.666667 0 0 0-3.84-5.546667l-122.026667-128a42.666667 42.666667 0 0 0-61.866666 58.88L582.826667 469.333333H341.333333a42.666667 42.666667 0 0 0 0 85.333334h238.506667l-55.466667 55.04a42.666667 42.666667 0 0 0 0 60.586666 42.666667 42.666667 0 0 0 60.586667 0l128-128a42.666667 42.666667 0 0 0 8.96-13.653333A42.666667 42.666667 0 0 0 725.333333 512z" /><path d="M512 85.333333a426.666667 426.666667 0 1 0 426.666667 426.666667A426.666667 426.666667 0 0 0 512 85.333333z m0 768a341.333333 341.333333 0 1 1 341.333333-341.333333 341.333333 341.333333 0 0 1-341.333333 341.333333z" /></svg>
                </span>
            </div>
            <div className="board-container">
                <ul className="board-menu">
                    {arr[0].tasks.map((task) => {
                        return <>
                            <li className="board-menu-list">
                                {task.task_title}
                                <ul>
                                    {task.assets.map((asset, id) => {
                                        return <>
                                            <li key={id}>{asset.asset_title}</li>
                                        </>
                                    })}
                                </ul>
                            </li >
                        </>
                    })}
                </ul>
            </div>
        </aside>
    )
}

export default LeftBoard