// import React , {component} from 'react'
// import {db,auth} from './services/firebase'

// class display extends React.Component{

//     componentDidMount(){

//         db.collection('fruits')
//     }
//     display(){
//         db.get()
//         db.then(snapshot =>{
//           const fruits = []
//           snapshot.forEach( doc=>{
//             const data = doc.data()
//             fruits.push(data)
  
//         })
//         this.setState({fruits:fruits })})
  
//         .catch( error => console.log(error))
    
//         {
//             this.state.fruits &&
//             this.state.fruits.map(fruits=>{
//               return(
//                 <div>
//                   <p>{fruits.Name}</p>
//                   <p>{fruits.Imageurl}</p>
//                   <p>{fruits.Description}</p>
//                 </div>
//               )
  
//               })
//           }

// export default  display