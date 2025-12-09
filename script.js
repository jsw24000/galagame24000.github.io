// 打开页面的函数
function openPage(pageUrl) {
    // 添加点击效果
    event.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        window.location.href = pageUrl;
    }, 150);
}

// 返回首页的函数
function goBack() {
    window.location.href = 'index.html';
}

// 平滑滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 页面加载完成后的效果
document.addEventListener('DOMContentLoaded', function() {
    // 为所有按钮添加动画延迟
    const buttons = document.querySelectorAll('.game-btn');
    buttons.forEach((button, index) => {
        button.style.animationDelay = `${index * 0.1}s`;
    });
    
    // 为导航链接添加点击事件
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});