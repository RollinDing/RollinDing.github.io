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
            <img src="./assets/images/photo.jpeg" style="max-width: 150px; height: auto; border-radius: 5px;" alt="Personal photo">
        </div>
        <!-- 英文简介 -->
        <div style="flex: 1;">
            <h1 style="margin: 0; font-size: 28px;">Ruyi Ding</h1>
                    <p style="margin: 5px 0; font-size: 16px; color: #555;"><strong>Assistant Professor</strong>, Division of Electrical and Computer Engineering, <a href="https://www.lsu.edu/" target="_blank">Louisiana State University (LSU)</a></p>
                    <p style="margin: 5px 0; font-size: 14px; color: #777;"><em>Previously: PhD Student, Northeastern University</em></p>
            <p style="margin: 5px 0; font-size: 14px; color: #777;">
                Research Interests: AI Security, Hardware Security, Side-Channel Analysis
            </p>
            <p style="margin: 5px 0; font-size: 14px; color: #777; font-style: italic;">
                “如意”在中文中寓意“顺遂心意”，象征着对美好未来的追求与坚定信念。
            </p>
            <p style="margin: 5px 0; font-size: 14px; color: #777; font-style: italic;">
            In Chinese, 'Ruyi' (如意) conveys the meaning of 'fulfilling one's aspirations,' representing the pursuit of a prosperous future and steadfast resolve.
                </p>
            <p style="margin: 10px 0; font-size: 15px;">
                <a href="/prospective-students/" style="display:inline-block; background:#007bff; color:#fff; padding:8px 12px; border-radius:6px; text-decoration:none;">Prospective PhD Students: Apply / Contact</a>
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
    <div class="summary">
        <p>
            I am an Assistant Professor at the Division of Electrical and Computer Engineering at Louisiana State University. My research focuses on AI security and hardware security, specializing in neural network robustness, privacy preservation, and side-channel analysis.<br>
            <span class="highlight">I am actively looking for Ph.D. students for Spring 2026 and Fall 2026. Feel free to shoot me an email if you are interested in AI security and hardware security!</span>
        </p>
        <a href="javascript:void(0);" class="read-more">Read more...</a>
    </div>

    <div class="full-content" style="display: none;">
        <p>
            My work sits at the intersection of machine learning and hardware security, with three primary thrusts:
            <ul>
                <li>Developing secure and privacy-preserving ML systems</li>
                <li>Detecting/mitigating hardware vulnerabilities through side-channel analysis</li>
                <li>ML-hardware co-design for security applications</li>
            </ul>
        </p>
        <p>
            These efforts aim to advance two critical domains: <strong>Responsible AI</strong> (ensuring AI systems are secure and ethical) and <strong>Hardware Security</strong> (building trustworthy computing foundations). My approach emphasizes both theoretical analysis of modern architectures and practical system implementations.
        </p>
        <a href="javascript:void(0);" class="show-less">Show less...</a>
    </div>
</div>

<style>
.highlight {
    font-weight: 600;
    color: #2c3e50;
}
.read-more, .show-less {
    color: #3498db;
    cursor: pointer;
    text-decoration: underline;
}
.read-more:hover, .show-less:hover {
    color: #2980b9;
}
</style>

<script>
document.querySelector('.read-more').addEventListener('click', function() {
    document.querySelector('.summary').style.display = 'none';
    document.querySelector('.full-content').style.display = 'block';
});

document.querySelector('.show-less').addEventListener('click', function() {
    document.querySelector('.full-content').style.display = 'none';
    document.querySelector('.summary').style.display = 'block';
});
</script>


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
    <li>[2025-08] One paper is accepted in <strong><a href="https://www.sigsac.org/ccs/CCS2025/accepted-papers/" target="_blank">CCS 2025 </a> </strong>. See you in Taipei, China! </li>
    <li>[2025-05] Invited to serve as a TPC member for ICCAD 2025 </li>
    <li>[2025-04] Received <strong>HOST 2025 Travel Grant</strong>. Thank you, HOST! </li>
    <li>[2025-04] Received <strong>DAC Young Fellow</strong>. Thank you, DAC! </li>
    <li>[2025-03] Received Northeastern <strong>2025 Outstanding PhD Student Research Award</strong>. Thank you, Northeastern! </li>
        <li>[2025-02] Received Northeastern PhD Network Travel Award. Thank you, Northeastern! </li>
        <li>[2025-02] One paper is accepted in <strong><a href="http://www.hostsymposium.org/" target="_blank">HOST 2025 </a> </strong> </li>
        <li>[2025-02] One paper is accepted in <strong><a href="https://www.dac.com/" target="_blank">DAC 2025 </a> </strong> </li>
        <li>[2025-01]   
            <span class="highlight" style="font-weight: bold; color: red;">I was awarded the Internet Society Fellowship!</span> 
            Thank you, NDSS 2025!
        </li>
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
        object-fit: contain; 
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
    <img src="/assets/images/CCS2025-image.png" alt="CCS 2025">
    <div>
        <h2>MoEcho: Exploiting Side-Channel Attacks to Compromise User Privacy in Mixture-of-Experts LLMs</h2>
        <p>MoEcho is the FIRST side-channel attack against Mixture-of-Expert-based Large Language Model, it leverages four different attacks to compromise user's private input and system response.</p>
        <a href="https://arxiv.org/abs/2508.15036">Learn More →</a>
    </div>
</div>

<div class="project-card">
    <img src="/assets/images/dac2025.png" alt="DAC 2025">
    <div>
        <h2>Graph in the Vault: Protecting Edge GNN Inference with TEE</h2>
        <p>GNNVault introduces the first secure Graph Neural Network (GNN) deployment strategy using Trusted Execution Environment (TEE) to protect model IP and data privacy on edge devices. By partitioning the model before training and employing a private GNN rectifier, GNNVault effectively safeguards GNN inference against link stealing attacks</p>
        <a href="https://arxiv.org/pdf/2502.15012">Learn More →</a>
    </div>
</div>

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




## Research Interests

- **AI Security**: Exploring machine learning security and privacy issue during training, inference and deployment.
- **Hardware Security**: Security and Privacy of embedding DNNs.
- **Side-channel Analysis**: Power/EM side-channel anaylsis and micro-architecture SCA.
- **Data Analysis**: Traffic data analysis and event detection.


## Contact

Feel free to reach out to me at [ruyiding[at]lsu[dot]edu](mailto:ruyiding@lsu.edu) or connect with me on [LinkedIn](https://www.linkedin.com/in/ruyi-ding-463a57169/).

