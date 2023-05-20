import { useEffect, useState } from 'react';
import Bar from './Bar';

interface IData {
    id: number;
    accountingDate: string;
    revenueSum: number;
}

const Histogram = ({scaleMax}: {scaleMax: number}) => {
    const [data, setData] = useState<IData[]>([]);

    const getYScale = (num: number) => {
        const scaleValues = [num];
        let scaleStep = num;
        for (let i = 0; i < 4; i++) {
            scaleStep /= 2;
            if (String(scaleStep)[1] !== '0') {
                const roundedValue = String(scaleStep)[0] + '0' + String(scaleStep).slice(2);
                scaleStep = Number(roundedValue)
            }
            scaleValues.unshift(scaleStep);
        }
        scaleValues.unshift(0);
        return scaleValues;
    };

    const currentYScale = getYScale(scaleMax);

    const calculateBarHeight = (amount: number) => {
        for (let i = 0; i <= currentYScale.length; i++) {
            if (currentYScale[i] < amount && amount <= currentYScale[i + 1]) {
                const totalBarHeight = 270;
                const scaleStep = totalBarHeight / 5;
                const minScaleValue = currentYScale[i];
                const maxScaleValue = currentYScale[i + 1];
                const delta = maxScaleValue - minScaleValue;
                const percentOfDelta = delta / (amount - minScaleValue);
                return currentYScale.indexOf(minScaleValue) * scaleStep + scaleStep / percentOfDelta;
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await (
                    await fetch('https://api.mockfly.dev/mocks/9b6c9163-9f12-4a21-bb53-15ccaa60cd07/api/revenues/')
                ).json();
                setData(res);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container__histogram">
            <div className="container__barsWrapper">
                {data.map((item) => (
                    <Bar
                        key={item.id}
                        barHeight={calculateBarHeight(item.revenueSum)!}
                        revenue={item.revenueSum}
                        id={item.id}
                    />
                ))}
            </div>
            <div className="container__amounts">
                <ul>
                    {currentYScale.reverse().map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
            <div className="container__dates">
                <ul>
                    <li>01</li>
                    <li>05</li>
                    <li>10</li>
                    <li>15</li>
                    <li>20</li>
                    <li>25</li>
                    <li>30</li>
                </ul>
            </div>
        </div>
    );
};

export default Histogram;