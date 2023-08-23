import { CSSProperties } from "react"

export const CircleButton = ({id, background, size, top, left, showId, isActive=false, customClick}: CircleButtonProps) => {
    const circleButtonStyle: CSSProperties = {
        width: `${size}vw`,
        height: `${size}vw`,
        backgroundColor: isActive ? 'orange' : background,
        borderRadius: '50%',
        top: `${top}%`,
        left: `${left}%`,
        position: 'absolute',
        border: '3px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'rotate(90deg)',
    }

    const showIdStyle: CSSProperties = {
        color: 'black',
        fontSize: '1.5vw',
        textAlign: 'center',
        fontWeight: 'bold',
        userSelect: 'none',
    }

    const handleClick = () => {
        if (customClick) customClick(id)
    }

    return (
        <div
            id={ id }
            style={ circleButtonStyle }
            className="circle"
            onClick={ handleClick }
        >
            { showId && <span style={ showIdStyle }>{ id }</span> }
        </div>
    )
}
