import { fireEvent, render ,screen} from "@testing-library/react";
import  Header  from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button",{name:"login"})

  expect(loginBtn).toBeInTheDocument()

});


it("Should render header component with cart - (0 items)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText("Cart - (0 items)")

  expect(cart).toBeInTheDocument()

});


it("Should render header component with cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/) // used regex for cart items 

  expect(cart).toBeInTheDocument()

});

it("Should render login btn to logout after click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button",{name:"login"})

  fireEvent.click(loginBtn)

  const logoutBtn = screen.getByRole("button",{name:"logout"})


  expect(logoutBtn).toBeInTheDocument()

});