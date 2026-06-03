<script setup lang="ts"></script>

<template>
  <section class="contact">
    <h2 class="section-title">Contacto</h2>
    <p class="contact-desc">Podés contactarme a través de cualquiera de estos medios</p>
    <div class="contact-grid">
      <a
        href="https://www.linkedin.com/in/orellanaariel1998/"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-card"
      >
        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/ArielOrellana"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-card"
      >
        <i class="fa-brands fa-github" aria-hidden="true"></i>
        <span>GitHub</span>
      </a>
      <a
        href="https://gitlab.com/OrellanaAriel1998"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-card"
      >
        <i class="fa-brands fa-gitlab" aria-hidden="true"></i>
        <span>GitLab</span>
      </a>
      <a
        href="mailto:orellanaariel1998@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-card"
      >
        <i class="fa-solid fa-envelope" aria-hidden="true"></i>
        <span>Email</span>
      </a>
      <a
        href="https://www.instagram.com/patu.hard/"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-card"
      >
        <i class="fa-brands fa-instagram" aria-hidden="true"></i>
        <span>Instagram</span>
      </a>
      <div class="contact-card email-card">
        <i class="fa-solid fa-at" aria-hidden="true"></i>
        <span>orellanaariel1998@gmail.com</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  text-align: center;
}
.contact-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 2rem;
}
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}
.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-size: 1.5rem;
  transition:
    transform 0.25s ease,
    border-color 0.25s,
    box-shadow 0.25s;
}
.contact-card:hover {
  transform: translateY(-3px);
  border-color: var(--primary);
  box-shadow: 0 6px 20px var(--primary-glow);
  color: var(--text);
}
.contact-card span {
  font-size: 0.85rem;
  color: var(--text-muted);
}
.contact-card:hover span {
  color: var(--text);
}
.email-card {
  grid-column: 1 / -1;
  flex-direction: row;
  justify-content: center;
}
.email-card span {
  font-size: 0.9rem;
  color: var(--primary);
}
</style>
