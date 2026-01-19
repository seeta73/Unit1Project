const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h5>{props.event}</h5>
            <h6>{props.location}</h6>
            <button className="details" onClick={() => window.open(props.link, '_blank')}>Learn More!</button>
        </td>
    )
}

export default Event;