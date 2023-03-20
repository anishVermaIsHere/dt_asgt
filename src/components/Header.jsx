import React from 'react'
import brandlogo from '../assets/images/logo 1.svg'
import home from '../assets/icons/navbar/home.svg'
import tools from '../assets/icons/navbar/tools.svg'
import notify from '../assets/icons/navbar/notify.svg'
import profilepic from '../assets/images/user/profilepic.jpg'


const Header = () => {
    const [toggle, setToggle] = React.useState(true);

    return (
        <header>
            <nav className="navbar d-flex justify-content-between align-items-center">
                <a href="/index.html">
                    <img className="brandlogo" src={brandlogo} alt="deep_thought" />
                </a>
                <div className="menu-section small-device">
                {toggle && <ul className="menu-list d-flex align-items-center">
                        <li className="menu-item">
                            <span className="menu-icon">
                                <svg width="34" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="15" cy="16.183" rx="15" ry="16.183" fill="#3683F0" />
                                    <path d="M15.2031 11.7139L9.8125 16.167V20.9424C9.8125 21.2061 10.0176 21.4111 10.2812 21.4111H13.5625C13.7969 21.4111 14.002 21.2061 14.002 20.9424V18.1299C14.002 17.8955 14.2363 17.6611 14.4707 17.6611H16.3457C16.6094 17.6611 16.8145 17.8955 16.8145 18.1299V20.9424C16.8145 21.2061 17.0488 21.4111 17.2832 21.4111H20.5938C20.8281 21.4111 21.0625 21.2061 21.0625 20.9424V16.1377L15.6426 11.7139C15.584 11.6553 15.4961 11.626 15.4375 11.626C15.3496 11.626 15.2617 11.6553 15.2031 11.7139ZM23.7285 14.7314L21.2969 12.71V8.66699C21.2969 8.46191 21.1211 8.31543 20.9453 8.31543H19.3047C19.0996 8.31543 18.9531 8.46191 18.9531 8.66699V10.7764L16.3164 8.6084C16.082 8.43262 15.7598 8.31543 15.4375 8.31543C15.0859 8.31543 14.7637 8.43262 14.5293 8.6084L7.11719 14.7314C7.0293 14.79 6.9707 14.9072 6.9707 14.9951C6.9707 15.083 7.0293 15.1709 7.05859 15.2295L7.82031 16.1377C7.87891 16.2256 7.9668 16.2549 8.08398 16.2549C8.17188 16.2549 8.25977 16.2256 8.31836 16.167L15.2031 10.5127C15.2617 10.4541 15.3496 10.4248 15.4375 10.4248C15.4961 10.4248 15.584 10.4541 15.6426 10.5127L22.5273 16.167C22.5859 16.2256 22.6738 16.2549 22.7617 16.2549C22.8789 16.2549 22.9668 16.2256 23.0254 16.1377L23.7871 15.2295C23.8457 15.1709 23.875 15.083 23.875 14.9951C23.875 14.9072 23.8164 14.79 23.7285 14.7314Z" fill="white" />
                                </svg>
                            </span>
                        </li>
                        <li className="menu-item">
                            <span className="menu-icon">
                                <svg width="33" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="15" cy="16.183" rx="15" ry="16.183" fill="#3683F0" />
                                    <path d="M22.6777 18.9502L19.25 15.5225C18.5469 14.8486 17.5508 14.7021 16.7305 15.1123L13.625 12.0068V10.1611L9.875 7.34863L8 9.22363L10.8125 12.9736H12.6289L15.7344 16.1084C15.3535 16.9287 15.4707 17.9248 16.1445 18.5986L19.5723 22.0557C20.0117 22.4658 20.6855 22.4658 21.125 22.0557L22.6777 20.5029C23.0879 20.0635 23.0879 19.3896 22.6777 18.9502ZM17.6973 13.9404C18.5469 13.9404 19.3086 14.2627 19.8945 14.8486L20.4805 15.4346C20.9199 15.2295 21.3594 14.9365 21.7402 14.5557C22.8242 13.4717 23.2051 11.9482 22.8535 10.5713C22.7949 10.3076 22.4727 10.2197 22.2676 10.3955L20.0996 12.5928L18.1074 12.2412L17.7852 10.249L19.9531 8.08105C20.1582 7.87598 20.041 7.55371 19.7773 7.49512C18.4004 7.14355 16.877 7.52441 15.793 8.6084C14.9434 9.42871 14.5625 10.542 14.5625 11.626L16.9941 14.0283C17.2285 13.9697 17.4629 13.9404 17.6973 13.9404ZM14.6504 16.3428L13.0098 14.7021L8.52734 19.1553C7.79492 19.8877 7.79492 21.0889 8.52734 21.8213C9.25977 22.5537 10.4609 22.5537 11.1934 21.8213L14.7969 18.1885C14.5918 17.6025 14.5039 16.9873 14.6504 16.3428ZM9.875 21.1768C9.46484 21.1768 9.17188 20.8838 9.17188 20.4736C9.17188 20.0928 9.46484 19.7705 9.875 19.7705C10.2559 19.7705 10.5781 20.0928 10.5781 20.4736C10.5781 20.8838 10.2559 21.1768 9.875 21.1768Z" fill="white" />
                                </svg>
                            </span>
                        </li>
                        <li className="menu-item">
                            <span className="menu-icon">
                                <svg width="33" height="33" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.576 0.433594C6.98751 0.433594 0 7.94002 0 17.1664C0 26.3928 6.98751 33.8992 15.576 33.8992C24.1646 33.8992 31.1521 26.3928 31.1521 17.1664C31.1521 7.94002 24.1646 0.433594 15.576 0.433594ZM15.576 27.4635C14.011 27.4635 12.7664 26.7507 12.5994 25.2448C12.595 25.1998 12.5994 25.1543 12.6125 25.1113C12.6255 25.0682 12.6469 25.0286 12.6752 24.9951C12.7034 24.9615 12.738 24.9347 12.7765 24.9165C12.8151 24.8983 12.8568 24.889 12.8989 24.8892H18.2494C18.292 24.8889 18.3341 24.8983 18.373 24.9168C18.4119 24.9354 18.4467 24.9626 18.475 24.9967C18.5034 25.0308 18.5246 25.071 18.5374 25.1146C18.5501 25.1582 18.5541 25.2042 18.549 25.2496C18.358 26.7274 17.1247 27.4635 15.576 27.4635ZM22.9148 23.6021H8.23733C7.3507 23.6021 6.88941 22.3954 7.39937 21.7518C8.62224 20.196 9.48641 19.542 9.48641 15.2518C9.48641 11.3204 11.4139 9.92543 13.006 9.24486C13.1156 9.19581 13.2143 9.12265 13.296 9.0301C13.3776 8.93754 13.4403 8.82764 13.48 8.70748C13.7563 7.72201 14.5381 6.86928 15.576 6.86928C16.614 6.86928 17.3943 7.72201 17.6728 8.70828C17.7128 8.82843 17.7756 8.93828 17.8574 9.03082C17.9391 9.12336 18.038 9.19653 18.1476 9.24566C19.7359 9.92463 21.6672 11.322 21.6672 15.2526C21.6672 19.5428 22.5306 20.1968 23.7535 21.7526C24.2582 22.3954 23.7962 23.6021 22.9148 23.6021Z" fill="#3683F0" />
                                </svg>
                            </span>
                        </li>
                        <li className="menu-item">
                            <span className="menu-icon user-pic">
                                <img src={profilepic} alt="user_pic" />
                            </span>
                        </li>
                    </ul>}
                    <div className="menu-options" onClick={() => setToggle(prev => prev = !prev)}>
                        <span className="menu-icon">
                            <svg width="4" height="3" viewBox="0 0 4 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="1.51347" cy="1.49619" rx="1.51347" ry="1.49619" fill="#3683F0" />
                            </svg>
                        </span>
                        <span className="menu-icon">
                            <svg width="4" height="3" viewBox="0 0 4 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="1.51347" cy="1.49619" rx="1.51347" ry="1.49619" fill="#3683F0" />
                            </svg>
                        </span>
                        <span className="menu-icon">
                            <svg width="4" height="3" viewBox="0 0 4 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="1.51347" cy="1.49619" rx="1.51347" ry="1.49619" fill="#3683F0" />
                            </svg>
                        </span>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header