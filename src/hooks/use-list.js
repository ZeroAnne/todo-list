import React, { createContext, useState, useContext,useEffect } from 'react'

//建立context
const ListContext = createContext()

export function ListProvider({
    children
}) {
    const [allThings, setAllThings] = useState([]);//顯示清單的所有內容
    const [inputValue, setInputValue] = useState('');// 輸入值的狀態
    const [percentLine , setPercentLine]=useState(0)//進度條狀態
    const [sorteded, setSorted] = useState(false);//已完成事項排序開關

    //監聽事件
    useEffect(() => {
        // 分別計算全部及已勾選數量
        const totalItems = allThings.length;
        const completedItems = allThings.filter(item => item.checked).length;
    
        // 計算完成百分比
        const completedPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
        setPercentLine(completedPercentage); // 更新進度條狀態
      }, [allThings]); 

    // function 
    //輸入值儲存狀態
    const handleInputChange = (e) => {
        setInputValue(e.target.value);  // 更新狀態
    };

    //按鈕送出
    const handleButtonClick = () => {
        // 擴充checkedbox，並為每個事項添加一個基於時間的 ID
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
            return item; // 不改變其他事項
        });
        setAllThings(updatedThings); // 更新狀態
    };

    //刪除事項
    const handleDelete = (itemid) => {
        const deleteThings = allThings.filter((item) => item.id !== itemid);
        setAllThings(deleteThings); // 更新狀態
    }
    //刪除所有事項
    const handleAllDelete = () => {
        setAllThings([]);
    }

    //事項排序
    const sortedThings = allThings.sort((a, b) => {
        if (sorteded) {
          return a.checked ? 1 : -1;
        }
        return a.id - b.id;
      });

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
                handleAllDelete,
                percentLine,
                sorteded,
                setSorted,
                sortedThings
            }}
        >
            {children}
        </ListContext.Provider>
    )
}
//在任何子元件層級深度,使用 useContext 勾子讀取它
export const useList = () => useContext(ListContext)
