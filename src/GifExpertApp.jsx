
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";



export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
    // console.log(newCategory)
    //setCategories(cat =>  [...cat, 'Genshin Impact'] )
    //setCategories([...categories, 'Genshin Impact'])
  }

  return (
    <>
      {/* titulo */}
      <h1>Gif Expert App</h1>

      {/* input de texto */}
      <AddCategory 
        onNewCategory={ event => onAddCategory(event) }
      //setCategories={ setCategories }
      />
      

      
      {
        categories.map( category => (<GifGrid key={category} category={ category } />))
        }
        

       

    </>
  )
}
