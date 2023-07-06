import React, {useState} from 'react';

const Switch = () => {
    const [activeIndex, setActiveIndex] = useState<number|null>(null);
    const handleClick = (index:number) =>
    {
        setActiveIndex(index === activeIndex ? null : index)
    }

    return (
        <div>
            <ul className='list-switch'>
                <li className={`list-switch__item ${activeIndex === 0 ? 'clicked' : ''}`} onClick={() => handleClick(0)}>
                    <svg className={`list-switch__svg ${activeIndex === 0 ? 'clicked' : ''}`} width="6" height="16" viewBox="0 0 6 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="6" height="16" rx="3" transform="matrix(1 0 0 -1 0 16)" fill="#8D3200" fill-opacity="0.1"/>
                    </svg>
                </li>
                <li className={`list-switch__item ${activeIndex === 1 ? 'clicked' : ''}`} onClick={() => handleClick(1)}>
                    <svg className={`list-switch__svg ${activeIndex === 1 ? 'clicked' : ''}`} width="6" height="16" viewBox="0 0 6 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="6" height="16" rx="3" transform="matrix(1 0 0 -1 0 16)" fill="#8D3200" fill-opacity="0.1"/>
                    </svg>
                </li>
                <li className={`list-switch__item ${activeIndex === 2 ? 'clicked' : ''}`} onClick={() => handleClick(2)}>
                    <svg className={`list-switch__svg ${activeIndex === 2 ? 'clicked' : ''}`} width="6" height="16" viewBox="0 0 6 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="6" height="16" rx="3" transform="matrix(1 0 0 -1 0 16)" fill="#8D3200" fill-opacity="0.1"/>
                    </svg>
                </li>
                <li className={`list-switch__item ${activeIndex === 3 ? 'clicked' : ''}`} onClick={() => handleClick(3)}>
                    <svg className={`list-switch__svg ${activeIndex === 3 ? 'clicked' : ''}`} width="6" height="16" viewBox="0 0 6 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="6" height="16" rx="3" transform="matrix(1 0 0 -1 0 16)" fill="#8D3200" fill-opacity="0.1"/>
                    </svg>
                </li>
            </ul>
        </div>
    );
};

export default Switch;