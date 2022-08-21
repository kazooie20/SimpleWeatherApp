import '../App.css';

const seasonConfig = {
    Summer: {
        text: "Let's hit the beach!",
        weathericon: 'sun',
        iconColor: 'blue'
    },
    Winter: {
        text: "Damn bruh it's cold",
        weathericon: 'snowflake',
        iconColor : 'Orange'
    }
}


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

export default function SeasonDisplay(props) {

    const season = getSeason(props.lat, new Date().getMonth + 1);
    const { text, weathericon, iconColor } = seasonConfig[season]


    return (
        <div className={`season-display ${season}`}>
            <i className={`massive ${iconColor} iconleft ${weathericon} icon`}></i>
            <h1>{text}</h1>
            <i className={`massive ${iconColor} iconright ${weathericon} icon`}></i>
        </div>
    );
}