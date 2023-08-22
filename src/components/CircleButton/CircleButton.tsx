import { CSSProperties } from "react"

interface CircleButtonProps {
    id: string
    background: string,
    size: number,
    top: number,
    left: number,
    showId?: boolean
    isActive?: boolean
    customClick?: (id: string) => void
}

export const CircleButton = ({id, background, size, top, left, showId, isActive=false, customClick}: CircleButtonProps) => {
    const circleButtonStyle: CSSProperties = {
        width: `${size}vw`,
        height: `${size}vw`,
        backgroundColor: isActive ? 'green' : background,
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

    const hancleClick = () => {
        if (customClick) customClick(id)
    }

  return (
    <div
        id={ id }
        style={ circleButtonStyle }
        className="circle"
        onClick={ hancleClick }
    >
        { showId && <span style={ showIdStyle }>{ id }</span> }
    </div>
  )
}
