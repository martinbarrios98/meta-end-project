import { beforeEach, describe, test } from "vitest";
import OrderDetails from ".";
import { render, screen, fireEvent} from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";

describe("OrderDetails", () => {
    const userMock = {
        firstName: "John",
        lastName: "Doe",
        phone: "1234567890",
        date: new Date(),
        guests: 2,
        time: "20:00",
        ocassion: "Birthday",
        success: true
    };
    beforeEach((ctx) => {
        ctx.handleResetUserConfirmation = () => {}
    })
    test("Should render", ({ handleResetUserConfirmation }) => {
        render(
            <AppContext.Provider
                value={{
                    handleResetUserConfirmation
                }}
            >
                <Router>
                    <OrderDetails user={userMock} />
                </Router>
            </AppContext.Provider>
        );
        expect(screen.getByText("John")).toBeDefined();
        expect(screen.getByText("Doe")).toBeDefined();
        expect(screen.getByText("1234567890")).toBeDefined();
    });
})