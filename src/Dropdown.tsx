import { FC, useState } from 'react';

const Dropdown: FC = () => {
    const listOfSelectors = ['За последний год', 'За последние 6 месяцев', 'За последний месяц'];
    const [renderedSelectors, setRenderedSelectors] = useState<string[]>([]);
    const [period, setPeriod] = useState<string>('За последний месяц');
    const [showSelectors, setShowSelectors] = useState(false);

    const handleOpenSelector = () => {
        setShowSelectors(!showSelectors);
        const filteredList = listOfSelectors.filter((selector) => selector !== period);
        setRenderedSelectors(filteredList)
    }

    const handleSelectPeriod = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
        setPeriod(currentTarget.textContent!)
        setShowSelectors(false);
    }

    return (
        <div className='container__dropdown'>
            <div className={`container__dropdownHead ${showSelectors ? 'container__dropdownHead_bodyShown' : null}`}
                onClick={handleOpenSelector}
            >
                {period}
            </div>
            <div className='container__dropdownBody'>
                <ul>
                    {renderedSelectors.map((selector, index) => (
                        <li onClick={handleSelectPeriod} key={index}>{selector}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Dropdown;