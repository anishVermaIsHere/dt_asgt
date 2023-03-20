import React, { useState } from 'react'

import Asset from './Asset'
import data from '../data/ddugky_project.json'
import Header from './Header';
import LeftBoard from './boards/LeftBoard';
import RightBoard from './boards/RightBoard';
import quesmark from '../assets/icons/misc/question-mark.png';
import schedule from '../assets/icons/misc/schedule.png';
import meeting from '../assets/icons/misc/meeting.png';

const Home = () => {
    const arr = [];
    arr.push(data);
    const [boardToggle, setBoardToggle] = useState(false);
    const handleLeftBoard = () => {
        setBoardToggle((prev) => prev = !prev);
    }

    const widgets=[quesmark,schedule,meeting];

    return (
        <>
            <div>
                <Header />
                <div className="widget-container">
                    {widgets.map(widget=><div className="widget">
                        <img src={widget} alt={widget}/>
                    </div>)}
                </div>
                <main>
                    <div className="container-auto">
                        <LeftBoard arr={arr} boardToggle={boardToggle} handleLeftBoard={handleLeftBoard} />

                        <RightBoard />
                        <section className="row section">
                            <div className="head p-0 d-flex justify-content-between align-items-center">
                                <h1 className="main-head-title">{data.title}</h1>
                                <button className="submit-btn">Submit task</button>
                            </div>
                        </section>
                        <section className="row d-flex justify-content-center gap-5">
                            {
                                arr[0].tasks.map(task => {
                                    return <>
                                        <div className="sub-head col-12">
                                            <h3 className="sub-head-title">{task.task_title}</h3>
                                            <p className="sub-head-content">
                                                {task.task_description}
                                            </p>
                                        </div>
                                        {task.assets.map(asset => {
                                            return <>
                                                <Asset
                                                    title={asset.asset_title}
                                                    type={asset.asset_type}
                                                    content={asset.asset_content}
                                                    description={asset.asset_description}
                                                    assetType={asset.asset_type}
                                                />
                                            </>
                                        })}

                                    </>
                                })
                            }
                        </section >
                    </div>
                </main >
                <footer>
                </footer>
            </div >

        </>
    )
}

export default Home