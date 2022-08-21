
export default function Comment(props) {
    const { author, date, text, src } = props;
    return (
        <div className="comment">
            <a className="avatar">
                <img src={src} alt='test' />
            </a>
            <div class="content">
                <a className="author">{author}</a>
                <div className="metadata">
                    <div className="date">{date}</div>
                </div>
                <div className="text">
                    <p>{text}</p>
                </div>
                
            </div>
        </div>



    );
}






