import classes from './card.module.css';

function card(props){

    return <div className={classes.card}>
        {props.children}
    </div>
}

export default card;