import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/helpers";
import Button from ".";

describe("<Button />", () => {
  it("should render a correctly struct button and styles", () => {
    const { container } = renderWithTheme(<Button>Seja um franqueado</Button>);

    expect(
      screen.getByRole("button", { name: /Seja um franqueado/i })
    ).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 2.4rem",
      "font-size": "1.2rem",
      "text-transform": "uppercase",
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render an icon version", () => {
    renderWithTheme(
      <Button icon="/icons/editar.png">Seja um franqueado</Button>
    );

    expect(screen.getByText(/Seja um franqueado/i)).toBeInTheDocument();
  });

  it("should render a minimal version", () => {
    renderWithTheme(
      <Button icon="/icons/editar.png" minimal>
        Seja um franqueado
      </Button>
    );

    expect(
      screen.getByRole("button", { name: /Seja um franqueado/i })
    ).toHaveStyle({
      "border-bottom-left-radius": "10px",
      "border-bottom-right-radius": "10px",
    });
  });
});
