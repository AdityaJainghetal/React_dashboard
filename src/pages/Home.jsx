import CartDashboard from "./Bargrap";

import Dashboard from "./piechart";


const Home=()=>{

    return(
        <>
        <div style={{paddingLeft:"300px", display:"grid" ,gridTemplateColumns: "auto"}}>
        
       <CartDashboard/>
       <br />
       <Dashboard/>
       

        </div>
        </>
    )
}
export default Home;