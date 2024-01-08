/**
 * 任務：實作一個 async 函式 `fetchData`，該函式應該能夠從指定的 URL 取得資料。
 * 範例：fetchData('https://jsonplaceholder.typicode.com/todos/1') 應該回傳一個包含 id、title 等屬性的物件
 * @param url - 要取得資料的 URL
 * @returns - 回傳一個 Promise，該 Promise resolve 的值應該是從 URL 取得的資料
 */

// 請在下方寫下你的程式碼

export async function fetchData(url: string) {
    try {
        const response = await fetch(url);
    
        if (!response.ok) {
            throw new Error('錯誤訊息!!!');
        }
    
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('錯誤訊息!!!', error);
        return null;
    }
}