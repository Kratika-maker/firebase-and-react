import React from 'react'
import {db,auth} from './Services/firebase'
import { Grid, Typography } from '@material-ui/core'
//import {withStyles} from '@material-ui/core/styles'
import './card.css';
import './style.css';


class App extends React.Component{

  state ={
    fruits: null
  }

  componentDidMount(){

      db.collection('fruits')
        .get()
        .then(snapshot =>{
          const fruits = []
          snapshot.forEach( doc=>{
            const data = doc.data()
            fruits.push(data)

      })
      this.setState({fruits:fruits })})

      .catch( error => console.log(error))
  }

  resetForm=(e)=>{
    e.values=''
  }
  
 
   handleSubmit=(e) =>{
    
    e.preventDefault()

    var name =document.getElementById('name').value
    var imageurl =document.getElementById('imageurl').value
    var description =document.getElementById('description').value

    // saveMessage(name, imageurl, description)
    db.collection('fruits')
      .add({
        Name:name,
        Imageurl:imageurl,
        Description:description
      })
      // resetForm({ values:''})

  }

  
  

  render(){
    return(
      
     <div className ="App" >
      <div className="container">
      <div className="wrapper">
      <div className="company-info">
        <h3>ADD THE FRUIT</h3>
         </div>
        
        <div className="contact">
        <div className="alert">Your message has been sent</div>
         <form onSubmit={this.resetForm}>
         <form id="contactform " onSubmit = {this.handleSubmit}>
         
                <p>
                    <label >Name</label>
                    <input type="text" name="name" id="name" required />
                  </p>
                  <p>
                    <label>Imageurl</label>
                    <input type="url" name="imageurl" id="imageurl" />
                  </p>
                  <p>
                    <label>Description</label>
                    <textarea name="Description"  rows="3"  id="description" required></textarea>
                  </p>
                  <p class="full">
                    <button type="submit">Submit</button></p>
        </form>
        <p><button type="submit">Press to clear the Text area</button></p>
        </form>
          </div>
          </div>
          </div>
        
       {
            this.state.fruits && 
            this.state.fruits.map(fruits=>{
              return(
                <Grid container item lg={16}  display='grid'align='center' alignItems='center' justify='center'align-grid='center' padding-top='30px'>  
                  <div className = 'card-container'>
                    <p >{fruits.Name}</p>
                    <p><img src={fruits.Imageurl} alt = {fruits.Name} heigth='100px' width ='100px'></img></p>
                    <p>{fruits.Description}</p>
                  </div>
                  <br/><br/>
                </Grid>
              )

            })
        }
        </div>            
    )
  }
}

export default App


