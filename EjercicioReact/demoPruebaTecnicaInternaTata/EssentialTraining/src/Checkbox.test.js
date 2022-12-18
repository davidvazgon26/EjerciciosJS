import {render, fireEvent} from "@testing-library/react"
import {Checkbox} from "./Checkbox"

test("Verify checkbox",()=>{
    const {getByLabelText} = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});