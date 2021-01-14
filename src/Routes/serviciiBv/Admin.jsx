import React, {useState} from 'react'
import { createSubCategory, createCategory, createService } from '../../components/serviciiBv/services'

const Admin = () => {

    const [cat, setCat] = useState('')
    const [subCat, setSubCat] = useState('')
    const [values, setValues] = useState({})

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
    }

    return (
        <div>
            <h1>Admin panel</h1>
            <input type="text" placeholder='cat' onChange={(e)=> setCat(e.target.value)}/>
            <input type="text" placeholder='subcat' onChange={(e)=> setSubCat(e.target.value)}/>
            
            <button onClick={()=> createCategory(cat)}>addC</button>
            <button onClick={()=> createSubCategory(cat, subCat)}>addSub</button>
            <form  >
                {[
                    {id: 'nume'},
                    {id: 'adresa'},
                    {id: 'gMapsUrl'},
                    {id: 'siteUrl'}
                 ].map((field)=>(
                    <input
                     type='text'
                     key={field.id}
                     name={field.id}
                     placeholder={field.id}
                     onChange={(e) => setValues({...values,[e.target.name]:e.target.value})}
                    />
                 ))
                }
              <button onClick={()=> {
                  createService(cat,subCat,values.nume,values)
                  handleReset()
                }}>
                    addServ
                </button>
            </form>
        </div>
    )
}

export default Admin
