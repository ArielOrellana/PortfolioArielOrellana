<script setup lang="ts">
defineProps({ compact: Boolean })
</script>

<template>
  <div class="social" :class="{ compact }">
    <a
      href="https://github.com/ArielOrellana"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub (se abre en nueva ventana)"
      ><i class="fa-brands fa-github" aria-hidden="true"></i
    ></a>
    <a
      href="https://gitlab.com/OrellanaAriel1998"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitLab (se abre en nueva ventana)"
      ><i class="fa-brands fa-gitlab" aria-hidden="true"></i
    ></a>
    <a
      href="https://www.linkedin.com/in/orellanaariel1998/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn (se abre en nueva ventana)"
      ><i class="fa-brands fa-linkedin" aria-hidden="true"></i
    ></a>
    <a href="mailto:orellanaariel1998@gmail.com" aria-label="Email"
      ><i class="fa-solid fa-envelope" aria-hidden="true"></i
    ></a>
    <a
      href="https://www.instagram.com/patu.hard/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram (se abre en nueva ventana)"
      ><i class="fa-brands fa-instagram" aria-hidden="true"></i
    ></a>
  </div>
</template>

<style scoped>
.social {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
}
.social a {
  font-size: 1.3rem;
  color: var(--text-muted);
  transition:
    color 0.2s,
    transform 0.2s;
}
.social a:hover {
  color: var(--primary);
  transform: scale(1.15);
}
.compact {
  gap: 0.75rem;
}
.compact a {
  font-size: 1.1rem;
}
</style>
