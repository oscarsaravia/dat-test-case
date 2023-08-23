interface MyAppProps {
    initializedOptions: string[];
    onPositionChange: (positions: string[]) => void;
    onComplete: (positions: string[]) => void;
    onInit: () => void;
}

interface CarProps {
    onPositionChange: (positions: string[]) => void;
}

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