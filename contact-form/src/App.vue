<template>
  <div id="App">
    <div class="wrapper">
      <h2 class="PageTitle">CONTACT US!</h2>
      <div>
        <input type="text" placeholder="Name" v-model="name">
        <input type="email" placeholder="Email" v-model="email">

      </div>
      <div>
        <input type="text" placeholder="Your message" v-model="message">
      </div>
    
    <button class="custom-btn" @click="sendMessage">Send</button>
    <button class="custom-btn" @click="cancelMessage">Cancel</button>
  </div>
  <SubmittedForm v-if="isSubmitted" :submittedData="submittedData" />
  </div>
  
</template>

<script>
import SubmittedForm from '@/components/SubmittedForm.vue';

export default {
  name: 'App',
  components: {
    SubmittedForm
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isSubmitted: false,
      submittedData: {}
    };
  },
  methods: {
    sendMessage() {
      console.log('Sending message...');
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);

      this.submittedData = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      this.resetForm();
      this.isSubmitted = true;
    },
    cancelMessage() {
      this.resetForm();
      this.isSubmitted = false;
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
  };

</script>

<style>
#App {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}


 input[type="text"],
 input[type="email"] {
  width: 75%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.custom-btn {
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
}

body
{
  background: black;
}

  .wrapper
{
    margin: 75px auto;
    border-radius : 20px;
    padding-top: 75px;
    padding-bottom:75px;
    box-shadow: 0 0 50px 2px rgba(100,40,60,015);
    width: 100%;
    text-align: center;
    background-color: whitesmoke;
}
.PageTitle
{
  color: black;
  text-align: center;
}



</style>
