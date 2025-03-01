<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRACE college Digital Library</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+S
ans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <style>
        /* General Styles */
        body {
            font-family: 'Open Sans', sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
        }

        h1,
        h2,
        h3 {
            font-family: 'Montserrat', sans-serif;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        /* Header */
        header {
            background: #800000;
            /* Maroon */
            color: white;
            padding: 20px 0;
        }

        header .logo {
            font-size: 24px;
            font-weight: bold;
        }

        header nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            gap: 20px;
        }

        header nav ul li a {
            color: white;
            font-weight: 600;
        }

        header nav ul li a:hover {
            text-decoration: underline;
        }

        /* Hero Section */
        .hero {
            background: white;
            text-align: center;
            padding: 60px 0;
        }

        .hero h1 {
            font-size: 36px;
            color: #800000;
        }

        .hero p {
            font-size: 18px;
            color: #333;
            margin: 20px 0;
        }

        .hero .btn {
            background: #800000;
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            font-weight: bold;
        }

        /* Featured Section */
        .featured {
            background: #f5f5f5;
            padding: 40px 0;
        }

        .featured h2 {
            text-align: center;
            color: #800000;
            margin-bottom: 30px;
        }

        .featured-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }

        .featured-item {
            background: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }

        .featured-item img {
            width: 100%;
            height: auto;
            border-radius: 4px;
        }

        .featured-item h3 {
            font-size: 20px;
            margin: 10px 0;
        }

        .featured-item p {
            font-size: 14px;
            color: #666;
        }

        .featured-item .btn-outline {
            display: inline-block;
            margin-top: 10px;
            padding: 8px 16px;
            border: 2px solid #800000;
            color: #800000;
            border-radius: 4px;
            font-weight: bold;
        }

        .featured-item .btn-outline:hover {
            background: #800000;
            color: white;
        }

        /* Categories Section */
        .categories {
            padding: 40px 0;
        }

        .categories h2 {
            text-align: center;
            color: #800000;
            margin-bottom: 30px;
        }

        .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
        }

        .category-item {
            text-align: center;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .category-item span {
            font-size: 32px;
        }

        .category-item h3 {
            font-size: 18px;
            margin: 10px 0;
        }

        /* Footer */
        footer {
            background: #800000;
            color: white;
            padding: 40px 0;
            text-align: center;
        }

        footer .footer-logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        footer .footer-links ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        footer .footer-links ul li a {
            color: white;
        }

        footer .footer-links ul li a:hover {
            text-decoration: underline;
        }

        footer .social-icons {
            margin: 20px 0;
        }

        footer .social-icons a {
            color: white;
            font-size: 24px;
            margin: 0 10px;
        }

        footer .copyright {
            font-size: 14px;
            color: #f5f5f5;
        }
    </style>
</head>

<body>
    <!-- Header Section -->
    <header>
        <div class="container">
            <div class="logo">TRACE college Digital Library</div>
        </div>
        </div>
    </header>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Explore The School's Digital Library</h1>
            <p>All your library needs within your hands!</p>
            <a href={{route('books.index')}} class="btn">Get Started</a>
        </div>

    </section>
    <!-- Featured Section -->
    <section class="featured">
        <div class="container">
            <h2>Featured Collections</h2>
            <div class="featured-grid">
                <!-- <div class="featured-item">
                    <img src="https://via.placeholder.com/150" alt="Book Cover">
                    <h3>Book Title 1</h3>
                    <p>Author Name</p>
                    <a href="#" class="btn-outline">Read Now</a>
                </div>
                <div class="featured-item">
                    <img src="https://via.placeholder.com/150" alt="Book cover">
                    <h3>Book Title</h3>
                    <p>Author Name</p>
                    <a href="#" class="btn-outline">Read Now</a>
                </div>
                <div class="featured-item">
                    <img src="https://via.placeholder.com/150" alt="Book Cover">
                    <h3>Book Title 3</h3>
                    <p>Author Name</p>
                    <a href="#" class="btn-outline">Read Now</a>
                </div> -->
                @foreach ($books as $book)
                <div class="featured-item">
                <img src="{{ $book['image'] }}" alt="{{ $book['title'] }}">
                    <h3>{{ $book['title'] }}</h3>
                    <p>{{ $book['author'] }}</p>
                    <a href="{{ $book['file']}}" target="_blank" class="btn-outline">Read Now</a>
                </div>
                @endforeach
            </div>
        </div>
    </section>
    <!-- Categories Section -->
    <section class="categories">
        <div class="container">
            <h2>Browse by Category</h2>
            <div class="categories-grid">
                <div class="category-item">
                    <span>📚</span>
                    <h3>Fiction</h3>
                </div>
                <div class="category-item">
                    <span>🔬</span>
                    <h3>Science</h3>
                </div>
                <div class="category-item">
                    <span>🏛</span>
                    <h3>History</h3>
                </div>
                <div class="category-item">
                    <span>💡</span>
                    <h3>Mathematics</h3>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer Section -->
    <footer>
        <div class="container">
            <div class="footer-logo">Digital Library</div>
            <div class="copyright">
                &copy; 2025 TRACE College. All rights reserved.
            </div>
        </div>
    </footer>
</body>

</html>
