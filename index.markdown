---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ruyi Ding",
  "url": "https://rollinding.github.io/",
  "sameAs": [
    "https://www.linkedin.com/in/ruyi-ding-463a57169/",
    "https://scholar.google.com/citations?user=lRVUgSAAAAAJ&hl=en"
  ]
}
</script>

<div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-bottom: 40px; position: relative;">
    <!-- 签名作为装饰 -->
    <img src="./assets/images/signature.png" style="position: absolute; top: 10px; right: 10px; max-width: 50px; height: auto; opacity: 0.8;" alt="Ruyi Signature">
    <div style="display: flex; align-items: center;">
        <!-- 照片 -->
        <div style="flex: 0 0 auto; margin-right: 30px;">
            <img src="./assets/images/personal.jpg" style="max-width: 150px; height: auto; border-radius: 5px;" alt="Personal photo">
        </div>
        <!-- 英文简介 -->
        <div style="flex: 1;">
            <h1 style="margin: 0; font-size: 28px;">Ruyi Ding</h1>
            <p style="margin: 5px 0; font-size: 16px; color: #555;">Final Year PhD Student, Northeastern University</p>
            <p style="margin: 5px 0; font-size: 14px; color: #777;">
                Research Interests: AI Security, Hardware Security, Side-Channel Analysis
            </p>
            <p style="margin: 5px 0; font-size: 14px; color: #777; font-style: italic;">
                “如意”在中文中寓意“顺遂心意”，象征着对美好未来的追求与坚定信念。
            </p>
            <p style="margin: 5px 0; font-size: 14px; color: #777; font-style: italic;">
            In Chinese, 'Ruyi' (如意) conveys the meaning of 'fulfilling one's aspirations,' representing the pursuit of a prosperous future and steadfast resolve.
                </p>
        </div>
    </div>
</div>

<style>
    .about-me, .news {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
    }
    .about-me h2, .news h2 {
        margin-top: 0;
        font-size: 24px;
        color: #333;
        border-bottom: 2px solid #007bff;
        padding-bottom: 10px;
    }
    .about-me p {
        font-size: 16px;
        line-height: 1.6;
        color: #555;
    }
    .about-me span.highlight {
        color: #d9534f;
        font-weight: bold;
    }
    .news ul {
        list-style-type: none;
        padding-left: 0;
    }
    .news li {
        font-size: 16px;
        color: #555;
        margin-bottom: 10px;
        padding-left: 20px;
        position: relative;
    }
    .news li::before {
        content: "•";
        color: #007bff;
        font-size: 20px;
        position: absolute;
        left: 0;
        top: -2px;
    }
</style>

<!-- About Me -->
<div class="about-me">
    <h2>About Me</h2>
    <p>
        I am Ruyi Ding, a final year PhD student from Northeastern University, supervised by <a href="https://coe.northeastern.edu/people/fei-yunsi/" target="_blank">Yunsi Fei</a> in <a href="http://nueess.coe.neu.edu/nueess/index.php/Main_Page" target="_blank">NUEESS</a>. My research covers the intersection of AI security and hardware security. I am particularly focused on <em>neural network model robustness, privacy, IP protection</em> and <em>side-channel analysis</em>. 
        <span class="highlight">I am currently seeking opportunities for a faculty position in <em>Computer Engineering</em> and <em>Artificial Intelligence</em>!</span> 
        The primary objective of my work is building machine-learning systems that are both secure and privacy-preserving; identifying and mitigating hardware side channels and micro-architectural vulnerabilities; employing machine learning-hardware co-design for security applications. My efforts aim to contribute significantly to <strong>Responsible AI</strong> and <strong>Hardware Security</strong>.
    </p>
</div>
<style>
    .news li {
        font-size: 16px;
        color: #555;
        margin-bottom: 10px;
        padding-left: 30px;
        position: relative;
        transition: transform 0.3s ease;
    }
    .news li:hover {
        transform: translateX(5px); /* 悬停时向右移动 */
    }
    .news li::before {
        content: "🎉"; /* 使用图标 */
        font-size: 18px;
        position: absolute;
        left: 0;
        top: 0;
        color: #007bff;
    }
</style>

<div class="news">
    <h2>News</h2>
    <ul>
        <li>[2024-10] <a href="https://arxiv.org/pdf/2411.12508"> One paper </a>  is accepted in <strong><a href="https://www.ndss-symposium.org/ndss2025/" target="_blank">NDSS 2025 </a> </strong>!</li>
        <li>[2024-09] <a href="https://arxiv.org/pdf/2410.03396"> One paper </a> is accepted in <strong><a href="https://neurips.cc/" target="_blank">NeurIPS 2024 </a></strong>!</li>
        <li>[2024-07] <a href="https://arxiv.org/pdf/2410.08015"> One paper </a> is accepted in <strong><a href="https://eccv2024.ecva.net/" target="_blank">ECCV 2024 </a> </strong>!</li> 
    </ul>
</div>
## Works
<style>
    .project-card {
        display: flex;
        align-items: center;
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
    }
    .project-card img {
        width: 200px; /* 固定图片宽度 */
        height: 200px; /* 固定图片高度 */
        object-fit: cover; /* 确保图片按比例缩放并填充 */
        border-radius: 5px;
        margin-right: 20px;
    }
    .project-card h2 {
        margin: 0 0 10px;
        font-size: 24px;
    }
    .project-card p {
        margin: 0;
        font-size: 14px;
        color: #555;
    }
    .project-card a {
        display: inline-block;
        margin-top: 15px;
        font-size: 14px;
        color: #007bff;
        text-decoration: none;
    }
    @media (max-width: 768px) {
        .project-card {
            flex-direction: column;
            text-align: center;
        }
        .project-card img {
            margin-right: 0;
            margin-bottom: 15px;
        }
    }
</style>

<!-- 项目 list -->



<div class="project-card">
    <img src="/assets/images/ndss.png" alt="NDSS 2025">
    <div>
        <h2>Probe-Me-Not: Protecting Pre-trained Encoders from Malicious Probing</h2>
        <p>EncoderLock is a novel method that safeguards pre-trained encoders from malicious probing by restricting performance on prohibited domains while preserving functionality in authorized ones. Its domain-aware techniques and self-challenging training ensure robust protection, advancing the development of responsible AI.</p>
        <a href="https://arxiv.org/pdf/2411.12508">Learn More →</a>
    </div>
</div>

<div class="project-card">
    <img src="/assets/images/neurips2024.png" alt="NeurIPS 2025">
    <div>
        <h2>GraphCroc: Cross-Correlation Autoencoder for Graph Structural Reconstruction</h2>
        <p>GraphCroc enhances graph autoencoders (GAEs) with cross-correlation, improving representation of features like islands and directional edges in multi-graph scenarios. It ensures robust reconstruction and reduces bias, outperforming self-correlation-based GAEs.</p>
        <a href="https://arxiv.org/pdf/2410.03396">Learn More →</a>
    </div>
</div>

<div class="project-card">
    <img src="/assets/images/eccv24.png" alt="ECCV 2024">
    <div>
        <h2>Non-transferable Pruning</h2>
        <p>NonTransferable Pruning (NTP) safeguards pretrained DNNs by controlling transferability to unauthorized domains via selective pruning. Using ADMM and fisher space regularization, NTP optimizes sparsity and non-transferable learning loss, measured by SLC-AUC. Experiments show NTP outperforms state-of-the-art methods, ensuring models are unsuitable for unauthorized transfer learning in supervised and self-supervised contexts.</p>
        <a href="https://arxiv.org/pdf/2410.03396">Learn More →</a>
    </div>
</div>

<div class="project-card">
    <img src="/assets/images/iccv23.png" alt="ICCV 2023">
    <div>
        <h2>VertexSerum: Poisoning Graph Neural Networks for Link Inference</h2>
        <p>VertexSerum enhances graph link stealing by amplifying connectivity leakage, using an attention mechanism for accurate node adjacency inference. It outperforms state-of-the-art attacks, boosting AUC scores by 9.8% across datasets and GNN structures. Effective in black-box and online settings, VertexSerum demonstrates real-world applicability in exploiting GNN vulnerabilities for link privacy breaches.</p>
        <a href="https://openaccess.thecvf.com/content/ICCV2023/papers/Ding_VertexSerum_Poisoning_Graph_Neural_Networks_for_Link_Inference_ICCV_2023_paper.pdf">Learn More →</a>
    </div>
</div>

<div class="project-card">
    <img src="/assets/images/asiaccs23.png" alt="asiaccs 2023">
    <div>
        <h2>EMShepherd: Detecting Adversarial Samples via Side-channel Leakage</h2>
        <p>EMShepherd detects adversarial attacks by capturing electromagnetic (EM) traces of model execution, leveraging differences in EM footprints caused by adversarial inputs. Using benign samples and their EM traces, it trains classifiers and anomaly detectors, achieving a 100% detection rate for most adversarial types on FPGA accelerators. This air-gapped approach matches state-of-the-art white-box detectors without requiring internal model knowledge.</p>
        <a href="https://arxiv.org/pdf/2303.15571">Learn More →</a>
    </div>
</div>

<div class="project-card">
    <img src="/assets/images/dac2025.png" alt="DAC 2025">
    <div>
        <h2>Graph in the Vault: Protecting Edge GNN Inference with TEE</h2>
        <p>GNNVault introduces the first secure Graph Neural Network (GNN) deployment strategy using Trusted Execution Environment (TEE) to protect model IP and data privacy on edge devices. By partitioning the model before training and employing a private GNN rectifier, GNNVault effectively safeguards GNN inference against link stealing attacks</p>
        <a href=""> Coming soon...</a>
    </div>
</div>



## Research Interests

- **AI security**: Exploring machine learning security and privacy issue during training, inference and deployment.
- **Hardware Security**: Security and Privacy of embedding DNNs.
- **Side-channel Analysis**: Power/EM side-channel anaylsis and micro-architecture SCA.
- **Data Analysis**: Traffic data analysis and event detection.


## Contact

Feel free to reach out to me at [ding.ruy[at]northeastern[dot]edu](mailto:ding.ruy@northeastern.edu) or connect with me on [LinkedIn](https://www.linkedin.com/in/ruyi-ding-463a57169/).

