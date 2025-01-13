
#Thank you SOFTWIE
```
<!-- HTML Code -->
<div class="logo-container">
  <div class="logo">
    <span class="logo-primary">Soft</span><span class="logo-secondary">wie</span>
  </div>
  <p class="tagline">Innovating the Future</p>
</div>

<!-- CSS Code -->
<style>
  .logo-container {
    text-align: center;
    font-family: Arial, sans-serif;
    margin: 20px auto;
  }

  .logo {
    font-size: 2.5rem;
    font-weight: bold;
    color: #0056b3;
    display: inline-block;
    border: 3px solid #0056b3;
    padding: 10px 20px;
    border-radius: 5px;
  }

  .logo-primary {
    color: #0056b3; /* Primary Color */
  }

  .logo-secondary {
    color: #e83e8c; /* Secondary Color */
  }

  .tagline {
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
  }
</style>

<!-- JavaScript Code ( Animation) -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseover', () => {
      logo.style.transform = 'scale(1.1)';
      logo.style.transition = 'transform 0.3s ease';
    });
    logo.addEventListener('mouseout', () => {
      logo.style.transform = 'scale(1)';
    });
  });
</script>

```
