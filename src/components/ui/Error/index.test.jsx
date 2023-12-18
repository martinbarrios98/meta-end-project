import Error from "./index";
import { render, screen } from "@testing-library/react";

describe("Error", () => {
    test("should render", () => {
        render(<Error />);
        expect(screen.getByText("Under construction")).toBeDefined();
    });
})