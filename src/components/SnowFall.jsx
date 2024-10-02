import Snowfall from 'react-snowfall'
import logo from '../assets/img/banner-shape.svg';
const snowflake1 = document.createElement('img');
snowflake1.src = logo;
const images = [snowflake1]

export default function SnowFall() {
    return (
        <div className='common-snowfall fixed top-0 left-0 w-full h-full -z-10'>
            <Snowfall
                snowflakeCount={20}
                style={{ zIndex: 0 }}
                snowflakeColor="white"
                images={images}
                radius={[80, 140]}
                speed={[.20, .20]}
                wind={[-0.5, 1.0]}
            />
        </div>
    )
}
