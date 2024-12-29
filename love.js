document.getElementById('love').addEventListener('click', function(event) {
    const gif = document.createElement('img');
    gif.src = 'love.gif'; // 設定 GIF 圖片路徑
    gif.style.position = 'absolute'; // 使 GIF 可以絕對定位
    gif.style.zIndex = '9999'; // 保證 GIF 在最上層
    gif.style.pointerEvents = 'none'; // 避免 GIF 阻擋點擊操作
    gif.style.width = '300px'; // 設定 GIF 大小
    gif.style.height = '300px'; 
    gif.style.transition = 'opacity 2s ease-out'; // 添加淡出動畫
    
    // 計算按鈕的中間位置來定位 GIF
    const rect = event.target.getBoundingClientRect();
    gif.style.left = `${rect.left + rect.width / 2 - 150}px`; // 水平居中
    gif.style.top = `${rect.top + rect.height / 2 - 150}px`; // 垂直居中
    
    // 將 GIF 添加到頁面
    document.body.appendChild(gif);
    
    // 設置淡出效果並移除 GIF
    setTimeout(() => {
        gif.style.opacity = 0; // 開始淡出
        setTimeout(() => gif.remove(), 2000); // 在淡出後移除 GIF
    }, 1000); // 1 秒後開始淡出
});

document.getElementById('nolove').addEventListener('mousemove', function() {
    const button = document.getElementById('nolove');
    const maxX = window.innerWidth - button.offsetWidth;  // 計算畫面寬度，確保按鈕不會超出視窗
    const maxY = window.innerHeight - button.offsetHeight; // 計算畫面高度，確保按鈕不會超出視窗
    
    // 隨機生成新的位置
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // 設置新的位置
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

// 當網頁加載完成後，自動播放音樂
window.addEventListener('load', function() {
    const audio = document.getElementById('background-music');
    audio.play().catch(error => {
        console.log("自動播放可能被瀏覽器阻止。", error);
    });
});