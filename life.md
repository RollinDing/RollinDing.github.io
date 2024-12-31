---
layout: page
title: Life
permalink: /life/
---

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
    .gallery-category {
        margin-bottom: 30px;
    }
    .gallery-category h2 {
        font-size: 24px;
        color: #333;
        border-bottom: 2px solid #007bff;
        padding-bottom: 10px;
        margin-bottom: 15px;
    }
    .gallery-item {
        flex: 1 1 calc(33.333% - 15px); /* 三列布局，留出间隙 */
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        height: 200px; /* 固定容器高度 */
    }
    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* 确保图片完整显示 */
        transition: transform 0.5s ease;
    }
    .gallery-item:hover img {
        transform: scale(1.1); /* 悬停时图片放大 */
    }
    .gallery-item p {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7); /* 半透明背景 */
        color: #fff;
        font-size: 14px;
        padding: 10px;
        margin: 0;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .gallery-item:hover p {
        opacity: 1; /* 悬停时显示文字 */
    }
    @media (max-width: 768px) {
        .gallery-item {
            flex: 1 1 calc(50% - 15px); /* 小屏幕上两列布局 */
        }
    }
    @media (max-width: 480px) {
        .gallery-item {
            flex: 1 1 100%; /* 超小屏幕上单列布局 */
        }
    }
</style>

<!-- 食物相册 -->
<div class="gallery-category">
    <h2>Awards</h2>
    <div class="gallery">
        <div class="gallery-item">
            <img src="/assets/images/awards/bestpaper-asiaccs.jpg" alt="asiaccs2023">
            <p>AsiaCCS 2023 Distinguished Paper Awards</p>
        </div>
        <div class="gallery-item">
            <img src="/assets/images/awards/external award.jpg" alt="NEU awards">
            <p>NEU external Awards</p>
        </div>


    </div>
</div>
