<template>
  <footer class="footer">
    <p>&copy; 2025 Our HOA | Contact: info@hoa.com</p>
    <p>Follow us on social media: 
      <a href="https://twitter.com" target="_blank">Twitter</a> | 
      <a href="https://facebook.com" target="_blank">Facebook</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer {
  background-color: #34495e;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer a {
  color: #3498db;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
