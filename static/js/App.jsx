
class App extends React.Component {
    constructor(){
        super();
    }
    
    
    render(){
        return( 
           
                <div>
                <Loc />
                <Building />
                <Solar />
                <HomeProds />
                <CommProds />
                </div>
        );
    }    
}

// class Tracking extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {location: undefined,
//                         building_type: undefined,
//                         solar_type: undefined,
//                         products: undefined}
//     }
// }

ReactDOM.render(<App />, document.getElementById("app"));