<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Our HOA</h1>
      <p>Your community, your home. Stay connected and informed.</p>
      <button @click="goToDashboard">Get Started</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    goToDashboard() {
      // Implement a method to navigate to the dashboard, like using Vue Router
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style scoped>
.hero {
  background-color: #3498db;
  color: white;
  padding: 50px;
  text-align: center;
}

.hero h1 {
  font-size: 3em;
}

.hero p {
  font-size: 1.2em;
}

.hero button {
  padding: 10px 20px;
  font-size: 1.1em;
  background-color: #e74c3c;
  color: white;
  border: none;
  cursor: pointer;
}

.hero button:hover {
  background-color: #c0392b;
}
</style>
