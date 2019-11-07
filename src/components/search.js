// import React, {Component} from "react";
// import {Link} from "react-router-dom";
// import {Progress, Button} from "bloomer";


// import {loadData} from "../utils/loadData";

// class CategoryList extends Component{
//     state ={
//         results: []
//     }
//     async componentDidMount(){
//         this.getCategories();
        
//     }
//     getCategories = async () => {
//         const categories = await loadData(
//             `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions,garlic&q=${submit}&p=3`
//         );
//         this.setState({
//             categories
//         })
//     }
//     render(){
//         const {categories} = this.state;
//         return (
//             <ul>
//             <Progress isColor="danger" progress-indeterminate-duration="3000s"></Progress>

//             {categories.map((category, id) =>{
//                return (
//                <li key={'category-${id}'}>
//                    <Link isColor="danger" to={`/category/${submit}`}>{submit}</Link>
//                 </li>

//                )
//             })}
//             </ul>
//         );
//     }

// }
// export default CategoryList;