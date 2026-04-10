<?php
function h($value) {
    return htmlspecialchars((string)$value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$uni = $_GET['uni'] ?? null;

if (!$uni) {
    http_response_code(400);
    // Will render an error page below
}

function getBlogPost($uni) {
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL            => 'https://ocean.rootechits.com/blog/api/',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING       => '',
        CURLOPT_MAXREDIRS      => 10,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST  => 'VIEW',
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_SSL_VERIFYHOST => 0,
        CURLOPT_POSTFIELDS     => json_encode([
            'module' => 'article',
            'data'   => ['uni' => $uni, 'scope' => 'public']
        ]),
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    ]);

    $response = curl_exec($curl);
    $errno    = curl_errno($curl);
    $error    = curl_error($curl);
    $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);

    if ($errno) {
        error_log("Blog cURL error [$errno]: $error for UNI: $uni");
        return null;
    }
    if ($httpCode !== 200) {
        error_log("Blog API returned HTTP $httpCode for UNI: $uni");
        return null;
    }

    return $response;
}

// --- Resolve post data ---
$errorMessage = null;
$post = null;

if (!$uni) {
    $errorMessage = 'No article specified. Please check the link and try again.';
} else {
    $raw     = getBlogPost($uni);
    $decoded = $raw ? json_decode($raw, true) : null;

    if (!$decoded) {
        $errorMessage = 'Could not reach the blog service. Please try again shortly.';
    } elseif (($decoded['status_code'] ?? null) !== 200) {
        $errorMessage = 'Article not found or has been removed.';
    } elseif (empty($decoded['message'][0])) {
        $errorMessage = 'This article is currently unavailable.';
    } else {
        $post = $decoded['message'][0];
    }
}

// --- Derive display values ---
if ($post) {
    $title        = $post['title']        ?? 'Untitled';
    $intro        = $post['intro']        ?? '';
    $articleHtml  = $post['article']      ?? '';
    $tag          = $post['tag']          ?? '';
    $dateRaw      = $post['date_created'] ?? '';
    $date         = $dateRaw ? date('F j, Y', strtotime($dateRaw)) : '';
    $authorName   = $post['author']       ?? 'Rootech';
    $authorDp     = $post['author_dp']    ?? '';
    $image        = $post['image']        ?? '';
    $baseUrl      = 'https://ocean.rootechits.com/';

    // Prepend base URL to relative paths
    if ($authorDp && !str_starts_with($authorDp, 'http')) {
        $authorDp = $baseUrl . ltrim($authorDp, '/');
    }
    if ($image && !str_starts_with($image, 'http')) {
        $image = $baseUrl . ltrim($image, '/');
    }

    $canonicalUrl = 'https://rootechits.com/blog.php?uni=' . urlencode($uni);
    $pageTitle    = $title . ' | Rootech IT Solutions';

    // --- Auto-generate TOC from h2/h3 tags in article HTML ---
    $toc = [];
    if (preg_match_all('/<h[23][^>]*>(.*?)<\/h[23]>/is', $articleHtml, $matches)) {
        foreach ($matches[1] as $heading) {
            $clean = trim(strip_tags($heading));
            if ($clean) {
                $slug  = strtolower(trim(preg_replace('/[^a-z0-9]+/', '-', $clean), '-'));
                $toc[] = ['label' => $clean, 'slug' => $slug];
            }
        }
    }

    // --- Inject id anchors into headings in article HTML ---
    $articleHtml = preg_replace_callback('/<(h[23])([^>]*)>(.*?)<\/(h[23])>/is', function ($m) {
        $tag   = $m[1];
        $attrs = $m[2];
        $text  = $m[3];
        $clean = trim(strip_tags($text));
        $slug  = strtolower(trim(preg_replace('/[^a-z0-9]+/', '-', $clean), '-'));
        return "<{$tag}{$attrs} id=\"{$slug}\">{$text}</{$tag}>";
    }, $articleHtml);
} else {
    // Fallback safe defaults so the HTML template doesn't blow up
    $title = $pageTitle = 'Article Not Found | Rootech IT Solutions';
    $intro = $canonicalUrl = $tag = $date = $authorName = $authorDp = $image = '';
    $articleHtml = '';
    $toc = [];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title><?= h($pageTitle) ?></title>
  <?php if ($post): ?>
  <meta name="description"  content="<?= h($intro) ?>">
  <meta name="keywords"     content="<?= h($tag) ?>">
  <meta name="author"       content="Rootech IT Solutions">
  <meta name="robots"       content="index, follow">
  <link rel="canonical"     href="<?= h($canonicalUrl) ?>">

  <meta property="og:type"        content="article">
  <meta property="og:url"         content="<?= h($canonicalUrl) ?>">
  <meta property="og:title"       content="<?= h($title) ?>">
  <meta property="og:description" content="<?= h($intro) ?>">
  <meta property="og:image"       content="<?= h($image) ?>">

  <meta property="twitter:card"        content="summary_large_image">
  <meta property="twitter:url"         content="<?= h($canonicalUrl) ?>">
  <meta property="twitter:title"       content="<?= h($title) ?>">
  <meta property="twitter:description" content="<?= h($intro) ?>">
  <meta property="twitter:image"       content="<?= h($image) ?>">
  <?php else: ?>
  <meta name="robots" content="noindex, nofollow">
  <?php endif; ?>

  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
  <link href="https://fonts.googleapis.com/" rel="preconnect">
  <link href="https://fonts.gstatic.com/" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link href="css/vendor-bundle.min.css" rel="stylesheet">
  <link href="css/main.css" rel="stylesheet">

  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5CKN4NCM');</script>
</head>

<body class="index-page">
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CKN4NCM" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container position-relative d-flex align-items-center justify-content-between">
      <a href="index.php" class="logo d-flex align-items-center me-auto me-xl-0">
        <span class="sitename">RITS</span><span>.</span>
      </a>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="index.php#hero">Home</a></li>
          <li><a href="index.php#about">About</a></li>
          <li><a href="index.php#services">Services</a></li>
          <li><a href="index.php#ventures">Ventures</a></li>
          <li><a href="index.php#team">Team</a></li>
          <li><a href="index.php#contact">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
      <a class="btn-getstarted" href="https://wa.link/vnv6xb">Let's Connect</a>
    </div>
  </header>

  <main class="main">

    <?php if ($errorMessage): ?>
    <!-- ========== ERROR STATE ========== -->
    <section class="section" style="min-height: 60vh; display:flex; align-items:center;">
      <div class="container text-center">
        <i class="bi bi-exclamation-circle" style="font-size:4rem; color:#6c757d;"></i>
        <h2 class="mt-4">Oops, something went wrong</h2>
        <p class="text-muted mt-2" style="max-width:480px; margin:0 auto;"><?= h($errorMessage) ?></p>
        <a href="index.php" class="btn btn-primary mt-4">Back to Home</a>
      </div>
    </section>

    <?php else: ?>
    <!-- ========== HERO ========== -->
    <section id="blog-hero" class="blog-hero section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <div class="blog-meta">
              <?php if ($tag): ?>
                <span class="blog-category"><?= h($tag) ?></span>
              <?php endif; ?>
              <?php if ($date): ?>
                <span class="blog-date"><?= h($date) ?></span>
              <?php endif; ?>
            </div>
            <h1><?= h($title) ?></h1>
            <?php if ($intro): ?>
              <p class="blog-intro"><?= h($intro) ?></p>
            <?php endif; ?>
            <div class="blog-author">
              <?php if ($authorDp): ?>
                <img src="<?= h($authorDp) ?>" alt="<?= h($authorName) ?>" class="author-avatar"
                     onerror="this.style.display='none'">
              <?php endif; ?>
              <div class="author-info">
                <span class="author-name"><?= h(ucwords($authorName)) ?></span><br>
                <span class="author-role">Rootech IT Solutions</span>
              </div>
            </div>
          </div>

          <?php if ($image): ?>
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="blog-featured-image">
              <img src="<?= h($image) ?>" alt="<?= h($title) ?>" class="img-fluid rounded"
                   onerror="this.closest('.blog-featured-image').style.display='none'">
            </div>
          </div>
          <?php endif; ?>
        </div>
      </div>
    </section>

    <!-- ========== CONTENT ========== -->
    <section id="blog-content" class="blog-content section light-background">
      <div class="container">
        <div class="row">

          <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <div class="blog-post-content">
              <?= $articleHtml ?>
            </div>

            <!-- Author Bio -->
            <div class="author-bio mt-5" data-aos="fade-up" data-aos-delay="200">
              <div class="bio-header">
                <?php if ($authorDp): ?>
                  <img src="<?= h($authorDp) ?>" alt="<?= h($authorName) ?>" class="bio-avatar"
                       onerror="this.style.display='none'">
                <?php endif; ?>
                <div class="bio-info">
                  <h4><?= h(ucwords($authorName)) ?></h4>
                  <p>Head of IT Operations &amp; Lead Architect at Rootech IT Solutions. Building technology that fits Ghana's reality.</p>
                  <div class="social-links">
                    <a href="https://wa.link/vnv6xb" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
                    <a href="mailto:rootech.inc@proton.me" aria-label="Email"><i class="bi bi-envelope"></i></a>
                    <a href="https://linkedin.com" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="blog-sidebar">

              <?php if (!empty($toc)): ?>
              <div class="sidebar-widget">
                <h4>Table of Contents</h4>
                <ul class="toc-list">
                  <?php foreach ($toc as $item): ?>
                    <li><a href="#<?= h($item['slug']) ?>"><?= h($item['label']) ?></a></li>
                  <?php endforeach; ?>
                </ul>
              </div>
              <?php endif; ?>

              <div class="sidebar-widget">
                <h4>Stay Updated</h4>
                <p>Subscribe for the latest insights from Rootech.</p>
                <div class="newsletter-form">
                  <input type="email" id="newsletter-email" placeholder="Enter your email" class="form-control mb-2">
                  <button class="btn btn-primary w-100" onclick="handleNewsletter()">Subscribe</button>
                  <p id="newsletter-msg" class="mt-2 small text-success" style="display:none;"></p>
                </div>
              </div>

              <div class="sidebar-widget">
                <h4>Categories</h4>
                <ul class="category-list">
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Innovation</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    <?php endif; ?>

  </main>

  <footer id="footer" class="footer">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.php" class="logo d-flex align-items-center">
            <span class="sitename">RITS</span>
          </a>
          <p>Empowering your business with innovative digital solutions, robust cybersecurity, and transformative technology—engineered for growth in a connected world.</p>
          <div class="social-links d-flex mt-4">
            <a href="#"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="index.php#about">About us</a></li>
            <li><a href="index.php#services">Services</a></li>
            <li><a href="index.php#contact">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="index.php#services">Web Design</a></li>
            <li><a href="index.php#services">Web Development</a></li>
            <li><a href="index.php#services">IT Consulting</a></li>
            <li><a href="index.php#services">Digital Marketing</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>Accra, Ghana</p>
          <p class="mt-4"><strong>Phone:</strong> <span>+233 54 631 0011</span></p>
          <p><strong>Email:</strong> <span><a href="mailto:rootech.inc@proton.me">rootech.inc@proton.me</a></span></p>
        </div>
      </div>
    </div>
    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">RITS</strong> <span>All Rights Reserved</span></p>
      <div class="credits">Designed by <a href="https://rootechits.com/">Rootech IT Solutions</a></div>
    </div>
  </footer>

  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  <div id="preloader"></div>

  <script src="js/vendor-bundle.min.js"></script>
  <script src="js/validate.js"></script>
  <script src="js/main.js"></script>
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/api.js"></script>
  <script data-cfasync="false" src="js/email-decode.min.js"></script>
  <script defer src="https://static.cloudflareinsights.com/beacon.min.js" crossorigin="anonymous"></script>

  <script>
    function handleNewsletter() {
      const emailEl = document.getElementById('newsletter-email');
      const msgEl   = document.getElementById('newsletter-msg');
      const email   = emailEl.value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msgEl.style.display = 'block';
        msgEl.className     = 'mt-2 small text-danger';
        msgEl.textContent   = 'Please enter a valid email address.';
        return;
      }
      // Hook up to your actual newsletter endpoint here
      msgEl.style.display = 'block';
      msgEl.className     = 'mt-2 small text-success';
      msgEl.textContent   = "You're subscribed! 🎉";
      emailEl.value       = '';
    }
  </script>
</body>
</html>