import '../App.css';

export default function Loading(props) {
    
    return (

        <div class="ui active dimmer">
            <div class="ui text loader">{props.message}</div>
        </div>

    ); 
}

Loading.defaultProps = {
    message : 'Loading'

}