import React from 'react'

const RightBoard = () => {
    return (
        <aside className="right-board d-flex">
            <div className="left-bar">
                <span className="close">
                    <svg width={34} height={34} viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.8333 17L7 36.8333M26.8333 36.8333L7 17" stroke="white" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                </span>
                <p className="left-board-title  text-16-400 ">
                    N<br />
                    o<br />t<br />i<br />c<br />e<br /><br /> B<br />o<br />a<br />r<br />d</p>
            </div>
            <div className="right-container">
            </div>
        </aside>
    )
}

export default RightBoard