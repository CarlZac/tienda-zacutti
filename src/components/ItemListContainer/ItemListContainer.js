const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className={props.introClass}>{props.intro}</h1>
            <a className={props.linkClass} target="_blank" href={props.link}>{props.message}</a>
        </div>
    )
}

export default ItemListContainer;