import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockRestMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart"

global.fetch = jest.fn(() => {
  return Promise.resolve(() => {
    jest: () => {
      return Promise.resolve(MOCK_DATA);
    };
  });
});

it("Should render restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>,
    ),
  );

  const accordianHeader = screen.getByText("Grilled Chicken (4)");

  fireEvent.click(accordianHeader);

  const foodItem = screen.getAllByTestId("foodItem");

  expect(foodItem.length).toBe(4);

  const addBtns = screen.getByRole("button", { name: "Add +" });

  console.log(addBtns);


  expect(screen.getByText("Cart - (0 items)").toBeInTheDocument())

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)").toBeInTheDocument())

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)").toBeInTheDocument())

  expect(screen.getAllByTestId("foodItem").length).toBe(7)

  fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))

  expect(screen.getAllByTestId("foodItem").length).toBe(5)

  expect(screen.getByText("Cart is empty .Please enter ...")).toBeInTheDocument()
});
