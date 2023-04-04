
import { render, fireEvent, screen } from "@testing-library/react";

import { StyledButton } from ".";


describe("Quiz component", () => {
    it("should call onClick handler when clicked with answer2", () => {
        const onClick = jest.fn();
        const answer2 = "answer2";

        render(<StyledButton onClick={onClick}>{answer2}</StyledButton>);

        const answer2Button = screen.getByText(answer2);
    
        fireEvent.click(answer2Button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});




