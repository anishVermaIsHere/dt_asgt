import React from 'react'

const Asset = ({
    title,
    type,
    content,
    description,
    assetType
}) => {
    const [assetToggle,setAssetToggle]=React.useState(true);
    const [assetContent,setAssetContent]=React.useState(true);

    const handleAsset=(e)=>{
        setAssetToggle(prev=>prev=!prev);
        setAssetContent(prev=>prev=!prev);
    }

    const docMenu = ["File", "Edit", "View", "Insert", "Format", "Tools", "Table", "Help"];

    if (assetType == "display_asset") {
        return <div className="col-lg-5 col-md-5 col-sm-12 asset-container">
            <div className="asset">
                <div className="asset-top-bar d-flex justify-content-center align-items-center">
                    <p className="asset-title mb-0">{title}</p>
                    <div className="info-icon">
                        <span>i</span>
                    </div>
                </div>
                <div className="asset-content">
                    <p className="description mb-0"><strong>Description: </strong>
                        {description}</p>
                    <div className="task-asset-container">
                        <iframe className="video" src={content}>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    }
    else if (title == "Threadbuild") {
        return <>
            <div className="col-lg-5 col-md-5 col-sm-12 asset-container">
                <div className="asset">
                    <div className="asset-top-bar d-flex justify-content-center align-items-center">
                        <p className="asset-title mb-0">{title}</p>
                        <div className="info-icon">
                            <span>i</span>
                        </div>
                    </div>
                    <div className="asset-content">
                        <p className="description mb-0"><strong>Description: </strong>{description}</p>
                        <div className="task-asset-container">
                            <ul className="task-asset-accordian p-0">
                                <li className="d-flex justify-content-start align-items-center">
                                    <span className={assetToggle?"arrow-top":"arrow-down"} onClick={handleAsset}>
                                        <svg width="16" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0593 9.59961L8.94793 3.66593L2.8366 9.59961L0.958984 7.77285L8.94793 -0.000391006L16.9369 7.77285L15.0593 9.59961Z" fill="black" />
                                            <path d="M8.9131 3.63006L8.94793 3.59624L8.98276 3.63006L15.0592 9.52988L16.8652 7.77285L8.94793 0.0693722L1.03068 7.77285L2.83663 9.52988L8.9131 3.63006Z" stroke="black" stroke-opacity="0.4" stroke-width="0.1" />
                                        </svg>
                                    </span>
                                    <p className="accordian-title mb-0">Thread A</p>
                                    <div className="row asset-subcontainer">
                                        {assetContent&&
                                        <><div className="col-5 sub-thread">
                                            <div className="thread-top">
                                                <p>Sub thread 1</p>
                                            </div>
                                            <div className="thread-textbox">
                                                <textarea rows="3" cols="6" placeholder="Enter Text here" />
                                            </div>
                                        </div>
                                        <div className="col-5 sub-thread">
                                            <div className="thread-top">
                                                <p>Sub Interpretation 1</p>
                                            </div>
                                            <div className="thread-textbox">
                                                <textarea rows="3" cols="6" placeholder="Enter Text here" />
                                            </div>
                                        </div>
                                        <div className="tool-action-section">
                                            <div className="icon-section">
                                                <span className="tool-icon">
                                                    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.2236 19C4.2236 19.5 4.64596 20 5.2795 20H9.50311C10.1366 20 10.559 19.5 10.559 19V18H4.2236V19ZM7.3913 0C3.27329 0 0 3.1 0 7C0 9.4 1.26708 11.5 3.1677 12.7V15C3.1677 15.5 3.59006 16 4.2236 16H10.559C11.1925 16 11.6149 15.5 11.6149 15V12.7C13.5155 11.4 14.7826 9.3 14.7826 7C14.7826 3.1 11.5093 0 7.3913 0Z" fill="#323232" />
                                                    </svg>
                                                </span>
                                                <span className="tool-icon">
                                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21.7727 2C21.7727 0.9 20.8382 0 19.6832 0H2.8832C1.7282 0 0.783203 0.9 0.783203 2V14C0.783203 15.1 1.7282 16 2.8832 16H17.5832L21.7832 20L21.7727 2ZM17.5832 12H4.9832V10H17.5832V12ZM17.5832 9H4.9832V7H17.5832V9ZM17.5832 6H4.9832V4H17.5832V6Z" fill="#323232" />
                                                    </svg>
                                                </span>
                                                <span className="tool-icon">
                                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.4499 0H3.11654C1.82154 0 0.783203 0.857143 0.783203 1.90476V15.2381C0.783203 16.2857 1.82154 17.1429 3.11654 17.1429H7.7832L11.2832 20L14.7832 17.1429H19.4499C20.7332 17.1429 21.7832 16.2857 21.7832 15.2381V1.90476C21.7832 0.857143 20.7332 0 19.4499 0ZM12.4499 15.2381H10.1165V13.3333H12.4499V15.2381ZM14.8649 7.85714L13.8148 8.73338C12.9748 9.42861 12.4499 10 12.4499 11.4286H10.1165V10.9524C10.1165 9.90476 10.6414 8.95242 11.4814 8.25718L12.9281 7.05718C13.3598 6.71432 13.6165 6.2381 13.6165 5.71429C13.6165 4.66667 12.5665 3.80952 11.2832 3.80952C9.99987 3.80952 8.94987 4.66667 8.94987 5.71429H6.61654C6.61654 3.60952 8.70487 1.90476 11.2832 1.90476C13.8615 1.90476 15.9499 3.60952 15.9499 5.71429C15.9499 6.55238 15.5299 7.31429 14.8649 7.85714Z" fill="#323232" />
                                                    </svg>
                                                </span>
                                                <span className="tool-icon">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4044 6.867C13.236 4.356 12.1786 1.908 10.1952 0C8.19305 1.926 7.08879 4.374 6.87361 6.867C8.07115 7.479 9.17535 8.27101 10.139 9.23401C11.1026 8.28001 12.2069 7.488 13.4044 6.867ZM7.32312 9.25203C7.19214 9.16203 7.04227 9.08099 6.90193 8.99099C7.04227 9.08999 7.19214 9.16203 7.32312 9.25203ZM13.3295 9.02703C13.2078 9.10803 13.0765 9.17103 12.9549 9.26103C13.0765 9.17103 13.2078 9.10803 13.3295 9.02703ZM10.139 12.105C8.1275 9.15296 4.69393 7.2 0.783203 7.2C0.783203 11.988 3.92655 16.038 8.29571 17.541C8.88512 17.748 9.50281 17.901 10.139 18C10.7752 17.892 11.3835 17.739 11.9823 17.541C16.3515 16.038 19.4948 11.988 19.4948 7.2C15.5841 7.2 12.1505 9.15296 10.139 12.105Z" fill="#323232" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="select">
                                                <select name="" id="">
                                                    <option>Select Categ</option>
                                                </select>
                                                <select name="" id="">
                                                    <option>Select Process</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div className="button-section">
                                            <button>
                                                <span>+</span>
                                                Sub-thread</button>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 summary-thread">
                                                <div className="thread-top">
                                                    <p>Summary for Thread A</p>
                                                </div>
                                                <div className="thread-textbox">
                                                    <textarea rows="3" cols="6" placeholder="Enter Text here" />
                                                </div>
                                            </div>
                                        </div>
                                        </>}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
    else {
        return <>
            <div className="col-lg-5 col-md-5 col-sm-12 asset-container">
                <div className="asset">
                    <div className="asset-top-bar d-flex justify-content-center align-items-center">
                        <p className="asset-title mb-0">{title}</p>
                        <div className="info-icon">
                            <span>i</span>
                        </div>
                    </div>
                    <div className="asset-content">
                        <p className="description mb-0"><strong>Description: </strong>{description}</p>
                        <div className="task-asset-container">
                            <div className="row asset-subcontainer p-3">
                                <div className="col-12 input-wrapper">
                                    <label for="pointer-title" className="">Title</label>
                                    <div className="input-field">
                                        <input type="text" id="pointer-title" name="pointer-title" />
                                    </div>
                                </div>

                                <div className="col-12 input-wrapper">
                                    <label for="content" className="thread-top">
                                        Content
                                    </label>
                                    <div className="input-field d-flex flex-column">
                                        <div className="document-bar">
                                            <div className="document-menubar">
                                                <ul>
                                                    {docMenu.map(menu => <li className="doc-menu-item">{menu}</li>)}
                                                </ul>
                                            </div>
                                            <div className="document-toolbar">
                                                <ul className="tool-menu">
                                                    <li className="doc-menu-item">
                                                        <span>
                                                            <svg width="21" height="18"
                                                            viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.79978 3.1501L3.15002 7.13561M3.15002 7.13561L7.79978 11.1211M3.15002 7.13561L13.85 7.13561C16.0592 7.13561 17.85 8.92647 17.85 11.1356V14.8501" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                    <li className="doc-menu-item">
                                                        <span>
                                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.9431 3.32505L16.15 7.53197M16.15 7.53197L11.9431 11.7389M16.15 7.53197H6.85003C4.64089 7.53197 2.85003 9.32284 2.85003 11.532V15.675" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                    <li className="doc-menu-item">
                                                        <span>
                                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.5961 1.8999H17.0995M17.0995 1.8999V7.40335M17.0995 1.8999L11.5961 7.40335M7.40397 17.0999H1.90052M1.90052 17.0999V11.5964M1.90052 17.0999L7.60052 11.3999M17.1 11.596V17.0994M17.1 17.0994H11.5966M17.1 17.0994L11.5966 11.596M1.90002 7.40385L1.90002 1.9004M1.90002 1.9004L7.40348 1.9004M1.90002 1.9004L7.60002 7.6004" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                    <li className="doc-menu-item">
                                                        <select name="paragraph" id="paragraph">
                                                            <option value="paragraph">Pragraph</option>
                                                        </select>
                                                    </li>
                                                    <li className="doc-menu-item">
                                                        <span className="">
                                                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="2.5" cy="2.5" r="2.5" fill="#616161" />
                                                            </svg>
                                                        </span>
                                                        <span className="">
                                                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="2.5" cy="2.5" r="2.5" fill="#616161" />
                                                            </svg>
                                                        </span>
                                                        <span className="">
                                                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="2.5" cy="2.5" r="2.5" fill="#616161" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <textarea rows="3" cols="6" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    }


}

export default Asset