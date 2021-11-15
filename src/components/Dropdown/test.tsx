import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../utils/helpers";
import Dropdown from ".";

describe("<Button />", () => {
  it("should render title and children", () => {
    const { container } = renderWithTheme(
      <Dropdown title="my title">my children</Dropdown>
    );

    expect(
      screen.getByRole("heading", { name: /my title/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/my children/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should handle open/close dropdown", () => {
    renderWithTheme(<Dropdown title="my title">my children</Dropdown>);

    const description = screen.getByText(/my children/i);

    expect(description).toHaveStyle({ opacity: 0 });
    expect(description.getAttribute("aria-hidden")).toBe("true");

    userEvent.click(screen.getByText(/my title/i));

    expect(description).toHaveStyle({ opacity: 1 });
    expect(description.getAttribute("aria-hidden")).toBe("false");
  });

  it("should handle icon from open/close dropdown", () => {
    renderWithTheme(<Dropdown title="my title">my children</Dropdown>);

    expect(
      screen.getByLabelText(/arrow-down/i).getAttribute("aria-hidden")
    ).toBe("true");

    userEvent.click(screen.getByLabelText(/arrow-down/i));

    expect(screen.getByLabelText(/arrow-up/i).getAttribute("aria-hidden")).toBe(
      "false"
    );
  });
});
