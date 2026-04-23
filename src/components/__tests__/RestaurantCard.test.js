import { render ,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCard.json"

test("should test restaurant card component",() =>{
  render(<RestaurantCard resObj={MOCK_DATA}/>)
  const name = screen.getByText("KFC")
  expect(name).toBeInTheDocument()
})