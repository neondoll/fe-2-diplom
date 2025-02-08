import OrderConfirmation from "./routes/OrderConfirmation/OrderConfirmation";
import Passengers from "./routes/Passengers/Passengers";
import Paths from "./paths";
import Payment from "./routes/Payment/Payment";
import Root from "./routes/Root/Root";
// import ScrollArea from "./components/ScrollArea/ScrollArea";
import Selection from "./routes/Selection/Selection";
import SelectionSeats from "./routes/Selection/Seats/SelectionSeats";
import SelectionTrain from "./routes/Selection/Train/SelectionTrain";
import SuccessfulOrder from "./routes/SuccessfulOrder/SuccessfulOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      {/* <ScrollArea className="w-screen h-screen"> */}
      <BrowserRouter basename="/fe-2-diplom/">
        <Routes>
          <Route path={Paths.ROOT} Component={Root} />
          <Route path={Paths.SELECTION} Component={Selection}>
            <Route path={Paths.SELECTION_TRAIN} Component={SelectionTrain} />
            <Route path={Paths.SELECTION_SEATS} Component={SelectionSeats} />
          </Route>
          <Route path={Paths.PASSENGERS} Component={Passengers} />
          <Route path={Paths.PAYMENT} Component={Payment} />
          <Route path={Paths.ORDER_CONFIRMATION} Component={OrderConfirmation} />
          <Route path={Paths.SUCCESSFUL_ORDER} Component={SuccessfulOrder} />
        </Routes>
      </BrowserRouter>
      {/* </ScrollArea> */}
    </>
  );
}
