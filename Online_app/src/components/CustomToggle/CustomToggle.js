import { useAccordionButton, Button } from "react-bootstrap";

// using for accordion 

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Button
            type="button"
            onClick={decoratedOnClick}
            className="w-50 mx-auto mb-3"
        >
            {children}
        </Button>
    );
}
export default CustomToggle;