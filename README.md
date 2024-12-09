# Rysgally Nesip Website

A modern Django-based website for Rysgally Nesip company.

## Features

- Responsive design
- Multi-language support
- Product catalog
- Contact form
- About us page
- SEO optimized

## Setup

1. Create a virtual environment:

   ```bash
   python -m venv venv
   ```

2. Activate the virtual environment:

   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run migrations:

   ```bash
   python manage.py migrate
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

## Project Structure

- `core/` - Main application
  - `templates/` - HTML templates
  - `static/` - Static files (CSS, JS, images)
  - `views.py` - View functions
  - `models.py` - Database models
  - `urls.py` - URL routing

## Technologies Used

- Django
- HTML5
- CSS3
- JavaScript
- Bootstrap
- SQLite
