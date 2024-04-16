import React, { createContext, useState, useContext } from 'react'

//建立context
const ListContext = createContext()

export function ListProvider({
    children
}) {
    //顯示清單的所有內容
    const [allThings, setAllThings] = useState("嗨","hi");
    // 輸入值的狀態
    const [inputValue, setInputValue] = useState('');

    // function 輸入值儲存狀態
    const handleInputChange = (e) => {
        setInputValue(e.target.value);  // 更新状态
    };

    // function 按鈕送出
    const handleButtonClick = () => {
        // console.log("輸入",inputValue);  
        // 儲存至所有清單內容狀態
        setAllThings(inputValue);
        //清空輸入欄位
        setInputValue('');
        // console.log("所有清單",allThings);

    };
    //最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它
    return (
        <ListContext.Provider
            value={{
                allThings, 
                setAllThings,
                inputValue, 
                setInputValue,
                handleInputChange,
                handleButtonClick,
            }}
        >
            {children}
        </ListContext.Provider>
    )
}
//在任何子元件層級深度,使用 useContext 勾子讀取它
export const useList = () => useContext(ListContext)
