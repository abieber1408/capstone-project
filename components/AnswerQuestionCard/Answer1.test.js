
 import { render, fireEvent, screen } from "@testing-library/react";

import { StyledButton } from "./ChangeAnswerQuestion";

describe("AnswerQuestion component", () => {
    it("should call onClick handler when clicked with answer1", () => {
        const onClick = jest.fn();
        const answer1 = "answer1";

        render(<StyledButton onClick={onClick}>{answer1}</StyledButton>);

        const answer1Button = screen.getByText(answer1);
    
        fireEvent.click(answer1Button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});


