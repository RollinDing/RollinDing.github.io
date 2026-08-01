---
layout: page
title: Publications
permalink: /project/
---

<style>
.publication-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.pub-item {
    background: #f9f9f9;
    border-left: 4px solid #007bff;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 0 8px 8px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.pub-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
}

.pub-item.featured {
    border-left-color: #ff6b6b;
    background: linear-gradient(135deg, #fff5f5, #fff);
}

.pub-item.best-paper {
    border-left-color: #ffd700;
    background: linear-gradient(135deg, #fffdf0, #fff);
}

.pub-title {
    font-size: 18px;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 8px;
    line-height: 1.4;
}

.pub-authors {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
    font-style: italic;
}

.pub-venue {
    display: inline-block;
    background: #007bff;
    color: white;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    margin-right: 10px;
    margin-bottom: 8px;
}

.pub-venue.featured {
    background: linear-gradient(135deg, #ff6b6b, #ff8e53);
}

.pub-venue.best-paper {
    background: linear-gradient(135deg, #ffd700, #ffb347);
    color: #333;
}

.award {
    display: inline-block;
    background: #dc3545;
    color: white;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    margin-right: 10px;
    margin-bottom: 8px;
}

.award.best-paper {
    background: linear-gradient(135deg, #ffd700, #ff8c00);
    color: #333;
}

.award.nomination {
    background: #6c757d;
}

.pub-links {
    margin-top: 12px;
}

.pub-link {
    display: inline-block;
    margin-right: 12px;
    padding: 6px 12px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    transition: all 0.2s ease;
}

.pub-link:hover {
    background: #0056b3;
    transform: translateY(-1px);
    color: white;
    text-decoration: none;
}

.pub-link.github {
    background: #333;
}

.pub-link.github:hover {
    background: #555;
}

.year-section {
    margin-top: 40px;
    margin-bottom: 20px;
}

.year-title {
    font-size: 24px;
    font-weight: 700;
    color: #2c3e50;
    border-bottom: 3px solid #007bff;
    padding-bottom: 8px;
    margin-bottom: 20px;
}
</style>


<div class="year-section">
    <h3 class="year-title">2025</h3>
    
    <ul class="publication-list">
        <li class="pub-item featured">
            <div class="pub-title">MoEcho: Exploiting Side-Channel Attacks to Compromise User Privacy in Mixture-of-Experts LLMs</div>
            <div class="pub-authors"><strong>Ruyi Ding*</strong>, Tianhong Xu*, Xinyi Shen, Aidong Adam Ding, Yunsi Fei</div>
            <span class="pub-venue featured">CCS 2025</span>
            <div class="pub-links">
                <a href="https://arxiv.org/pdf/2508.15036" target="_blank" class="pub-link">📄 PDF</a>
            </div>
        </li>
        
        <li class="pub-item">
            <div class="pub-title">Graph in the Vault: Protecting Edge GNN Inference with Trusted Execution Environment</div>
            <div class="pub-authors"><strong>Ruyi Ding*</strong>, Tianhong Xu*, Aidong Adam Ding, Yunsi Fei</div>
            <span class="pub-venue">DAC 2025</span>
            <div class="pub-links">
                <a href="https://arxiv.org/pdf/2502.15012" target="_blank" class="pub-link">📄 PDF</a>
            </div>
        </li>
        
        <li class="pub-item">
            <div class="pub-title">MACPruning: Dynamic Operation Pruning to Mitigate Side-Channel DNN Model Extraction</div>
            <div class="pub-authors"><strong>Ruyi Ding</strong>, Cheng Gongye, Davis Ranney, Aidong Adam Ding, Yunsi Fei</div>
            <span class="pub-venue">HOST 2025</span>
            <span class="award nomination">🎯 Best Paper Nomination</span>
            <div class="pub-links">
                <a href="https://arxiv.org/pdf/2502.15020" target="_blank" class="pub-link">📄 PDF</a>
            </div>
        </li>
        
        <li class="pub-item featured">
            <div class="pub-title">Probe-Me-Not: Protecting Pre-trained Encoders from Malicious Probing</div>
            <div class="pub-authors"><strong>Ruyi Ding</strong>, Tong Zhou, Lili Su, Aidong Adam Ding, Xiaolin Xu, Yunsi Fei</div>
            <span class="pub-venue featured">NDSS 2025</span>
            <div class="pub-links">
                <a href="https://arxiv.org/pdf/2411.12508" target="_blank" class="pub-link">📄 PDF</a>
                <a href="https://github.com/RollinDing/EncoderLock" target="_blank" class="pub-link github">💻 Code</a>
            </div>
        </li>
    </ul>
</div>

<div class="year-section">
    <h3 class="year-title">2024</h3>
    
    <ul class="publication-list">
        <li class="pub-item">
            <div class="pub-title">GraphCroc: Cross-Correlation Autoencoder for Graph Structural Reconstruction</div>
            <div class="pub-authors">Shijin Duan*, <strong>Ruyi Ding*</strong>, Jiaxing He, Aidong Adam Ding, Yunsi Fei, Xiaolin Xu</div>
            <span class="pub-venue">NeurIPS 2024</span>
            <div class="pub-links">
                <a href="https://arxiv.org/pdf/2410.03396" target="_blank" class="pub-link">📄 PDF</a>
            </div>
        </li>
        
        <li class="pub-item">
            <div class="pub-title">Non-transferable Pruning for Controlled Model Reuse</div>
            <div class="pub-authors"><strong>Ruyi Ding</strong>, Lili Su, Aidong Adam Ding, Yunsi Fei</div>
            <span class="pub-venue">ECCV 2024</span>
            <div class="pub-links">
                <a href="https://arxiv.org/pdf/2410.08015" target="_blank" class="pub-link">📄 PDF</a>
                <a href="https://github.com/RollinDing/DNN-NTL-Pruning" target="_blank" class="pub-link github">💻 Code</a>
            </div>
        </li>
    </ul>
</div>

<div class="year-section">
    <h3 class="year-title">2023</h3>
    
    <ul class="publication-list">
        <li class="pub-item">
            <div class="pub-title">VertexSerum: Poisoning Graph Neural Networks for Link Inference</div>
            <div class="pub-authors"><strong>Ruyi Ding*</strong>, Shijin Duan*, Xiaolin Xu, Yunsi Fei</div>
            <span class="pub-venue">ICCV 2023</span>
            <div class="pub-links">
                <a href="https://openaccess.thecvf.com/content/ICCV2023/papers/Ding_VertexSerum_Poisoning_Graph_Neural_Networks_for_Link_Inference_ICCV_2023_paper.pdf" target="_blank" class="pub-link">📄 PDF</a>
                <a href="https://github.com/RollinDing/VertexSerum" target="_blank" class="pub-link github">💻 Code</a>
            </div>
        </li>
        
        <li class="pub-item best-paper">
            <div class="pub-title">EMShepherd: Detecting Adversarial Samples via Side-channel Leakage</div>
            <div class="pub-authors"><strong>Ruyi Ding</strong>, Cheng Gongye, Siyue Wang, Aidong Adam Ding, Yunsi Fei</div>
            <span class="pub-venue best-paper">ASIACCS 2023</span>
            <span class="award best-paper">🏆 Distinguished Paper Award</span>
            <div class="pub-links">
                <a href="https://arxiv.org/pdf/2303.15571" target="_blank" class="pub-link">📄 PDF</a>
                <a href="https://github.com/RollinDing/em-adversarial-detection" target="_blank" class="pub-link github">💻 Code</a>
            </div>
        </li>
    </ul>
</div>

<div class="year-section">
    <h3 class="year-title">2022</h3>
    
    <ul class="publication-list">
        <li class="pub-item">
            <div class="pub-title">A cross-platform cache timing attack framework via deep learning</div>
            <div class="pub-authors"><strong>Ruyi Ding</strong>, Ziyue Zhang, Xiang Zhang, Cheng Gongye, Yunsi Fei, Aidong Adam Ding</div>
            <span class="pub-venue">DATE 2022</span>
            <span class="award nomination">🎯 Best Paper Nomination</span>
            <div class="pub-links">
                <a href="https://par.nsf.gov/servlets/purl/10351468" target="_blank" class="pub-link">📄 PDF</a>
                <a href="https://github.com/RollinDing/em-adversarial-detection" target="_blank" class="pub-link github">💻 Code</a>
            </div>
        </li>
        
        <li class="pub-item">
            <div class="pub-title">Ran$Net: An Anti-Ransomware Methodology based on Cache Monitoring and Deep Learning</div>
            <div class="pub-authors">Xiang Zhang, Ziyue Zhang, <strong>Ruyi Ding</strong>, Cheng Gongye, Aidong Adam Ding, Yunsi Fei</div>
            <span class="pub-venue">GLSVLSI 2022</span>
            <div class="pub-links">
                <a href="#" class="pub-link">📄 PDF</a>
            </div>
        </li>
    </ul>
</div>

<div class="year-section">
    <h3 class="year-title">2021</h3>
    
    <ul class="publication-list">
        <li class="pub-item">
            <div class="pub-title">Neural Architecture Search for Adversarial Robustness via Learnable Pruning</div>
            <div class="pub-authors">Yize Li, Pu Zhao, <strong>Ruyi Ding</strong>, Tong Zhou, Yunsi Fei, Xiaolin Xu, Xue Lin</div>
            <span class="pub-venue">Frontiers in High Performance Computing</span>
            <div class="pub-links">
                <a href="#" class="pub-link">📄 PDF</a>
            </div>
        </li>
        
        <li class="pub-item">
            <div class="pub-title">Spatio-temporal point processes with attention for traffic congestion event modeling</div>
            <div class="pub-authors">Shixiang Zhu, <strong>Ruyi Ding</strong>, Minghe Zhang, Pascal Van Hentenryck, Yao Xie</div>
            <span class="pub-venue">IEEE Trans. on Intelligent Transportation Systems</span>
            <div class="pub-links">
                <a href="#" class="pub-link">📄 PDF</a>
            </div>
        </li>
        
        <li class="pub-item">
            <div class="pub-title">Deep Fourier Kernel for Self-Attentive Point Processes</div>
            <div class="pub-authors">Shixiang Zhu, Minghe Zhang, <strong>Ruyi Ding</strong>, Yao Xie</div>
            <span class="pub-venue">AISTATS 2021</span>
            <div class="pub-links">
                <a href="#" class="pub-link">📄 PDF</a>
            </div>
        </li>
    </ul>
</div>

<div class="year-section">
    <h3 class="year-title">2018</h3>
    
    <ul class="publication-list">
        <li class="pub-item">
            <div class="pub-title">Persistent fault analysis on block ciphers</div>
            <div class="pub-authors">Fan Zhang, Xiaoxuan Lou, Xinjie Zhao, Shivam Bhasin, Wei He, <strong>Ruyi Ding</strong>, Samiya Qureshi, Kui Ren</div>
            <span class="pub-venue">IACR Trans. on Cryptographic Hardware and Embedded Systems</span>
            <div class="pub-links">
                <a href="#" class="pub-link">📄 PDF</a>
            </div>
        </li>
    </ul>
</div>