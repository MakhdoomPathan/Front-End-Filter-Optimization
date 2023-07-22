This is a Filter that works for xlsx files. 
To use this for your data first make the following changes and then upload -

a-Change the number of multiselect- Dropdown 
b-In Product Reducer.jsx in SET_API case change the column name properly (eg. item.mod3 -> item.mod8000)
c-Then update the initialState with the number of columns required .
d-add/remove the UPDATE_MOD ,UPDATE_TABLE function and handle_number_select function and cases according to the number of columns .

After doing all the modification you can upload your file and with the help of filter dropdown can filter data which will be reflected in the table .
Currently the code is according to the 'dataset_small.xlsx' file in the public folder.
