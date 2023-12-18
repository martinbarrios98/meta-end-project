import { describe, expect, test } from "vitest";
import Loader from './';
import { render, screen } from "@testing-library/react";

describe("Loader", () => {
    test("Should render", () => {
        render(<Loader />);
        expect(screen.getByText('Loading...'))
    });
});