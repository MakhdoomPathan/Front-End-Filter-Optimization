

const ProductReducer = (state,action) => {
    
switch(action.type){
   
    case "GET_NUMBER_SELECTED_DATA":
    
    let number_key= action.payload.map((item)=>item.key)
    return{
        ...state,
        numberSelected:number_key, 
        };
 
 case "GET_MOD3_SELECTED_DATA":
    
    let mod3_key= action.payload.map((item)=>item.key)
    return{
        ...state,
        mod3Selected:mod3_key, 
            };

case "GET_MOD4_SELECTED_DATA":
   
    let mod4_key= action.payload.map((item)=>item.key)
     return{
        ...state,      
         mod4Selected:mod4_key,
        };


case "GET_MOD5_SELECTED_DATA":
    
    let mod5_key= action.payload.map((item)=>item.key)
    return{  
        ...state,
        mod5Selected:mod5_key,
            };
            
case "GET_MOD6_SELECTED_DATA":
   
    let mod6_key= action.payload.map((item)=>item.key) 
    return{
        ...state,
        mod6Selected:mod6_key,
         };   


//mod update functions

case "UPDATE_MOD3":

    let update_mod3;

    if(state.numberSelected.length>0){
        update_mod3=state.tableContentN.filter((item)=>state.numberSelected.includes(item[state.KeyVal[0]]));   
    }
    else{
        update_mod3=state.products;
    }

    return{
        ...state,
        mod3: Array.from(new Set(update_mod3.map((item) => item.mod3))).map((curr,index) => ({ key: curr, value: index})),
            
    };

            


case "UPDATE_MOD4":
        
    let update_mod4;


    if(state.mod3Selected.length>0){
        let common=(state.mod3.map(item=>item.key)).filter(value =>state.mod3Selected.includes(value));
        update_mod4=state.tableContent3.filter((item)=>common.includes(item[state.KeyVal[1]]));
    }

    else if(state.numberSelected.length>0){
        update_mod4=state.tableContentN.filter((item)=>state.numberSelected.includes(item[state.KeyVal[0]]));   
    } 

    else{
        update_mod4=state.products;
    }    

    return{
            ...state,
            mod4: Array.from(new Set(update_mod4.map((item) => item.mod4))).map((curr,index) => ({ key: curr, value: index})),                 
            };

       
case "UPDATE_MOD5":

    let update_mod5;

    if(state.mod4Selected.length>0){

        let common=(state.mod4.map(item=>item.key)).filter(value =>state.mod4Selected.includes(value));
        update_mod5=state.tableContent4.filter((item)=>common.includes(item[state.KeyVal[2]]));   
    }

    else if(state.mod3Selected.length>0){
        let common=(state.mod3.map(item=>item.key)).filter(value =>state.mod3Selected.includes(value));
        update_mod5=state.tableContent3.filter((item)=>common.includes(item[state.KeyVal[1]]));    
        }

    else if(state.numberSelected.length>0){
        update_mod5=state.tableContentN.filter((item)=>state.numberSelected.includes(item[state.KeyVal[0]]));
    }

    else{
    update_mod5=state.products
    }

    return{
        ...state,
         mod5: Array.from(new Set(update_mod5.map((item) => item.mod5))).map((curr,index) => ({ key: curr, value: index})),  
          };   
        
        
    
case "UPDATE_MOD6":

    let update_mod6

    if(state.mod5Selected.length>0){
        
        let common=(state.mod5.map(item=>item.key)).filter(value =>state.mod5Selected.includes(value));
        update_mod6=state.tableContent5.filter((item)=>common.includes(item[state.KeyVal[3]]));
    }

    else if(state.mod4Selected.length>0){
        let common=(state.mod4.map(item=>item.key)).filter(value =>state.mod4Selected.includes(value));
        update_mod6=state.tableContent4.filter((item)=>common.includes(item[state.KeyVal[2]]));
    }

    else if(state.mod3Selected.length>0){
        let common=(state.mod3.map(item=>item.key)).filter(value =>state.mod3Selected.includes(value));
        update_mod6=state.tableContent3.filter((item)=>common.includes(item[state.KeyVal[1]]));
    }

    else if(state.numberSelected.length>0){
        update_mod6=state.tableContentN.filter((item)=>state.numberSelected.includes(item[state.KeyVal[0]]));
    }

    else{ 
        update_mod6=state.products;
    }

    return{
        ...state,
        mod6: Array.from(new Set(update_mod6.map((item) => item.mod6))).map((curr,index) => ({ key: curr, value: index})),
                                        
            };   
    


case "SET_API_DATA":
    return{
        ...state,
        KeyVal: Object.keys(action.payload[0]).map((key)=>(key)),
        number:  [...new Set(action.payload.map((item) => item.number))].map((curr,index) => ({ key: curr, value: index})),
        mod3: Array.from(new Set(action.payload.map((item) => item.mod3))).map((curr,index) => ({ key: curr, value: index})),
        mod4: Array.from(new Set(action.payload.map((item) => item.mod4))).map((curr,index) => ({ key: curr, value: index})),
        mod5: Array.from(new Set(action.payload.map((item) => item.mod5))).map((curr,index) => ({ key: curr, value: index})),
        mod6 :  Array.from(new Set(action.payload.map((item) => item.mod6))).map((curr,index) => ({ key: curr, value: index})),
        tableContent: action.payload,
        tableContentN: action.payload,
        tableContent3: action.payload,
        tableContent4: action.payload,
        tableContent5: action.payload,
        tableContent6: action.payload,
        products: action.payload,    
    }
    
//TABLE UPDATE FUNCTIONS

case "UPDATE_TABLE_NUMBER":
    let modifyNumber 
    if (state.numberSelected.length>0){ 
       
        modifyNumber= state.products.filter(row => state.numberSelected.includes(row[state.KeyVal[0]]))
    }
   
    else{
        modifyNumber= state.products;
    }
  
    return{
        ...state,
        tableContent:modifyNumber,
        tableContentN:modifyNumber,
    }      


case "UPDATE_TABLE_MOD3":
    let modifyNumber3;
 
     if (state.mod3Selected.length>0 &&state.numberSelected>0){
       
        modifyNumber3= state.tableContentN.filter(row => state.mod3Selected.includes(row[state.KeyVal[1]]))
        }
     else if (state.mod3Selected.length>0 ){
       
        modifyNumber3= state.tableContent.filter(row => state.mod3Selected.includes(row[state.KeyVal[1]]))
        }
   
    else if (state.tableContent.length>0){

        modifyNumber3= state.tableContent;
    }
    else{
        modifyNumber3= state.products;
    }
    return{
        ...state,
        tableContent:modifyNumber3,
        tableContent3:modifyNumber3,
    
    }


case "UPDATE_TABLE_MOD4":
    
    let modifyNumber4

    if (state.mod4Selected.length>0 &&state.mod3Selected>0){
        
    modifyNumber4= state.tableContent3.filter(row => state.mod4Selected.includes(row[state.KeyVal[2]]))
    }
    else if (state.mod4Selected.length>0 ){
        
    modifyNumber4= state.tableContent.filter(row => state.mod4Selected.includes(row[state.KeyVal[2]]))
    }
    else if (state.tableContent.length>0){
            
        modifyNumber4= state.tableContent;
    }
    else{
        modifyNumber4= state.products;
    }

    return{
        ...state,
        tableContent:modifyNumber4,
        tableContent4:modifyNumber4,
    
    }


case "UPDATE_TABLE_MOD5":
    
    let modifyNumber5;

     if(state.mod5Selected.length>0 && state.mod4Selected>0) { 
    console.log("65454456")
    console.log(state.tableContent)
    modifyNumber5= state.tableContent4.filter(row => state.mod5Selected.includes(row[state.KeyVal[3]]));
        }
    else if(state.mod5Selected.length>0) {
        modifyNumber5= state.tableContent.filter(row => state.mod5Selected.includes(row[state.KeyVal[3]]));
    }
    else if (state.tableContent.length>0){
        
        modifyNumber5= state.tableContent;
    }
    else{
        modifyNumber5= state.products;
    }
    
    return{
        ...state,
        tableContent:modifyNumber5,
        tableContent5:modifyNumber5,
    
    }

case "UPDATE_TABLE_MOD6":
    
    let modifyNumber6;
    
     if(state.mod6Selected.length>0 &&state.mod5Selected>0){
        modifyNumber6= state.tableContent5.filter(row => state.mod6Selected.includes(row[state.KeyVal[4]]))
    }
    else if(state.mod6Selected.length>0 ){
        modifyNumber6= state.tableContent.filter(row => state.mod6Selected.includes(row[state.KeyVal[4]]))
    }
    else if (state.tableContent.length>0){
        
        modifyNumber6= state.tableContent;
    }
    else{
        modifyNumber6= state.products;
    }
    return{
        ...state,
        tableContent:modifyNumber6
    }  

default:return state;

    }

}

export default ProductReducer
