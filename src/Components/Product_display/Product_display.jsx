import React from 'react'
import DataTable from 'react-data-table-component'
import { useProductContext } from '../Context/Context';
import './Product_display.css'
import Multiselect from 'multiselect-react-dropdown';
import { readFile } from 'xlsx';


const Filter = () => {
 
  const{KeyVal,products,number,mod5,mod3,mod4,mod6,tableContent}=useProductContext(); //variables 
  const{readfile,handle_number_select,handle_number_mod3,handle_number_mod4,handle_number_mod5,handle_number_mod6}=useProductContext();  //functions

let column=[]
if (products.length>0) {
  column =KeyVal.map((key)=>({name :key ,selector: key }));
}

  return (
    <>

 <div className='Heading'> 
 <h1>Filter Optimization Project</h1>
<input type="file" onChange={(e)=>readfile(e)} />
</div>
<div className='ProductFlexbox'>
    <div className='FilterOptionContainer'>

      <div className='FilterOptions'>    
          <h3>Filter</h3>

          <Multiselect
          displayValue="key"
          onKeyPressFn={function noRefCheck(){}}
          onRemove={handle_number_select}
          onSearch={function noRefCheck(){}}
          onSelect={handle_number_select}
          options={number}
          showCheckbox
          placeholder={KeyVal[0]}
          />

        <Multiselect
          displayValue="key"
          onKeyPressFn={function noRefCheck(){}}
          onRemove={handle_number_mod3}
          onSearch={function noRefCheck(){}}
          onSelect={handle_number_mod3}
          options={mod3}
          showCheckbox
          placeholder={KeyVal[1]}
         />

        <Multiselect
          displayValue="key"
          onKeyPressFn={function noRefCheck(){}}
          onRemove={handle_number_mod4}
          onSearch={function noRefCheck(){}}
          onSelect={handle_number_mod4}
          options={mod4}
          showCheckbox
          placeholder={KeyVal[2]}
         />

        <Multiselect
          displayValue="key"
          onKeyPressFn={function noRefCheck(){}}
          onRemove={handle_number_mod5}
          onSearch={function noRefCheck(){}}
          onSelect={handle_number_mod5}
          options={mod5}
          showCheckbox
          placeholder={KeyVal[3]}
          />

        <Multiselect
          displayValue="key"
          onKeyPressFn={function noRefCheck(){}}
          onRemove={handle_number_mod6}
          onSearch={function noRefCheck(){}}
          onSelect={handle_number_mod6}
          options={mod6}
          showCheckbox
          placeholder={KeyVal[4]}
          />
              
      </div>

  </div>
     
 
    <div className='TableData'>

      <DataTable
        columns= {column}
        data={tableContent}
        pagination
        paginationPerPage={100} 
        fixedHeader
        paginationRowsPerPageOptions={[20,100]}
        />
      
    </div>
</div>



</>
    
  )
}

export default Filter



//ANOTHER APROACH TO DISPLAY TABLE 
{/* {tableContent.length>0 && (<table>
  <thead>
    <tr>
      {Object.keys(tableContent[0]).map((key)=>(//for 1-100 or any value it takes key not value so it willl be same 
        <th key={key}>{key}</th>
      ))}
    </tr>

  </thead>

  <tbody>
    {tableContent.map((row,index)=>(
     < tr key={index}>

      {Object.values(row).map((value,index)=>(
       
        <td key={index}>{value}</td>
      ))}
      
     </tr>
    ))}

  </tbody>

</table>)} */}


