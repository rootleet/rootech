// Blog content data
const blogPosts = {
  1: {
    title: "The Future of Retail Technology in Africa",
    category: "Technology",
    date: "March 15, 2024",
    author: {
      name: "Alex Johnson",
      role: "Technology Consultant",
      avatar: "https://via.placeholder.com/80x80?text=A",
      bio: "Technology consultant with over 10 years of experience in digital transformation and retail technology solutions."
    },
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>The retail landscape in Africa is undergoing a dramatic transformation. As digital adoption accelerates across the continent, retailers are embracing innovative technologies to stay competitive and meet evolving consumer expectations.</p>

      <h2>The Rise of Digital Payment Solutions</h2>
      <p>Mobile money platforms like M-Pesa have revolutionized payments in East Africa, and similar innovations are spreading. Contactless payments, QR codes, and digital wallets are becoming the norm, reducing transaction times and improving customer satisfaction.</p>

      <blockquote>
        "The integration of digital payment systems has reduced checkout times by up to 60% in modern retail establishments across Africa."
      </blockquote>

      <h2>AI-Powered Inventory Management</h2>
      <p>Artificial intelligence is transforming how retailers manage their inventory. Machine learning algorithms can predict demand patterns, optimize stock levels, and reduce waste. This is particularly crucial in Africa where supply chain challenges are common.</p>

      <div class="content-image">
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="AI Inventory Management" class="img-fluid">
        <p class="image-caption">AI systems analyzing inventory data in real-time</p>
      </div>

      <h2>Omnichannel Retailing</h2>
      <p>African consumers increasingly expect seamless shopping experiences across multiple channels. From online ordering with in-store pickup to social commerce platforms, retailers must create unified customer journeys.</p>

      <h2>Challenges and Opportunities</h2>
      <p>While technology adoption brings opportunities, challenges remain:</p>
      <ul>
        <li>Infrastructure limitations in rural areas</li>
        <li>Digital literacy gaps</li>
        <li>Cybersecurity concerns</li>
        <li>Integration with existing systems</li>
      </ul>

      <p>However, innovative solutions are emerging. Cloud-based systems, mobile-first applications, and affordable hardware are making advanced retail technology accessible to businesses of all sizes.</p>

      <h2>The Road Ahead</h2>
      <p>The future of retail in Africa lies in embracing technology while understanding local market dynamics. Successful retailers will be those who can balance innovation with practicality, creating solutions that work within the unique African context.</p>

      <p>As we look to the future, the integration of emerging technologies like IoT, blockchain, and advanced analytics will further transform the retail landscape, creating opportunities for growth and innovation across the continent.</p>
    `,
    toc: [
      "The Rise of Digital Payment Solutions",
      "AI-Powered Inventory Management",
      "Omnichannel Retailing",
      "Challenges and Opportunities",
      "The Road Ahead"
    ]
  },
  2: {
    title: "How to Secure Your Business Data",
    category: "Security",
    date: "February 28, 2024",
    author: {
      name: "Bella Chen",
      role: "Cybersecurity Expert",
      avatar: "https://via.placeholder.com/80x80?text=B",
      bio: "Cybersecurity expert specializing in protecting small and medium enterprises from modern digital threats."
    },
    featuredImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>In today's digital landscape, data security is not just an IT concern—it's a business imperative. Small and medium enterprises (SMEs) are increasingly becoming targets for cybercriminals, making robust security practices essential for survival.</p>

      <h2>Understanding the Threat Landscape</h2>
      <p>Cyberattacks are becoming more sophisticated and frequent. Ransomware, phishing, and data breaches can cripple businesses, leading to financial losses, reputational damage, and legal consequences.</p>

      <h2>Essential Security Practices</h2>
      <h3>1. Implement Strong Access Controls</h3>
      <p>Use multi-factor authentication (MFA) for all accounts and implement the principle of least privilege. Not every employee needs access to sensitive data.</p>

      <h3>2. Regular Data Backups</h3>
      <p>Maintain regular backups of critical data, stored securely offsite or in the cloud. Test your backup restoration process regularly.</p>

      <h3>3. Employee Training</h3>
      <p>Human error causes most security breaches. Regular training on phishing recognition and safe computing practices is crucial.</p>

      <div class="content-image">
        <img src="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Employee Training" class="img-fluid">
        <p class="image-caption">Security awareness training session</p>
      </div>

      <h3>4. Keep Software Updated</h3>
      <p>Regularly update operating systems, applications, and security software. Enable automatic updates where possible.</p>

      <h3>5. Use Encryption</h3>
      <p>Encrypt sensitive data both at rest and in transit. This ensures that even if data is compromised, it remains unreadable.</p>

      <h2>Advanced Security Measures</h2>
      <p>For growing businesses, consider implementing:</p>
      <ul>
        <li>Endpoint protection platforms</li>
        <li>Network segmentation</li>
        <li>Security information and event management (SIEM)</li>
        <li>Regular security audits</li>
      </ul>

      <h2>Incident Response Planning</h2>
      <p>Prepare for the worst by developing an incident response plan. Know what to do if a breach occurs, including who to contact and how to contain the damage.</p>

      <blockquote>
        "A well-prepared business can minimize the impact of a security incident through quick response and effective communication."
      </blockquote>

      <h2>Compliance Considerations</h2>
      <p>Depending on your industry and location, you may need to comply with regulations like GDPR, POPIA, or industry-specific standards. Understanding these requirements is crucial for legal compliance.</p>

      <h2>Building a Security Culture</h2>
      <p>Security should be everyone's responsibility. Foster a culture where employees feel comfortable reporting suspicious activities and understand the importance of security practices.</p>

      <p>Remember, security is an ongoing process, not a one-time implementation. Regular assessment and adaptation to new threats are essential for maintaining effective protection.</p>
    `,
    toc: [
      "Understanding the Threat Landscape",
      "Essential Security Practices",
      "Advanced Security Measures",
      "Incident Response Planning",
      "Compliance Considerations",
      "Building a Security Culture"
    ]
  },
  3: {
    title: "Building Scalable Web Applications",
    category: "Development",
    date: "February 10, 2024",
    author: {
      name: "Carlos Rodriguez",
      role: "Senior Software Engineer",
      avatar: "https://via.placeholder.com/80x80?text=C",
      bio: "Senior software engineer with expertise in scalable architecture and modern web development frameworks."
    },
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Building web applications that can grow with your business requires careful planning and architectural decisions. Scalability ensures your application can handle increased traffic, data, and complexity without compromising performance.</p>

      <h2>Understanding Scalability</h2>
      <p>Scalability refers to an application's ability to handle growth. This includes vertical scaling (adding more power to existing servers) and horizontal scaling (adding more servers).</p>

      <h2>Architecture Principles</h2>
      <h3>Microservices vs Monoliths</h3>
      <p>Modern applications often benefit from microservices architecture, where different functionalities are separated into independent services that can be scaled individually.</p>

      <h3>Stateless Design</h3>
      <p>Design your application to be stateless, storing session data externally (like in Redis or databases) to enable horizontal scaling.</p>

      <div class="content-image">
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Microservices Architecture" class="img-fluid">
        <p class="image-caption">Microservices architecture diagram</p>
      </div>

      <h2>Database Optimization</h2>
      <h3>Indexing Strategy</h3>
      <p>Proper database indexing can dramatically improve query performance. Analyze your most common queries and index accordingly.</p>

      <h3>Read Replicas</h3>
      <p>Use read replicas to distribute read operations across multiple database instances, reducing load on the primary database.</p>

      <h3>Caching Layers</h3>
      <p>Implement caching at multiple levels: application-level, database-level, and CDN-level to reduce response times and server load.</p>

      <h2>Performance Optimization</h2>
      <h3>Code Splitting</h3>
      <p>Break your JavaScript bundles into smaller chunks that can be loaded on demand, reducing initial load times.</p>

      <h3>Image Optimization</h3>
      <p>Use modern image formats, implement lazy loading, and serve appropriately sized images for different devices.</p>

      <h3>CDN Integration</h3>
      <p>Content Delivery Networks distribute your content globally, reducing latency for users worldwide.</p>

      <h2>Monitoring and Analytics</h2>
      <p>Implement comprehensive monitoring to track performance metrics, error rates, and user behavior. Tools like Application Performance Monitoring (APM) are essential for maintaining scalability.</p>

      <h2>Cloud-Native Approach</h2>
      <p>Leverage cloud platforms for:</p>
      <ul>
        <li>Auto-scaling capabilities</li>
        <li>Managed services (databases, caching, etc.)</li>
        <li>Serverless computing for variable workloads</li>
        <li>Global distribution</li>
      </ul>

      <blockquote>
        "The best architecture is the one that allows your application to evolve and scale without requiring complete rewrites."
      </blockquote>

      <h2>Testing for Scale</h2>
      <p>Load testing and stress testing are crucial to ensure your application can handle peak loads. Use tools like JMeter or Locust to simulate high traffic scenarios.</p>

      <h2>Continuous Improvement</h2>
      <p>Scalability is an ongoing process. Regularly review your architecture, monitor performance, and be prepared to refactor as your application grows.</p>

      <p>Remember, premature optimization can be counterproductive. Focus on building a solid foundation that can be scaled when needed, rather than over-engineering from the start.</p>
    `,
    toc: [
      "Understanding Scalability",
      "Architecture Principles",
      "Database Optimization",
      "Performance Optimization",
      "Monitoring and Analytics",
      "Cloud-Native Approach",
      "Testing for Scale",
      "Continuous Improvement"
    ]
  },
  4: {
    title: "The Rise of AI in Business Operations",
    category: "Innovation",
    date: "January 25, 2024",
    author: {
      name: "Diana Patel",
      role: "AI Solutions Architect",
      avatar: "https://via.placeholder.com/80x80?text=D",
      bio: "AI solutions architect helping businesses integrate artificial intelligence into their operations for improved efficiency."
    },
    featuredImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's transforming business operations across industries. From automating routine tasks to providing deep insights, AI is becoming an essential tool for competitive advantage.</p>

      <h2>AI in Everyday Business</h2>
      <p>AI technologies are finding applications in virtually every business function, from customer service chatbots to predictive maintenance systems.</p>

      <h2>Automation and Efficiency</h2>
      <h3>Robotic Process Automation (RPA)</h3>
      <p>RPA tools can automate repetitive tasks like data entry, invoice processing, and report generation, freeing up employees for more strategic work.</p>

      <h3>Intelligent Document Processing</h3>
      <p>AI-powered systems can extract information from unstructured documents, classify content, and route it appropriately, streamlining document-heavy processes.</p>

      <div class="content-image">
        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="AI Automation" class="img-fluid">
        <p class="image-caption">AI-powered automation in business processes</p>
      </div>

      <h2>Data-Driven Decision Making</h2>
      <h3>Predictive Analytics</h3>
      <p>Machine learning models can analyze historical data to predict trends, customer behavior, and potential issues before they occur.</p>

      <h3>Customer Insights</h3>
      <p>AI can analyze customer interactions across multiple channels to provide personalized recommendations and improve customer experiences.</p>

      <h2>AI in Customer Service</h2>
      <p>Chatbots and virtual assistants are becoming increasingly sophisticated, handling complex queries and providing 24/7 support. Natural language processing enables more human-like interactions.</p>

      <h2>Supply Chain Optimization</h2>
      <p>AI algorithms can optimize inventory levels, predict demand fluctuations, and identify potential disruptions in the supply chain, reducing costs and improving reliability.</p>

      <h2>Challenges and Considerations</h2>
      <p>While AI offers tremendous benefits, successful implementation requires:</p>
      <ul>
        <li>Quality data for training models</li>
        <li>Clear ethical guidelines</li>
        <li>Employee training and change management</li>
        <li>Integration with existing systems</li>
        <li>Ongoing monitoring and improvement</li>
      </ul>

      <blockquote>
        "AI should augment human capabilities, not replace them. The most successful implementations focus on human-AI collaboration."
      </blockquote>

      <h2>Getting Started with AI</h2>
      <h3>Start Small</h3>
      <p>Begin with pilot projects that address specific pain points rather than attempting large-scale transformations.</p>

      <h3>Build AI Literacy</h3>
      <p>Educate your team about AI capabilities and limitations to ensure realistic expectations and effective utilization.</p>

      <h3>Partner with Experts</h3>
      <p>Consider partnering with AI specialists or using pre-built AI solutions to accelerate implementation.</p>

      <h2>The Future of AI in Business</h2>
      <p>As AI technologies continue to evolve, we can expect to see:</p>
      <ul>
        <li>More sophisticated natural language interfaces</li>
        <li>AI-powered creative tools</li>
        <li>Autonomous decision-making systems</li>
        <li>AI ethics and governance frameworks</li>
      </ul>

      <p>The businesses that thrive will be those that embrace AI thoughtfully, using it to enhance human capabilities and create new opportunities for innovation and growth.</p>
    `,
    toc: [
      "AI in Everyday Business",
      "Automation and Efficiency",
      "Data-Driven Decision Making",
      "AI in Customer Service",
      "Supply Chain Optimization",
      "Challenges and Considerations",
      "Getting Started with AI",
      "The Future of AI in Business"
    ]
  },
  5: {
    title: "ERP Systems: Transforming Enterprise Management",
    category: "Business",
    date: "January 12, 2024",
    author: {
      name: "Ethan Lee",
      role: "Enterprise Solutions Consultant",
      avatar: "https://via.placeholder.com/80x80?text=E",
      bio: "Enterprise solutions consultant specializing in ERP implementations and business process optimization."
    },
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Enterprise Resource Planning (ERP) systems have evolved from basic accounting software to comprehensive platforms that integrate all aspects of business operations. Modern ERP systems are powerful tools for improving efficiency, visibility, and decision-making.</p>

      <h2>What is ERP?</h2>
      <p>ERP systems integrate various business processes into a unified system, providing a single source of truth for organizational data and operations.</p>

      <h2>Core ERP Modules</h2>
      <h3>Financial Management</h3>
      <p>Comprehensive financial modules handle accounting, budgeting, financial reporting, and compliance requirements.</p>

      <h3>Human Resources</h3>
      <p>HR modules manage employee data, payroll, benefits, recruitment, and performance management.</p>

      <h3>Supply Chain Management</h3>
      <p>SCM modules optimize procurement, inventory management, logistics, and supplier relationships.</p>

      <div class="content-image">
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="ERP Dashboard" class="img-fluid">
        <p class="image-caption">Modern ERP dashboard showing real-time business metrics</p>
      </div>

      <h3>Customer Relationship Management</h3>
      <p>CRM modules track customer interactions, sales opportunities, and support tickets across all channels.</p>

      <h3>Manufacturing & Operations</h3>
      <p>Production planning, quality control, and maintenance management for manufacturing operations.</p>

      <h2>Benefits of ERP Implementation</h2>
      <h3>Improved Efficiency</h3>
      <p>Automated processes reduce manual work and eliminate data silos, streamlining operations.</p>

      <h3>Better Decision Making</h3>
      <p>Real-time data and analytics provide insights for informed decision-making at all levels.</p>

      <h3>Cost Reduction</h3>
      <p>Optimized processes and reduced errors lead to significant cost savings over time.</p>

      <h3>Scalability</h3>
      <p>ERP systems can grow with your business, accommodating new users, locations, and functionalities.</p>

      <h2>Cloud vs On-Premise ERP</h2>
      <h3>Cloud ERP Advantages</h3>
      <ul>
        <li>Lower upfront costs</li>
        <li>Automatic updates</li>
        <li>Scalable resources</li>
        <li>Remote accessibility</li>
      </ul>

      <h3>On-Premise Considerations</h3>
      <ul>
        <li>Greater control over data</li>
        <li>Customization flexibility</li>
        <li>Higher initial investment</li>
        <li>Maintenance responsibility</li>
      </ul>

      <h2>Implementation Challenges</h2>
      <p>Successful ERP implementation requires careful planning:</p>
      <ul>
        <li>Change management and user training</li>
        <li>Data migration and integration</li>
        <li>Process reengineering</li>
        <li>Vendor selection and partnership</li>
      </ul>

      <blockquote>
        "ERP implementation is not just a technology project—it's a business transformation initiative that requires commitment from leadership and all stakeholders."
      </blockquote>

      <h2>Choosing the Right ERP</h2>
      <h3>Assess Your Needs</h3>
      <p>Evaluate your current processes, pain points, and future requirements to determine which modules and features are essential.</p>

      <h3>Vendor Evaluation</h3>
      <p>Consider factors like industry expertise, support services, scalability, and total cost of ownership.</p>

      <h3>Implementation Partner</h3>
      <p>Choose experienced implementation partners who understand your industry and can guide you through the process.</p>

      <h2>Post-Implementation Success</h2>
      <p>ERP success continues after go-live:</p>
      <ul>
        <li>Ongoing training and support</li>
        <li>Regular system optimization</li>
        <li>User feedback and continuous improvement</li>
        <li>Staying current with updates</li>
      </ul>

      <p>Modern ERP systems are powerful platforms that can transform how organizations operate. When implemented effectively, they provide the foundation for sustainable growth and competitive advantage.</p>
    `,
    toc: [
      "What is ERP?",
      "Core ERP Modules",
      "Benefits of ERP Implementation",
      "Cloud vs On-Premise ERP",
      "Implementation Challenges",
      "Choosing the Right ERP",
      "Post-Implementation Success"
    ]
  },
  6: {
    title: "Digital Marketing Strategies for 2024",
    category: "Marketing",
    date: "December 30, 2023",
    author: {
      name: "Fiona Green",
      role: "Digital Marketing Strategist",
      avatar: "https://via.placeholder.com/80x80?text=F",
      bio: "Digital marketing strategist helping businesses navigate the evolving online landscape and achieve measurable growth."
    },
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>The digital marketing landscape continues to evolve rapidly, with new platforms, technologies, and consumer behaviors shaping strategies for 2024. Successful marketers must adapt to these changes while maintaining focus on measurable results.</p>

      <h2>The Current Digital Landscape</h2>
      <p>2024 brings new challenges and opportunities, from AI-powered tools to privacy regulation changes and shifting consumer expectations.</p>

      <h2>Content Marketing Evolution</h2>
      <h3>Video-First Strategy</h3>
      <p>Video content continues to dominate, with short-form videos on platforms like TikTok and Instagram Reels driving engagement.</p>

      <h3>AI-Generated Content</h3>
      <p>AI tools are assisting with content creation, but authentic, human-centric content still resonates most with audiences.</p>

      <div class="content-image">
        <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Content Creation" class="img-fluid">
        <p class="image-caption">Modern content creation combining creativity and technology</p>
      </div>

      <h2>Social Media Strategies</h2>
      <h3>Platform-Specific Approaches</h3>
      <p>Different platforms require tailored strategies. LinkedIn for B2B, Instagram for visual brands, TikTok for younger audiences.</p>

      <h3>Community Building</h3>
      <p>Focus on building engaged communities rather than just accumulating followers. Authentic interactions drive loyalty.</p>

      <h2>Search Engine Optimization</h2>
      <h3>Core Web Vitals</h3>
      <p>Google's emphasis on user experience means optimizing for loading speed, interactivity, and visual stability.</p>

      <h3>Voice Search Optimization</h3>
      <p>With the rise of voice assistants, optimizing for natural language queries becomes increasingly important.</p>

      <h2>Data-Driven Marketing</h2>
      <h3>Privacy-First Analytics</h3>
      <p>With cookie deprecation and privacy regulations, marketers must rely on first-party data and privacy-compliant tracking.</p>

      <h3>Predictive Analytics</h3>
      <p>Use AI and machine learning to predict customer behavior and optimize campaigns in real-time.</p>

      <h2>Omnichannel Integration</h2>
      <p>Create seamless customer journeys across all touchpoints, from social media to email to your website and physical locations.</p>

      <h2>Emerging Technologies</h2>
      <h3>Augmented Reality (AR)</h3>
      <p>AR filters and try-on features are becoming popular for e-commerce and brand engagement.</p>

      <h3>Web3 and NFTs</h3>
      <p>While still emerging, Web3 technologies offer new ways to engage with audiences and create unique experiences.</p>

      <h2>Measuring Success</h2>
      <p>Modern marketing requires sophisticated measurement:</p>
      <ul>
        <li>Customer lifetime value (CLV)</li>
        <li>Return on ad spend (ROAS)</li>
        <li>Engagement metrics beyond likes and shares</li>
        <li>Attribution modeling for multi-touch campaigns</li>
      </ul>

      <blockquote>
        "The most successful digital marketers in 2024 will be those who can adapt quickly, embrace new technologies, and maintain a customer-centric focus."
      </blockquote>

      <h2>Building for the Future</h2>
      <h3>Agile Marketing</h3>
      <p>Adopt agile methodologies to quickly test, learn, and iterate on marketing strategies.</p>

      <h3>Continuous Learning</h3>
      <p>Stay updated with industry trends and continuously educate your team on new tools and techniques.</p>

      <h3>Sustainable Marketing</h3>
      <p>Consider the environmental impact of digital campaigns and adopt sustainable practices.</p>

      <h2>Challenges Ahead</h2>
      <p>2024 brings several challenges:</p>
      <ul>
        <li>Increased competition for attention</li>
        <li>Rising advertising costs</li>
        <li>Privacy regulation compliance</li>
        <li>Measuring ROI in complex campaigns</li>
      </ul>

      <p>Despite these challenges, digital marketing remains a powerful tool for business growth. Success requires creativity, adaptability, and a commitment to delivering value to customers.</p>

      <p>The brands that thrive will be those that can balance innovation with authenticity, using technology to enhance human connections rather than replace them.</p>
    `,
    toc: [
      "The Current Digital Landscape",
      "Content Marketing Evolution",
      "Social Media Strategies",
      "Search Engine Optimization",
      "Data-Driven Marketing",
      "Omnichannel Integration",
      "Emerging Technologies",
      "Measuring Success",
      "Building for the Future",
      "Challenges Ahead"
    ]
  }
};

// Function to get URL parameter
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to populate blog content
function loadBlogPost() {
  const uni = getUrlParameter('uni');
  const post = blogPosts[uni];

  if (!post) {
    // Default to post 1 if invalid uni
    const defaultPost = blogPosts[1];
    populateContent(defaultPost);
    return;
  }

  populateContent(post);
}

function populateContent(post) {
  // Update page title and meta
  document.title = post.title + ' - Rootech IT Solutions';
  document.getElementById('blog-title').textContent = post.title;
  document.getElementById('blog-title-display').textContent = post.title;
  document.getElementById('og-title').content = post.title;
  document.getElementById('twitter-title').content = post.title;

  // Update meta info
  document.getElementById('blog-category').textContent = post.category;
  document.getElementById('blog-date').textContent = post.date;

  // Update author info
  document.getElementById('blog-author-avatar').src = post.author.avatar;
  document.getElementById('blog-author-name').textContent = post.author.name;
  document.getElementById('bio-avatar').src = post.author.avatar;
  document.getElementById('bio-name').textContent = post.author.name;
  document.getElementById('bio-description').textContent = post.author.bio;

  // Update featured image
  document.getElementById('blog-featured-image').src = post.featuredImage;
  document.getElementById('og-image').content = post.featuredImage;
  document.getElementById('twitter-image').content = post.featuredImage;

  // Update content
  document.getElementById('blog-post-content').innerHTML = post.content;

  // Update TOC
  const tocList = document.getElementById('toc-list');
  tocList.innerHTML = '';
  post.toc.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    a.textContent = item;
    li.appendChild(a);
    tocList.appendChild(li);
  });
}

class Blog {
  endpoint = 'https://ocean.rootechits.com/blog/api/';
  end_base = 'https://ocean.rootechits.com'

  async fetchAllPosts(limit = 6) {

    let payload = {
        'module':'article',
        data:{
            uni:'*',
        scope:'public',
        }
    }

    await api.v2('VIEW', payload, this.endpoint).then((response) => {
        let cards = "";
        if(response.status_code === 200){
            response.message.forEach((post) => {
                console.table(post)
                cards += `

                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="blog-card">
                        <div class="card-img">
                            <img src="${this.end_base}${post.thumbnail}" alt="The Future of Retail Technology in Africa" class="img-fluid">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.intro}</p>
                            <div class="author-info">
                            <img src="https://via.placeholder.com/40x40?text=A" alt="Author" class="author-avatar">
                            <div class="author-details">
                                <span class="author-name">${post.author}</span>
                                <span class="post-date">${post.date_created}</span>
                            </div>
                            </div>
                            <a href="blog.php?uni=${post.uni}" class="read-more">Read More <i class="bi bi-arrow-right"></i></a>
                        </div>
                        </div>
                    </div>
                
                `;
            })

            document.getElementById('blog_display_section').innerHTML = cards;

        }

            
        if(response.status_code === 200){
            console.table(response.data)
        }
    }).catch((error) => {});

  }

  async fetchPostByUni(uni) {
    let payload = {
        'module': 'article',
        data: {
            uni: uni,
            scope: 'public',
        }
    }

    await api.v2('VIEW', payload, this.endpoint).then((response) => {
        if(response.status_code === 200){
            console.log('Blog Post Data Retrieved:', response.message);
            let post = response.message[0]; // Assuming the API returns an array of posts, we take the first one
            console.table(response.message);
            $('title').text( 'Rootech IT Solutions - Blog -' + post.title);
            $('#blog-title-display').text(post.title);
            $('#blog-category').text(post.category);
            $('#blog-author-name').text(post.author);
            $('#blog-featured-image').attr('src', this.end_base + post.thumbnail);
            $('#blog-date').text(post.date_created);
            $('#blog-post-content').html(post.article);
            $('#bio-name').text(post.author);
            $('#bio-avatar, #blog-author-avatar').attr('src', this.end_base + '/' + post.author_dp);

            $('meta[name="description"]').attr('content', post.intro);
            $('meta[name="keywords"]').attr('content', post.meta.split(',').join(', '));


            $('meta[property="og:title"]').attr('content', post.title);
          $('meta[property="og:description"]').attr('content', post.intro);
          $('meta[property="og:image"]').attr('content', this.end_base + post.image);
          $('meta[property="og:url"]').attr('content', window.location.href);

          $('meta[name="twitter:title"]').attr('content', post.title);
          $('meta[name="twitter:description"]').attr('content', post.intro);
          $('meta[name="twitter:image"]').attr('content', this.end_base + post.image);
            return post;
        } else {
            console.error('Failed to retrieve blog post:', response.message);
        }
    }).catch((error) => {
        console.error('Error fetching post:', error);
    });
  }
    
}

// Load blog post when page loads
document.addEventListener('DOMContentLoaded', loadBlogPost);

const blog = new Blog();