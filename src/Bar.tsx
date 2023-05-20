import { useEffect } from 'react';

interface IBarProps {
    id: number;
    revenue: number;
    barHeight: number;
}

const Bar = ({ revenue, barHeight, id }: IBarProps) => {
    useEffect(() => {
        const bar = document.getElementById(String(id));
        let actualHeight = Math.round((barHeight / 270) * 100);
        let height = 1;
        const fillBars = () => {
            if (height >= actualHeight) {
                clearInterval(intervalId);
            } else {
                height++;
                if (bar !== null) {
                    bar!.style.height = height + '%';
                }
            }
        };
        let intervalId = setInterval(fillBars, 0);
    }, []);

    return (
        <div className="container__bar" id={String(id)}>
            <div className="container__barIndicator">{revenue}</div>
        </div>
    );
};
export default Bar;