// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Utilizzare almeno una classe CSS in modo dinamico
// Bonus:
// 1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// 2. Cambiare dinamicamente l’immagine
// 3. Al click di un bottone nascondere l’immagine e mostrare un testo

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello',
      messageTwo: 'Vue',
      messageThree: '.Js!',
      messageFour: 'The progressive Javascript Framework',
      clickImg: 'Click the Image',
      color: 'blue',
      colorText: 'green',
      showText: false,
      path: './img/vue.png'
    }
  }, 
  methods: {
    changeImages(newImage){
      this.path = newImage
    },
    btnShow(show) {
      this.path = '',
      this.showText = show
    }
  }
}).mount('#app')