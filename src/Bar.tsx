interface IBarProps {
    revenue: number;
    barHeight: number;
}

const Bar = ({ revenue, barHeight }: IBarProps) => {
    return (
        <div className='container__bar' style={{ height:`${barHeight}px` }}>
            <div className='container__barIndicator'>{revenue}</div>
        </div>
    )
};
export default Bar;