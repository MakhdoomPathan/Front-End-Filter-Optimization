import React, { createContext,useContext, useEffect, useReducer } from 'react'
import reducer from '../Reducer/ProductReducer';
import * as  XLSX from 'xlsx';
import axios from 'axios';

const  AppContext = createContext();

const initialstate={

    KeyVal:[],
    number: [],
    numberSelected:[],

    mod3: [],
    mod3Selected:[],

    mod4: [],
    mod4Selected:[],

    mod5: [],
    mod5Selected:[],

    mod6 : [],
    mod6Selected:[],

    products:[],
    tableContent:[],

    tableContentN:[],
    tableContent3:[],
    tableContent4:[],
    tableContent5:[],
    tableContent6:[],
   
}

const AppProvider= ({children})=>{
   
    
    const [state,dispatch]=useReducer(reducer,initialstate)
   
    const readfile=async(e)=>{
      const file =e.target.files[0];
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      console.log(jsonData);  
      dispatch({type:"SET_API_DATA",payload:jsonData});
      };
     

      const handle_number_select = (selectedList) => {
        dispatch({type:"GET_NUMBER_SELECTED_DATA",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_NUMBER",payload:selectedList});
     
        if(state.mod3Selected.length>0){   
        dispatch({type:"UPDATE_TABLE_MOD3",payload:selectedList});
        }

        dispatch({type:"UPDATE_MOD4"});
        
        if (state.mod4Selected.length>0) {
        dispatch({type:"UPDATE_TABLE_MOD4",payload:selectedList});
        }

        dispatch({type:"UPDATE_MOD5"});
      
        if (state.mod5Selected.length>0) {
            dispatch({type:"UPDATE_TABLE_MOD5",payload:selectedList});
        }

        dispatch({type:"UPDATE_MOD6"});
       
        if (state.mod6Selected.length>0) {
            dispatch({type:"UPDATE_TABLE_MOD6",payload:selectedList});
        }
           
      };

   

      const handle_number_mod3 = (selectedList) => {

        dispatch({type:"GET_MOD3_SELECTED_DATA",payload:selectedList});  
        dispatch({type:"UPDATE_TABLE_NUMBER",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_MOD3",payload:selectedList});
        dispatch({type:"UPDATE_MOD4"});
        

        if (state.mod4Selected.length>0) {
        dispatch({type:"UPDATE_TABLE_MOD4",payload:selectedList});
        }

        dispatch({type:"UPDATE_MOD5"});
      
        if (state.mod5Selected.length>0) {
            dispatch({type:"UPDATE_TABLE_MOD5",payload:selectedList});
        }

        dispatch({type:"UPDATE_MOD6"});

        if (state.mod6Selected.length>0) {
            dispatch({type:"UPDATE_TABLE_MOD6",payload:selectedList});
        }
            
      };



      const handle_number_mod4 = (selectedList) => {
        dispatch({type:"GET_MOD4_SELECTED_DATA",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_NUMBER",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_MOD3",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_MOD4",payload:selectedList});
        dispatch({type:"UPDATE_MOD5"});
       
        if (state.mod5Selected.length>0) {
            dispatch({type:"UPDATE_TABLE_MOD5",payload:selectedList});
        }

        dispatch({type:"UPDATE_MOD6"});

        if (state.mod6Selected.length>0) {
            dispatch({type:"UPDATE_TABLE_MOD5",payload:selectedList});
        }
               
      };

  

      const handle_number_mod5 = (selectedList) => {
        dispatch({type:"GET_MOD5_SELECTED_DATA",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_NUMBER",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_MOD3",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_MOD4",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_MOD5",payload:selectedList});
        dispatch({type:"UPDATE_MOD6"});

        if (state.mod6Selected.length>0) {
            dispatch({type:"UPDATE_TABLE_MOD6",payload:selectedList});
        }
      };

      const handle_number_mod6 = (selectedList) => {
        dispatch({type:"GET_MOD6_SELECTED_DATA",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_NUMBER",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_MOD3",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_MOD4",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_MOD5",payload:selectedList});
        dispatch({type:"UPDATE_TABLE_MOD6",payload:selectedList}); 
      };

     

    return <AppContext.Provider value={{...state,readfile,handle_number_select,handle_number_mod3,handle_number_mod4,handle_number_mod5,handle_number_mod6}}>{children}</AppContext.Provider>;
};

const useProductContext =()=>{
    return useContext(AppContext);
                              }
                              
export {AppProvider,AppContext,useProductContext};


















