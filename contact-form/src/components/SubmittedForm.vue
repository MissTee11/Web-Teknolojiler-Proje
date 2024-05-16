<template>
  <div class="submitted-info">
  <div>
    <h2>Submitted Information</h2>
    <p><strong>Name:</strong> {{ submittedData.name }}</p>
    <p><strong>Email:</strong> {{ submittedData.email }}</p>
    <p><strong>Message:</strong> {{ submittedData.message }}</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SubmittedInfo',
  props: {
    submittedData: Object
  }
};
</script>

<style>
.submitted-info {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
}

.submitted-info h2 {
  margin-bottom: 10px;
  font-size: 20px;
}

.submitted-info p {
  margin-bottom: 5px;
}

.submitted-info strong {
  font-weight: bold;
}

</style>
