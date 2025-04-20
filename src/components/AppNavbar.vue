<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
}

.navbar ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.navbar li {
  margin: 0 15px;
}

.navbar a {
  text-decoration: none;
  color: white;
  font-size: 1.2em;
}

.navbar a:hover {
  color: #3498db;
}
</style>
