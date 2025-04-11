<template>
  <div class="container">
    <header>
      <h1>Home</h1>
    </header>
    <div class="wrapper">
      <div class="subpage">
        This is a sample vue application with instructions to deploy on GitHub Pages.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MarkdownIt from 'markdown-it'

// Initialize the MarkdownIt instance
const markdown = new MarkdownIt();

// Define a ref to hold the fetched markdown content
const source = ref("Deploy Instructions"); // Initial default value

// Fetch the markdown file content on component mount
onMounted(async () => {
  try {
    const response = await fetch('vue-example/deploy.md');
    if (response.ok) {
      source.value = await response.text();
    } else {
      console.error('Failed to load markdown file:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching markdown file:', error);
  }
});
</script>

<style scoped>
/* Style the rendered markdown content */
</style>