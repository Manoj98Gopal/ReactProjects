import { createElement } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "../pages/Contact";

describe("Contact Us Page", () => {

  it("should render the contact us page", () => {
    render(createElement(Contact));
    const heading = screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
  });

  it("should render the contact form", () => {
    render(createElement(Contact));
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const messageInput = screen.getByLabelText("Message");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });


});
