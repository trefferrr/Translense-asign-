import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home";
import OwnerDetails from "../Pages/OwnerDetails";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ownerdetails" element={<OwnerDetails />} />
    </Routes>
}
export default AllRoutes;