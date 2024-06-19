<template>
    <div class="grid-container">
        <div class="card" v-for="card in cards" :key="card.id" @click="openModal(card)">
            <img  :src="'/PortfolioArielOrellana'+ card.img" class="card-image">
            <div class="card-overlay">
                <h2 class="card-title">{{ card.titulo }}</h2>
            </div>
        </div>
    </div>
    <div v-if="selectedCard" class="modal" @click="closeModal">
        <transition name="modal" mode="out-in">
            <div class="modal-content" @click.stop >
                <span class="close" @click="closeModal">&times;</span>
                <button class="nav-button prev" @click="prevCard">&#9664;</button>
                <div class="modal-body" :key="modalKey">
                    <h2>{{ selectedCard.titulo }}</h2>
                    <img :src="'/PortfolioArielOrellana'+ selectedCard.img" :alt="selectedCard.titulo" class="modal-image">
                    <p>{{ selectedCard.descripccion }}</p>
                </div>
                <button class="nav-button next" @click="nextCard">&#9654;</button>
            </div>
        </transition>
    </div>
</template>
<script>
import HomeView from '@/views/HomeView.vue';

export default{
    props:['cards'],
    data(){
        return{
            selectedCard: null,
            selectedIndex: -1,
            modalKey: 1,
        };
    },
    methods: {
        openModal(card) {
            const elements = document.querySelectorAll('[data-aos]');
            elements.forEach(element => {
                element.removeAttribute('data-aos');
            });
            this.selectedIndex = this.cards.indexOf(card);
            this.selectedCard = card;
        },
        closeModal() {
            this.selectedCard = null;
            this.selectedIndex = -1;
            AOS.refresh();
        },
        prevCard() {
            if (this.selectedIndex > 0) {
                this.selectedIndex--;
                this.selectedCard = this.cards[this.selectedIndex];
                modalKey.value++; // Trigger transition
            }
        },
        nextCard() {
            if (this.selectedIndex < this.cards.length - 1) {
                this.selectedIndex++;
                this.selectedCard = this.cards[this.selectedIndex];
                modalKey.value++; // Trigger transition
            }
        }
    }
}
</script>
<style>
p{
    white-space: pre-line;
}
.card {
    position: relative;
    width: 250px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.05);
}

.card-image {
    width: 100%;
    display: block;
    transition: transform 0.3s ease-in-out;
}

.card:hover .card-image {
    transform: scale(1.1);
}

.card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    box-sizing: border-box;
    transition: background-color 0.3s ease-in-out;
}

.card-title {
    color: #fff;
    margin: 0;
    font-size: 18px;
}

.card:hover .card-overlay {
    background-color: rgba(0, 0, 0, 0.7);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  padding: 20px;
}
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media (max-width: 600px) {
  .grid-container {
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .card {
      width: 100%;
      max-width: 300px;
  }


}

</style>
