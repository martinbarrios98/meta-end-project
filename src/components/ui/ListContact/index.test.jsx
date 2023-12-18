import { beforeEach } from "vitest";
import ListContact from "./index";
import { render, screen } from "@testing-library/react";
import { AppContext } from "../../../context/AppContext";

const urlContact = [
    {
        tittle: "Phone number",
        url: "tel:+123456789",
    },
    {
        tittle: "Email",
        url: "mailto:littlelemon@example.com",
    },
    {
        tittle: "Address",
        url: "123 Main Street, Anytown USA 12345",
    }
]

describe("ListContact", () => {
    beforeEach((ctx) => {
        ctx.urlContact = [...urlContact];
    })
    test("should render", ({ urlContact }) => {
        render(
            <AppContext.Provider
                value={{
                    urlContact
                }}
            >
                <ListContact />
            </AppContext.Provider>
        );
        urlContact.forEach(( url ) => {
            expect(screen.getByText(url.tittle)).toBeDefined();
        })
    });
})