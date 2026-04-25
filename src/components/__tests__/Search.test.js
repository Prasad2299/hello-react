import { render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// FAKE FETCH AS TEST RUNS ON JSDOM FETCH FN OF BROWSER
global.fetch = jest.fn(()=>{
  return Promise.resolve(()=>{
    json:()=>{
      return Promise.resolve(MOCK_DATA)
    }
  })
})

it("Should render body component with search",async()=>{
  // render(<Body/>)
  //act return promise inside that there asycn function to render component
  await act(async ()=> render(<BrowserRouter><Body/></BrowserRouter>))
  const Searchbtn = screen.getByRole("button",{name:"SEARCH"})
  console.log(Searchbtn);
  expect(Searchbtn).toBeInTheDocument()
})