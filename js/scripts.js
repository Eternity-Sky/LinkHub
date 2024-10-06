// 监听页面加载完成事件
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const linkItems = document.querySelectorAll('.link-category a');

    // 监听输入框的输入事件
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase(); // 获取用户输入的小写字母

        // 遍历所有链接，根据输入过滤
        linkItems.forEach(function(link) {
            const linkText = link.textContent.toLowerCase(); // 获取链接文本的小写字母
            if (linkText.includes(searchTerm)) {
                link.style.display = ''; // 如果包含搜索词，显示链接
            } else {
                link.style.display = 'none'; // 否则隐藏链接
            }
        });
    });
});
