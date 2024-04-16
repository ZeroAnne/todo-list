import React, { createContext, useState, useContext,useEffect } from 'react'

//建立context
const ListContext = createContext()

export function ListProvider({
    children
}) {
    const [allThings, setAllThings] = useState([{ id: "1", name: "c9", checked: false }]);//顯示清單的所有內容
    const [inputValue, setInputValue] = useState('');// 輸入值的狀態
    const [percentLine , setPercentLine]=useState()
    useEffect(() => {
        
      }, [percentLine])
    // function 
    //輸入值儲存狀態
    const handleInputChange = (e) => {
        setInputValue(e.target.value);  // 更新状态
    };

    //按鈕送出
    const handleButtonClick = () => {
        // 擴充checkedbox，並為每個項目添加一個基於時間的 ID
        const newInput = {
            id: Date.now(), //時間戳ID
            name: inputValue,
            checked: false
        };
        // 儲存至所有清單內容狀態
        setAllThings([...allThings, newInput]);
        // 清空輸入欄位
        setInputValue('');
    };
    //checkedbox更改屬性
    const handleCheckboxChange = (itemid) => {
        // 創建一個新陣列，更改 checked 屬性
        const updatedThings = allThings.map((item) => {
            if (item.id === itemid) {
                return { ...item, checked: !item.checked };
            }
            return item; // 不改變其他項目
        });
        setAllThings(updatedThings); // 更新狀態
    };

    //刪除項目
    const handleDelete = (itemid) => {
        const deleteThings = allThings.filter((item) => item.id !== itemid);
        setAllThings(deleteThings); // 更新狀態
    }

    return (
        <ListContext.Provider
            value={{
                allThings,
                setAllThings,
                inputValue,
                setInputValue,
                handleInputChange,
                handleButtonClick,
                handleCheckboxChange,
                handleDelete,
            }}
        >
            {children}
        </ListContext.Provider>
    )
}
//在任何子元件層級深度,使用 useContext 勾子讀取它
export const useList = () => useContext(ListContext)
