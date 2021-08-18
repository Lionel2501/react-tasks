import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className="header">
            <h1 /*style={ headerStyle }*/>{ title } </h1>
            <Button 
            onClick={onAdd} 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} />
        </header>
    )
}

Header.defaultProps = {
    title:'Task Tracker'
}

// const headerStyle = {
//     color: 'green',
//     fontSize: '40px'
// }

export default Header
