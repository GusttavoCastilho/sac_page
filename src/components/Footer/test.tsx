import { renderWithTheme } from "../../utils/helpers";
import Footer from ".";

describe("<Footer />", () => {
  it("should render the correctly", () => {
    const { container } = renderWithTheme(<Footer />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        height: 60px;
        background-color: #A141EB;
      }

      <footer
        class="c0"
      />
    `);
  });
});
