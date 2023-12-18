import { beforeEach } from "vitest";
import ListContact from "./index";
import { render, screen } from "@testing-library/react";
import { AppContext } from "../../../context/AppContext";

const urlSocialMedia = [
    {
        tittle: "Twitter",
        url: "https://twitter.com/",
    },
    {
        tittle: "Instagram",
        url: "https://www.instagram.com/",
    },
    {
        tittle: "Facebook",
        url: "https://www.facebook.com/",
    }
]

describe("ListContact", () => {
    beforeEach((ctx) => {
        ctx.urlSocialMedia = [...urlSocialMedia];
    })
    test("should render", ({ urlSocialMedia }) => {
        render(
            <AppContext.Provider
                value={{
                    urlSocialMedia
                }}
            >
                <ListContact />
            </AppContext.Provider>
        );
        urlSocialMedia.forEach(( url ) => {
            expect(screen.getByText(url.tittle)).toBeDefined();
        })
    });
})