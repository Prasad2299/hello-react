import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// FAKE FETCH function AS TEST RUNS ON JSDOM FETCH FN OF BROWSER
global.fetch = jest.fn(()=>{
  return Promise.resolve(()=>{
    json:()=>{
      return Promise.resolve(MOCK_DATA)
    }
  })
})

it("Should search res list for burger text input",async()=>{
  // render(<Body/>)
  //act return promise inside that there asycn function to render component
  await act(async ()=> render(<BrowserRouter><Body/></BrowserRouter>))

  const cardsBeforeSearch = screen.getAllByTestId("resCard")

  expect(cardsBeforeSearch.length).toBe(8)

  const Searchbtn = screen.getByRole("button",{name:"SEARCH"})
  console.log(Searchbtn);

  const searchInput = screen.getByTestId("searchInput")
  console.log(searchInput);

  //{target:{value:"burger"} => it indicate value get by event(e) when you enter into input box. we provide fake value burger.
  fireEvent.change(searchInput,{target:{value:"burger"}})

  fireEvent.click(Searchbtn)
  //screen should render 8 res card
  const cardsAfterSearch = screen.getAllByTestId("resCard")
  expect(cardsAfterSearch.length).toBe(1)
})

it("Should render top rated restaurant list",async() =>{
  await act(async()=> render(<BrowserRouter><Body/></BrowserRouter>))
  const cardsBeforeFilter = screen.getAllByTestId("resCard")

  expect(cardsBeforeFilter.length).toBe(8)

  const filterBtn = screen.getByRole("button",{name:"TOP RATING HOTEL"})

  fireEvent.click(filterBtn)

  const cardsAfterFilter = screen.getAllByTestId("resCard")

  expect(cardsAfterFilter.length).toBe(6)
})